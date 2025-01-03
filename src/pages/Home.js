import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.textContainer}>
          <h2 style={styles.heading}>ยินดีต้อนรับ</h2>
          <p style={styles.subheading}>สู่สาขาเทคโนโลยีสารสนเทศ</p>
          <p style={styles.paragraph}>
            สาขาของเรามุ่งเน้นพัฒนาความรู้และทักษะด้านเทคโนโลยีสารสนเทศเพื่อก้าวทันโลกยุคดิจิทัล
          </p>

          <p style={styles.introText}>
            เรามีหลักสูตรที่ครอบคลุมทุกด้านของเทคโนโลยีสารสนเทศ รวมถึงการพัฒนาซอฟต์แวร์, การจัดการฐานข้อมูล, และการรักษาความปลอดภัยทางไซเบอร์
          </p>

          <div style={styles.philosophyContainer}>
            <h3 style={styles.philosophyHeading}>ปรัชญาของสาขา</h3>
            <p style={styles.philosophyText}>
              "สร้างสรรค์ความรู้ สู่การพัฒนาเทคโนโลยีเพื่ออนาคต"
            </p>
          </div>
        </div>

        <div style={styles.imageContainer}>
          <img
            src="https://www.lannapoly.ac.th/web/assets/img-it-UTNwL-IP.jpeg"
            alt="Technology Branch"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f0f4f8',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    border: '2px solid #d1d5db',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    padding: '2rem',
    maxWidth: '1200px',
    width: '100%',
  },
  textContainer: {
    flex: 1,
    paddingRight: '2rem',
  },
  heading: {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '1rem',
    borderBottom: '3px solid #3498db',
    paddingBottom: '0.5rem',
  },
  subheading: {
    fontSize: '1.8rem',
    fontWeight: '600',
    color: '#3498db',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1.4rem',
    color: '#555',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
  },
  introText: {
    fontSize: '1.4rem',
    color: '#555',
    lineHeight: '1.8',
    marginTop: '1rem',
  },
  philosophyContainer: {
    marginTop: '2rem',
    padding: '1.5rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
  },
  philosophyHeading: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '0.8rem',
  },
  philosophyText: {
    fontSize: '1.4rem',
    color: '#555',
    lineHeight: '1.8',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '90%',
    height: 'auto',
    borderRadius: '12px',
    border: '1px solid #ddd',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
};

export default Home;
