import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    
    <aside style={styles.sidebar }>
      <ul style={styles.ul}>
        <li><Link to="/" style={styles.link}>Welcome</Link></li>
        <li><Link to="/signup" style={styles.link}>Signup</Link></li>
        <li><Link to="/login" style={styles.link}>Login</Link></li>
        <li><Link to="/dashboard" style={styles.link}>Dashboard</Link></li>
      </ul>
    </aside>
    
  );
}

const styles = {
  sidebar: {
    
    width: '200px',
    backgroundColor: '#f8f9fa',
     top: '0',
     position: 'fixed',
     right:0,
    
    zIndex: -1,
    padding: '20px',
    height: '100%',
  
  },
  ul: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    display: 'block',
    padding: '10px 0',
  }
};

export default Sidebar;
