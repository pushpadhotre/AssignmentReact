import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 My App. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '15px 20px',
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
    width: '100%',
    marginTop: 'auto',
  },
};

export default Footer;