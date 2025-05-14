import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const StudentAssignmentSubmission = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Mock assignment data
  const assignment = {
    id: '1',
    title: 'Programming Assignment 1',
    course: 'Programming Fundamentals',
    dueDate: '2025-05-20T23:59:59',
    description: 'Implement a simple calculator using Python. The calculator should support basic arithmetic operations.',
    maxScore: 100,
    status: 'pending', // pending, submitted, graded
    attachments: ['Assignment_Guidelines.pdf', 'Sample_Input_Output.txt']
  };

  // Mock submissions
  const previousSubmissions = [
    {
      id: 1,
      fileName: 'calculator.py',
      submittedAt: '2025-05-14T15:30:00',
      status: 'submitted'
    }
  ];

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    setUploading(true);
    // Mock upload delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setUploading(false);
    setSelectedFile(null);
    // Mock success message
    alert('Assignment submitted successfully!');
  };

  const getRemainingTime = () => {
    const now = new Date();
    const due = new Date(assignment.dueDate);
    const diff = due - now;

    if (diff < 0) return 'Past due';

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return `${days} days ${hours} hours remaining`;
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

      {/* Assignment Details */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-[#5D0018] mb-2">Description</h2>
            <p className="text-[#4A4A4A]">{assignment.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <div>
              <h3 className="text-sm font-medium text-[#5D0018]">Due Date</h3>
              <p className="text-[#4A4A4A]">
                {new Date(assignment.dueDate).toLocaleString()}
              </p>
              <p className="text-sm text-[#166335] mt-1">
                {getRemainingTime()}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-[#5D0018]">Maximum Score</h3>
              <p className="text-[#4A4A4A]">{assignment.maxScore} points</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-[#5D0018] mb-2">Attachments</h3>
            <div className="space-y-2">
              {assignment.attachments.map((attachment, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-[#5D0018]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <a href="#" className="text-[#166335] hover:underline">{attachment}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Previous Submissions */}
      <div>
        <h2 className="text-xl font-merriweather font-semibold text-[#5D0018] mb-4">
          Previous Submissions
        </h2>
        <Card>
          <div className="divide-y divide-gray-200">
            {previousSubmissions.map((submission) => (
              <div key={submission.id} className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-[#5D0018]">{submission.fileName}</p>
                  <p className="text-sm text-[#4A4A4A]">
                    Submitted on {new Date(submission.submittedAt).toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-2 py-1 bg-[#166335]/10 text-[#166335] rounded-full text-sm">
                    {submission.status}
                  </span>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Submit New Assignment */}
      <div>
        <h2 className="text-xl font-merriweather font-semibold text-[#5D0018] mb-4">
          Submit Assignment
        </h2>
        <Card>
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#5D0018] mb-2">
                Upload your solution
              </label>
              <div className="flex items-center space-x-4">
                <Input
                  type="file"
                  onChange={handleFileChange}
                  className="flex-1"
                  required
                />
                <Button
                  type="submit"
                  disabled={!selectedFile || uploading}
                  className="whitespace-nowrap"
                >
                  {uploading ? 'Uploading...' : 'Submit Assignment'}
                </Button>
              </div>
              <p className="mt-2 text-sm text-[#4A4A4A]">
                Accepted file types: .py, .pdf, .zip (max 10MB)
              </p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default StudentAssignmentSubmission;