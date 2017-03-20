import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Route</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/failed">Not Working</Link>
    </div>
  );
};

export default Home;
