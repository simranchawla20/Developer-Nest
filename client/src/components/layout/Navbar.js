import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Developers</Link>
      </li>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to='/Resume'>Resume Builder</Link>
      </li>
      <li>
        <a onClick={logout} href='/login'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles' style={{"background-color": "#b88017","color":"white"}}>Developers</Link>
      </li>
      <li>
        <Link to='/register' style={{"background-color": "#b88017","color":"white"}}>Register</Link>
      </li>
      <li>
        <Link to='/login' style={{"background-color": "#b88017","color":"white"}}>Login</Link>
      </li>
    </ul>

  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code' /> Developer Nest
        </Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      {/* {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )} */}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);