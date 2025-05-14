import React, { useState } from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const ForumThread = () => {
  const [replyContent, setReplyContent] = useState('');

  // Mock thread data
  const thread = {
    id: 1,
    title: 'Help with Python loops',
    content: 'I\'m having trouble understanding how nested loops work in Python. Can someone explain with an example?',
    author: 'Ahmad Khan',
    createdAt: '2024-02-15T10:30:00',
    replies: [
      {
        id: 1,
        content: 'Here\'s a simple example of nested loops:\n\nfor i in range(3):\n    for j in range(2):\n        print(f"i={i}, j={j}")\n\nThis will print:\ni=0, j=0\ni=0, j=1\ni=1, j=0\ni=1, j=1\ni=2, j=0\ni=2, j=1',
        author: 'Dr. Sarah Ahmed',
        createdAt: '2024-02-15T11:15:00',
        isInstructor: true
      },
      {
        id: 2,
        content: 'Thank you! That makes it much clearer. Could you explain why we need nested loops?',
        author: 'Ahmad Khan',
        createdAt: '2024-02-15T11:30:00'
      }
    ]
  };

  const handleSubmitReply = () => {
    if (!replyContent.trim()) return;

    // Mock reply submission
    console.log('Submitting reply:', replyContent);

    setReplyContent('');
  };

  return (
    <div className="space-y-6">
      {/* Thread Header */}
      <div>
        <h1 className="text-2xl font-merriweather font-bold text-[#5D0018] mb-2">
          {thread.title}
        </h1>
        <p className="text-[#4A4A4A]">
          Started by {thread.author} on {new Date(thread.createdAt).toLocaleDateString()}
        </p>
      </div>

      {/* Original Post */}
      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#5D0018] rounded-full flex items-center justify-center">
                <span className="text-white font-medium">
                  {thread.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-medium text-[#5D0018]">{thread.author}</p>
                <p className="text-sm text-[#4A4A4A]">
                  Original Post
                </p>
              </div>
            </div>
            <span className="text-sm text-[#4A4A4A]">
              {new Date(thread.createdAt).toLocaleString()}
            </span>
          </div>
          <div className="prose max-w-none">
            <p className="text-[#4A4A4A] whitespace-pre-wrap">{thread.content}</p>
          </div>
        </div>
      </Card>

      {/* Replies */}
      <div className="space-y-4">
        <h2 className="text-xl font-merriweather font-semibold text-[#5D0018]">
          Replies
        </h2>
        {thread.replies.map((reply) => (
          <Card key={reply.id} className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${reply.isInstructor ? 'bg-[#166335]' : 'bg-[#5D0018]'} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-medium">
                      {reply.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="font-medium text-[#5D0018]">{reply.author}</p>
                      {reply.isInstructor && (
                        <span className="px-2 py-0.5 bg-[#166335]/10 text-[#166335] text-sm rounded-full">
                          Instructor
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#4A4A4A]">
                      {new Date(reply.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="prose max-w-none">
                <p className="text-[#4A4A4A] whitespace-pre-wrap">{reply.content}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Reply Form */}
      <Card className="p-6">
        <h3 className="text-lg font-merriweather font-semibold text-[#5D0018] mb-4">
          Add a Reply
        </h3>
        <div className="space-y-4">
          <textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5D0018] focus:border-transparent"
            placeholder="Write your reply here..."
          />
          <div className="flex justify-end">
            <Button
              variant="primary"
              onClick={handleSubmitReply}
              disabled={!replyContent.trim()}
            >
              Post Reply
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ForumThread;
