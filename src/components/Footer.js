import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2024 สาขาเทคโนโลยีสารสนเทศ วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่</p>
    </footer>
  );
};

const styles = {
  footer: { 
    textAlign: 'center', 
    padding: '1rem', 
    backgroundColor: '#4CAF50', // สีเขียว
    color: '#fff', 
    marginTop: '2rem', 
    boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)', // เพิ่มเงาด้านบน
    borderTop: '5px solid #FFD700', // แถบขอบบนสีเหลืองทอง
  },
  text: {
    fontSize: '1rem', 
    color: '#FFD700', // สีเหลืองทอง
    fontWeight: 'bold',
  },
};

export default Footer;
