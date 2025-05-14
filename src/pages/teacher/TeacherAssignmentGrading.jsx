import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const TeacherAssignmentGrading = () => {
  const [activeSubmission, setActiveSubmission] = useState(null);
  const [grade, setGrade] = useState('');
  const [feedback, setFeedback] = useState('');

  // Mock assignment data
  const assignment = {
    id: '1',
    title: 'Programming Assignment 1',
    course: 'Programming Fundamentals',
    dueDate: '2025-05-20T23:59:59',
    description: 'Implement a simple calculator using Python. The calculator should support basic arithmetic operations.',
    maxScore: 100,
    totalSubmissions: 32,
    gradedSubmissions: 25
  };

  // Mock submissions data
  const submissions = [
    {
      id: 1,
      studentName: 'Ahmad Khan',
      studentId: '2021CS101',
      submittedAt: '2025-05-14T15:30:00',
      fileName: 'calculator.py',
      status: 'pending',
      grade: null,
      feedback: ''
    },
    {
      id: 2,
      studentName: 'Sarah Ahmed',
      studentId: '2021CS102',
      submittedAt: '2025-05-14T14:45:00',
      fileName: 'calculator.py',
      status: 'graded',
      grade: 95,
      feedback: 'Excellent work! Clear code and well-documented.'
    }
  ];

  const handleGradeSubmit = (submissionId) => {
    if (!grade || grade > assignment.maxScore) return;
    
    // Mock grade submission
    console.log('Submitting grade:', {
      submissionId,
      grade,
      feedback
    });

    // Reset form
    setGrade('');
    setFeedback('');
    setActiveSubmission(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-merriweather font-bold text-[#5D0018] mb-2">
          {assignment.title}
        </h1>
        <p className="text-[#4A4A4A]">
          {assignment.course}
        </p>
      </div>

      {/* Assignment Overview */}
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm font-medium text-[#5D0018] mb-1">Due Date</h3>
            <p className="text-[#4A4A4A]">
              {new Date(assignment.dueDate).toLocaleString()}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[#5D0018] mb-1">Submissions</h3>
            <p className="text-[#4A4A4A]">
              {assignment.gradedSubmissions} / {assignment.totalSubmissions} graded
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-[#5D0018] mb-1">Maximum Score</h3>
            <p className="text-[#4A4A4A]">{assignment.maxScore} points</p>
          </div>
        </div>
      </Card>

      {/* Submissions List */}
      <div>
        <h2 className="text-xl font-merriweather font-semibold text-[#5D0018] mb-4">
          Student Submissions
        </h2>
        <Card>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#5D0018]">Student</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#5D0018]">Submission Date</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#5D0018]">File</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#5D0018]">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#5D0018]">Grade</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[#5D0018]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {submissions.map((submission) => (
                  <tr key={submission.id}>
                    <td className="px-4 py-3">
                      <div>
                        <p className="text-[#5D0018] font-medium">{submission.studentName}</p>
                        <p className="text-sm text-[#4A4A4A]">{submission.studentId}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[#4A4A4A]">
                      {new Date(submission.submittedAt).toLocaleString()}
                    </td>
                    <td className="px-4 py-3">
                      <a href="#" className="text-[#166335] hover:underline">
                        {submission.fileName}
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        submission.status === 'graded'
                          ? 'bg-[#166335]/10 text-[#166335]'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {submission.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[#4A4A4A]">
                      {submission.grade || '-'}
                    </td>
                    <td className="px-4 py-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveSubmission(submission)}
                      >
                        {submission.status === 'graded' ? 'Edit Grade' : 'Grade'}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Grading Modal */}
      {activeSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card variant="white" className="w-full max-w-2xl">
            <div className="p-6">
              <h3 className="text-xl font-merriweather font-semibold text-[#5D0018] mb-6">
                Grade Submission
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-[#5D0018] mb-2">Student Details</h4>
                  <p className="text-[#4A4A4A]">
                    {activeSubmission.studentName} ({activeSubmission.studentId})
                  </p>
                  <p className="text-sm text-[#4A4A4A]">
                    Submitted on {new Date(activeSubmission.submittedAt).toLocaleString()}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-[#5D0018] mb-2">Assignment File</h4>
                  <a href="#" className="text-[#166335] hover:underline">
                    {activeSubmission.fileName}
                  </a>
                </div>

                <div className="space-y-4">
                  <Input
                    label={`Grade (out of ${assignment.maxScore})`}
                    type="number"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    min="0"
                    max={assignment.maxScore}
                    required
                  />

                  <div>
                    <label className="block text-sm font-medium text-[#5D0018] mb-2">
                      Feedback
                    </label>
                    <textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D0018] focus:border-transparent"
                      placeholder="Provide feedback to the student..."
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => setActiveSubmission(null)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => handleGradeSubmit(activeSubmission.id)}
                  >
                    Submit Grade
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TeacherAssignmentGrading;