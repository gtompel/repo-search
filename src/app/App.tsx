import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { RepoCardPage } from '../pages/RepoCardPage';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/repo/:id" element={<RepoCardPage/>} />
        </Routes>
    </Router>
  );
};