import React, { useState } from 'react';
import CourseCard from './CourseCard';
import Button from '../common/Button';
import Input from '../common/Input';
import Card from '../common/Card';
import { departments, semesters } from '../../constants/mockData';

const CourseGrid = ({ courses = [], userRole = 'student', onEnroll, onEdit, onDelete }) => {
  const [view, setView] = useState('grid');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [sortBy, setSortBy] = useState('title');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filters, setFilters] = useState({
    department: '',
    semester: '',
    status: 'all'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [newCourse, setNewCourse] = useState({
    title: '',
    code: '',
    description: '',
    credits: 3,
    instructor: '',
    schedule: '',
    prerequisites: 'None',
    maxStudents: 40,
    department: '',
    semester: '',
    materials: []
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSortChange = (value) => {
    if (value === sortBy) {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(value);
      setSortOrder('asc');
    }
  };

  const handleCreateCourse = (e) => {
    e.preventDefault();
    // Mock course creation
    console.log('Creating course:', newCourse);
    setShowCreateModal(false);
    // Reset form
    setNewCourse({
      title: '',
      code: '',
      description: '',
      credits: 3,
      instructor: '',
      schedule: '',
      prerequisites: 'None',
      maxStudents: 40,
      department: '',
      semester: '',
      materials: []
    });
  };

  const filteredAndSortedCourses = courses
    .filter(course => {
      if (filters.department && course.department !== filters.department) return false;
      if (filters.semester && course.semester !== filters.semester) return false;
      if (filters.status !== 'all') {
        const isWaitlisted = course.enrolledStudents >= course.maxStudents;
        const seatsLeft = course.maxStudents - course.enrolledStudents;
        const status = isWaitlisted ? 'waitlist' : seatsLeft <= 5 ? 'limited' : 'open';
        if (status !== filters.status) return false;
      }
      if (searchQuery && !course.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'date':
          comparison = new Date(a.startDate) - new Date(b.startDate);
          break;
        case 'enrollment':
          comparison = a.enrolledStudents - b.enrolledStudents;
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        default:
          comparison = 0;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  // Group courses by department if needed
  const groupedCourses = filters.department ? null : 
    filteredAndSortedCourses.reduce((acc, course) => {
      const dept = course.department;
      if (!acc[dept]) acc[dept] = [];
      acc[dept].push(course);
      return acc;
    }, {});

  return (
    <div className="space-y-6">
      {/* Teacher Actions */}
      {userRole === 'teacher' && (
        <div className="flex justify-end">
          <Button
            variant="primary"
            size="md"
            onClick={() => setShowCreateModal(true)}
          >
            Create New Course
          </Button>
        </div>
      )}

      {/* Filters Section */}
      <Card variant="white" className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D0018] focus:border-transparent"
            />
          </div>

          {/* Department Filter */}
          <div>
            <select
              name="department"
              value={filters.department}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D0018] focus:border-transparent"
            >
              <option value="">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D0018] focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="limited">Limited Seats</option>
              <option value="waitlist">Waitlist</option>
            </select>
          </div>

          {/* View and Sort Options */}
          <div className="flex space-x-2">
            {/* View Toggle */}
            <div className="inline-flex rounded-md shadow-sm">
              <button
                type="button"
                onClick={() => setView('grid')}
                className={`px-3 py-2 text-sm font-medium rounded-l-md border ${
                  view === 'grid'
                    ? 'bg-[#5D0018] text-white border-[#5D0018]'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                Grid
              </button>
              <button
                type="button"
                onClick={() => setView('list')}
                className={`px-3 py-2 text-sm font-medium rounded-r-md border-t border-r border-b ${
                  view === 'list'
                    ? 'bg-[#5D0018] text-white border-[#5D0018]'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                List
              </button>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D0018] focus:border-transparent"
            >
              <option value="title">Sort by Title</option>
              <option value="date">Sort by Date</option>
              <option value="enrollment">Sort by Enrollment</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Results Count */}
      <div className="text-[#4A4A4A]">
        Found {filteredAndSortedCourses.length} course{filteredAndSortedCourses.length !== 1 ? 's' : ''}
      </div>

      {/* Courses Grid/List */}
      {groupedCourses ? (
        // Grouped by department
        Object.entries(groupedCourses).map(([dept, deptCourses]) => (
          <div key={dept} className="mb-8">
            <h2 className="text-xl font-merriweather font-semibold text-[#5D0018] mb-4">
              {dept}
            </h2>
            <div className={view === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
            }>
              {deptCourses.map(course => (
                <CourseCard
                  key={course.id}
                  course={course}
                  userRole={userRole}
                  onEnroll={onEnroll}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        // Regular grid/list view
        <div className={view === 'grid' 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          : "space-y-4"
        }>
          {filteredAndSortedCourses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              userRole={userRole}
              onEnroll={onEnroll}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}

      {/* Create Course Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card variant="white" className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-xl font-merriweather font-semibold text-[#5D0018] mb-6">
                Create New Course
              </h3>
              <form onSubmit={handleCreateCourse} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Course Title"
                    value={newCourse.title}
                    onChange={(e) => setNewCourse(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                  <Input
                    label="Course Code"
                    value={newCourse.code}
                    onChange={(e) => setNewCourse(prev => ({ ...prev, code: e.target.value }))}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={newCourse.description}
                    onChange={(e) => setNewCourse(prev => ({ ...prev, description: e.target.value }))}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D0018] focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Credits"
                    type="number"
                    value={newCourse.credits}
                    onChange={(e) => setNewCourse(prev => ({ ...prev, credits: e.target.value }))}
                    required
                  />
                  <Input
                    label="Schedule"
                    placeholder="e.g., Mon/Wed 10-12"
                    value={newCourse.schedule}
                    onChange={(e) => setNewCourse(prev => ({ ...prev, schedule: e.target.value }))}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Prerequisites
                    </label>
                    <select
                      value={newCourse.prerequisites}
                      onChange={(e) => setNewCourse(prev => ({ ...prev, prerequisites: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D0018] focus:border-transparent"
                      required
                    >
                      <option value="None">None</option>
                      <option value="CS101">CS101</option>
                      <option value="MGT201">MGT201</option>
                    </select>
                  </div>
                  <Input
                    label="Max Students"
                    type="number"
                    value={newCourse.maxStudents}
                    onChange={(e) => setNewCourse(prev => ({ ...prev, maxStudents: e.target.value }))}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Department
                    </label>
                    <select
                      value={newCourse.department}
                      onChange={(e) => setNewCourse(prev => ({ ...prev, department: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D0018] focus:border-transparent"
                      required
                    >
                      <option value="">Select Department</option>
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Semester
                    </label>
                    <select
                      value={newCourse.semester}
                      onChange={(e) => setNewCourse(prev => ({ ...prev, semester: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D0018] focus:border-transparent"
                      required
                    >
                      <option value="">Select Semester</option>
                      {semesters.map(sem => (
                        <option key={sem} value={sem}>{sem}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 mt-6">
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                  >
                    Create Course
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CourseGrid;
