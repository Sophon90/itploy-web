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
        <li>
          <Link to="/" style={styles.link} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            หน้าหลัก
          </Link>
        </li>
        <li>
          <Link to="/about" style={styles.link} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            เกี่ยวกับเรา
          </Link>
        </li>
        <li>
          <Link to="/courses" style={styles.link} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            หลักสูตร
          </Link>
        </li>
        <li>
          <Link to="/contact" style={styles.link} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            ติดต่อ
          </Link>
        </li>
      </ul>
    </nav>
  );

  function handleHover(event) {
    event.target.style.backgroundColor = '#FFD700';
    event.target.style.color = '#4CAF50';
    event.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
  }

  function handleLeave(event) {
    event.target.style.backgroundColor = 'transparent';
    event.target.style.color = '#fff';
    event.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
  }
};

const styles = {
  nav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderBottom: '4px solid #FFD700',
  },
  titleContainer: {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '2.8rem',
    margin: 0,
    color: '#FFD700',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '1.4rem',
    margin: 0,
    color: '#fff',
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    padding: 0,
    margin: 0,
    flexWrap: 'wrap',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    padding: '0.5rem 1.2rem',
    borderRadius: '8px',
    border: '2px solid #FFD700',
    transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
};

export default Navbar;
