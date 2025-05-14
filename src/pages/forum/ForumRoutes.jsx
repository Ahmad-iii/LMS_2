import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ForumList from './ForumList';
import ForumThread from './ForumThread';

const ForumRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ForumList />} />
      <Route path="/thread/:threadId" element={<ForumThread />} />
    </Routes>
  );
};

export default ForumRoutes;
