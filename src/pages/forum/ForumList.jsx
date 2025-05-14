import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const ForumList = () => {
  const [showNewThreadModal, setShowNewThreadModal] = useState(false);
  const [newThreadTitle, setNewThreadTitle] = useState('');
  const [newThreadContent, setNewThreadContent] = useState('');

  // Mock forum data
  const forums = [
    {
      id: 1,
      title: 'Programming Fundamentals Discussion',
      courseCode: 'CS101',
      lastActivity: '2024-02-15T10:30:00',
      threadCount: 15,
      recentThreads: [
        {
          id: 1,
          title: 'Help with Python loops',
          author: 'Ahmad Khan',
          responses: 5,
          lastActivity: '2024-02-15T10:30:00'
        },
        {
          id: 2,
          title: 'Understanding recursion',
          author: 'Sarah Ahmed',
          responses: 3,
          lastActivity: '2024-02-14T15:45:00'
        }
      ]
    },
    {
      id: 2,
      title: 'Data Structures General Discussion',
      courseCode: 'CS201',
      lastActivity: '2024-02-14T16:20:00',
      threadCount: 23,
      recentThreads: [
        {
          id: 3,
          title: 'Binary Search Tree Implementation',
          author: 'Usman Ali',
          responses: 8,
          lastActivity: '2024-02-14T16:20:00'
        }
      ]
    }
  ];

  const handleCreateThread = () => {
    if (!newThreadTitle.trim() || !newThreadContent.trim()) return;

    // Mock thread creation
    console.log('Creating new thread:', {
      title: newThreadTitle,
      content: newThreadContent
    });

    setNewThreadTitle('');
    setNewThreadContent('');
    setShowNewThreadModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-merriweather font-bold text-[#5D0018]">
          Discussion Forums
        </h1>
        <Button
          variant="primary"
          onClick={() => setShowNewThreadModal(true)}
        >
          Start New Thread
        </Button>
      </div>

      <div className="grid gap-6">
        {forums.map((forum) => (
          <Card key={forum.id} className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-merriweather font-semibold text-[#5D0018]">
                    {forum.title}
                  </h2>
                  <p className="text-sm text-[#4A4A4A]">
                    Course: {forum.courseCode}
                  </p>
                </div>
                <div className="text-right text-sm text-[#4A4A4A]">
                  <p>{forum.threadCount} threads</p>
                  <p>Last activity: {new Date(forum.lastActivity).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-sm font-medium text-[#5D0018] mb-3">
                  Recent Discussions
                </h3>
                <div className="space-y-3">
                  {forum.recentThreads.map((thread) => (
                    <div
                      key={thread.id}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div>
                        <h4 className="font-medium text-[#5D0018]">
                          {thread.title}
                        </h4>
                        <p className="text-sm text-[#4A4A4A]">
                          by {thread.author}
                        </p>
                      </div>
                      <div className="text-right text-sm text-[#4A4A4A]">
                        <p>{thread.responses} responses</p>
                        <p>
                          {new Date(thread.lastActivity).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {/* Navigate to forum detail */}}
                >
                  View All Threads
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* New Thread Modal */}
      {showNewThreadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl">
            <div className="p-6">
              <h3 className="text-xl font-merriweather font-semibold text-[#5D0018] mb-6">
                Start New Discussion Thread
              </h3>
              <div className="space-y-4">
                <Input
                  label="Thread Title"
                  value={newThreadTitle}
                  onChange={(e) => setNewThreadTitle(e.target.value)}
                  placeholder="Enter a descriptive title"
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-[#5D0018] mb-2">
                    Content
                  </label>
                  <textarea
                    value={newThreadContent}
                    onChange={(e) => setNewThreadContent(e.target.value)}
                    rows="6"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D0018] focus:border-transparent"
                    placeholder="Write your discussion content here..."
                    required
                  />
                </div>

                <div className="flex justify-end space-x-4 mt-6">
                  <Button
                    variant="outline"
                    onClick={() => setShowNewThreadModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    onClick={handleCreateThread}
                  >
                    Create Thread
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

export default ForumList;
