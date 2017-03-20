import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>About</h1>
      <p>This is a React client side boilerplate using React Router 4</p>
    </div>
  );
};

export default About;
