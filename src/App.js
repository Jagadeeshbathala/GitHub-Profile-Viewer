
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import RepositoryListPage from './pages/RepositoryListPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< HomePage/>} />
        <Route path="/:username" element={<ProfilePage />} />
        <Route path="/repos/:username" element={<RepositoryListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
