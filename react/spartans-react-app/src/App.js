import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Pagination  from './components/Pagination';
import PostList from './components/PostList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Pagination />
            <PostList />
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;