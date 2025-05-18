import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ForumList from './ForumList';
import ForumThread from './ForumThread';
import UnderConstruction from '../../components/common/UnderConstruction';

const ForumRoutes = () => {
  return (
    <Routes>
      <Route index element={<ForumList />} />
      <Route path="thread/:threadId" element={<ForumThread />} />
      <Route path="*" element={<UnderConstruction />} />
    </Routes>
  );
};

export default ForumRoutes;
