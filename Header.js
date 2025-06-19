import React from "react";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>My App</h2>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Welcome</Link>
        <Link to="/signup" style={styles.link}>Signup</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
      </nav>
    </header>



  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Header;