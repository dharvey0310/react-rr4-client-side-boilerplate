import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Page Not Found</h1>
    </div>
  );
};

export default NotFound;
