import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Component/Header';
import Footer from './Component/Footer';
import Sidebar from './Component/Sidebar';

import Dashboard from './Pages/Dashboard';
import Welcome from './Pages/Welcome';
import Login from './Pages/Login';
import Signup from './Pages/Signup';



function App() {
  return (
    <Router>
      <div style={styles.container}>
      <Header />

       <div style={styles.body}>
         <Sidebar />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      </div>
        <Footer />
      </div>
      
    </Router>
  );
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: 1,
    padding: '20px',
  },
};

export default App;
