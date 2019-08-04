import React from 'react';

import Navbar from './dashboard/navbar';
import Dashboard from './dashboard/dashboard';

function Home (props) {
  return (
    <div>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default Home;
