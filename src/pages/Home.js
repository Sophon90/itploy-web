import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h2 style={styles.heading}>ยินดีต้อนรับ</h2>
        <p style={styles.subheading}>สู่สาขาเทคโนโลยีสารสนเทศ</p>
        <p style={styles.paragraph}>
          สาขาของเรามุ่งเน้นพัฒนาความรู้และทักษะด้านเทคโนโลยีสารสนเทศเพื่อก้าวทันโลกยุคดิจิทัล
        </p>

        {/* Additional introduction text */}
        <p style={styles.introText}>
          เรามีหลักสูตรที่ครอบคลุมทุกด้านของเทคโนโลยีสารสนเทศ รวมถึงการพัฒนาซอฟต์แวร์, การจัดการฐานข้อมูล, และการรักษาความปลอดภัยทางไซเบอร์
        </p>

        {/* Philosophy Section */}
        <div style={styles.philosophyContainer}>
          <h3 style={styles.philosophyHeading}>ปรัชญาของสาขา</h3>
          <p style={styles.philosophyText}>
            "สร้างสรรค์ความรู้ สู่การพัฒนาเทคโนโลยีเพื่ออนาคต"
          </p>
        </div>
      </div>

      {/* Image on the right */}
      <div style={styles.imageContainer}>
        <img
          src="https://www.lannapoly.ac.th/web/assets/img-it-UTNwL-IP.jpeg"
          alt="Technology Branch"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // Align items vertically at the center
    padding: '2rem',
    flexWrap: 'nowrap', // Prevent wrapping
  },
  textContainer: {
    flex: 1,
    textAlign: 'left',
    paddingRight: '2rem', // Adds spacing between text and image
    marginTop: '-2rem', // Move text container up
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '0.5rem',
  },
  subheading: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#3498db',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '1.5rem', // Adds space between paragraphs
  },
  introText: {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: '1.6',
    marginTop: '1rem',
  },
  philosophyContainer: {
    marginTop: '2rem', // Space above philosophy section
    padding: '1rem',
    backgroundColor: '#f9f9f9', // Light background to highlight philosophy
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Slight shadow for emphasis
  },
  philosophyHeading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '0.5rem',
  },
  philosophyText: {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: '1.6',
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '10px', // Optional: adds rounded corners to the image
  },
};

export default Home;
