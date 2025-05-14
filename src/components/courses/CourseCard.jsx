import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import Card from '../common/Card';
import '../../index.css';

const CourseCard = ({ course, userRole = 'student', onEnroll, onEdit, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleEnroll = () => {
    // Mock prerequisite check
    if (course.prerequisites !== 'None' && !isPrerequisiteMet) {
      alert(`This course requires ${course.prerequisites}`);
      setShowModal(false);
      return;
    }
    setIsEnrolled(true);
    onEnroll?.(course.id);
    setShowModal(false);
  };

  const handleDelete = () => {
    onDelete?.(course.id);
    setShowModal(false);
  };

  // Mock prerequisite check - in real app would check student's completed courses
  const isPrerequisiteMet = course.prerequisites === 'None';
  const isWaitlisted = course.enrolledStudents >= course.maxStudents;
  const seatsLeft = course.maxStudents - course.enrolledStudents;
  const courseStatus = isWaitlisted ? 'Waitlist' : seatsLeft <= 5 ? 'Limited' : 'Open';

  const statusColors = {
    Open: 'bg-[#166335] text-white',
    Limited: 'bg-[#FFA500] text-white',
    Waitlist: 'bg-[#5D0018] text-white'
  };

  const TeacherActions = () => (
    <div className="flex space-x-2 mt-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onEdit?.(course)}
        className="flex-1"
      >
        Edit
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowModal(true)}
        className="flex-1 !text-red-600 !border-red-600 hover:!bg-red-50"
      >
        Delete
      </Button>
    </div>
  );

  const StudentActions = () => (
    <div className="mt-4">
      <Button
        variant={isEnrolled ? 'secondary' : 'primary'}
        size="sm"
        onClick={() => !isEnrolled && setShowModal(true)}
        fullWidth
        disabled={isEnrolled}
      >
        {isEnrolled ? 'Enrolled' : 'Enroll Now'}
      </Button>
    </div>
  );

  return (
    <>
      <Card className="flex flex-col h-full transition-all duration-300">
        <div className="p-4 flex-1">
          {/* Course Header */}
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <h3 className="text-lg font-merriweather font-semibold text-[#5D0018] mb-1">
                {course.title}
              </h3>
              <div className="flex items-center space-x-2">
                <p className="text-sm text-[#4A4A4A]">{course.code}</p>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[courseStatus]}`}>
                  {courseStatus}
                </span>
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#E8E4D9] text-[#5D0018]">
              {course.credits} Credits
            </span>
          </div>

          {/* Basic Course Info */}
          <div className="space-y-2">
            <p className="text-sm text-[#4A4A4A]">
              <span className="font-medium">Instructor:</span> {course.instructor}
            </p>
            <p className="text-sm text-[#4A4A4A]">
              <span className="font-medium">Schedule:</span> {course.schedule}
            </p>
            <p className="text-sm text-[#4A4A4A]">
              <span className="font-medium">Department:</span> {course.department}
            </p>
          </div>

          {/* Expandable Content */}
          <div className={`mt-4 overflow-hidden transition-all duration-300 
            ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}>
            <div className="space-y-4 pt-4 border-t border-[#D8D4C9]">
              {/* Description */}
              <div>
                <h4 className="text-sm font-semibold text-[#5D0018] mb-2">Description</h4>
                <p className="text-sm text-[#4A4A4A]">{course.description}</p>
              </div>

              {/* Prerequisites */}
              <div>
                <h4 className="text-sm font-semibold text-[#5D0018] mb-2">Prerequisites</h4>
                <p className="text-sm text-[#4A4A4A]">{course.prerequisites}</p>
              </div>

              {/* Available Materials */}
              {course.materials && (
                <div>
                  <h4 className="text-sm font-semibold text-[#5D0018] mb-2">Course Materials</h4>
                  <ul className="text-sm text-[#4A4A4A] space-y-1">
                    {course.materials.map((material, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2">•</span>
                        <Link to="#" className="text-[#166335] hover:underline">
                          {material}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Role-specific Info */}
          {userRole === 'teacher' ? (
            <div className="mt-4">
              <p className="text-sm text-[#4A4A4A]">
                <span className="font-medium">Enrolled:</span>{' '}
                {course.enrolledStudents}/{course.maxStudents} students
                {seatsLeft <= 5 && (
                  <span className="ml-2 text-[#5D0018]">
                    Only {seatsLeft} {seatsLeft === 1 ? 'seat' : 'seats'} left!
                  </span>
                )}
              </p>
            </div>
          ) : (
            <div className="mt-4">
              <div className="flex justify-between text-sm text-[#4A4A4A] mb-1">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <div className="h-2 bg-[#E8E4D9] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#166335] rounded-full transition-all duration-300"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Expand/Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-4 text-sm text-[#166335] hover:text-[#0E4020] font-medium focus:outline-none"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>

          {/* Actions */}
          {userRole === 'teacher' ? <TeacherActions /> : <StudentActions />}
        </div>
      </Card>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card variant="white" className="w-full max-w-md">
            <div className="p-6">
              <h3 className="text-lg font-merriweather font-semibold text-[#5D0018] mb-4">
                {userRole === 'teacher' ? 'Confirm Delete' : 'Confirm Enrollment'}
              </h3>
              {userRole === 'student' && (
                <>
                  {!isPrerequisiteMet && (
                    <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
                      Warning: This course requires {course.prerequisites}
                    </div>
                  )}
                  {isWaitlisted && (
                    <div className="mb-4 p-3 bg-yellow-50 text-yellow-700 rounded-md">
                      Note: This course is full. You will be added to the waitlist.
                    </div>
                  )}
                </>
              )}
              <p className="text-[#4A4A4A] mb-6">
                {userRole === 'teacher'
                  ? `Are you sure you want to delete "${course.title}"?`
                  : `Do you want to enroll in "${course.title}"?`}
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  onClick={() => setShowModal(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  variant={userRole === 'teacher' ? 'outline' : 'primary'}
                  onClick={userRole === 'teacher' ? handleDelete : handleEnroll}
                  className={`flex-1 ${
                    userRole === 'teacher'
                      ? '!text-red-600 !border-red-600 hover:!bg-red-50'
                      : ''
                  }`}
                >
                  {userRole === 'teacher' ? 'Delete' : 'Confirm'}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default CourseCard;
