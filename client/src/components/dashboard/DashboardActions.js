import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div style={{"marginTop":"20px"}}>
      <Link to='/edit-profile' className='btn favcolr'>
        <i className='fas fa-user-circle text-primary' /> <b>Edit Profile</b>
      </Link>
      <Link to='/add-experience' className='btn favcolr'>
        <i className='fab fa-black-tie text-primary' /> <b>Add Experience</b>
      </Link>
      <Link to='/add-education' className='btn favcolr'>
        <i className='fas fa-graduation-cap text-primary' /> <b>Add Education</b>
      </Link>
    </div>
  );
};

export default DashboardActions;
