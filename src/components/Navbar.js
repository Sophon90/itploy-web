import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>สาขาเทคโนโลยีสารสนเทศ</h1>
        <p style={styles.subtitle}>วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่</p>
      </div>
      <ul style={styles.menu}>
        <li><Link to="/" style={styles.link}>หน้าหลัก</Link></li>
        <li><Link to="/about" style={styles.link}>เกี่ยวกับเรา</Link></li>
        <li><Link to="/courses" style={styles.link}>หลักสูตร</Link></li>
        <li><Link to="/contact" style={styles.link}>ติดต่อ</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: '1rem', 
    backgroundColor: '#4CAF50', // สีเขียว
    color: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // เพิ่มเงา
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '1rem'
  },
  title: { 
    fontSize: '2.5rem', 
    margin: 0,
    color: '#FFD700', // สีเหลืองทอง
  },
  subtitle: { 
    fontSize: '1.2rem', 
    margin: 0, 
    color: '#fff' 
  },
  menu: { 
    listStyle: 'none', 
    display: 'flex', 
    gap: '2rem', 
    padding: 0, 
    margin: 0 
  },
  link: { 
    textDecoration: 'none', 
    color: '#fff', 
    fontSize: '1.2rem', 
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    border: '2px solid #FFD700', // กรอบสีเหลืองทอง
    transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // เงาให้กรอบดูเด่นขึ้น
  },
  linkHover: {
    backgroundColor: '#FFD700', // สีเหลืองเมื่อ hover
    color: '#4CAF50', // สีเขียวเมื่อ hover
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // เงาเพิ่มเมื่อ hover
  },
};

export default Navbar;
