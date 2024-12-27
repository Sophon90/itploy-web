import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>เกี่ยวกับเรา</h2>
      
      {/* College Introduction */}
      <div style={styles.section}>
        <h3 style={styles.subheading}>แนะนำวิทยาลัย</h3>
        <p style={styles.text}>
          วิทยาลัยลานนาโปลีเทคนิค เป็นสถาบันการศึกษาที่มุ่งเน้นการพัฒนานักศึกษาให้มีความรู้ความสามารถในด้านวิชาการและวิชาชีพ เพื่อตอบสนองความต้องการของตลาดแรงงานในยุคปัจจุบัน
        </p>
      </div>
      
      {/* Goals Section */}
      <div style={styles.section}>
        <h3 style={styles.subheading}>เป้าหมายของสาขา</h3>
        <p style={styles.text}>
          สาขาเทคโนโลยีสารสนเทศมีเป้าหมายที่จะสร้างบุคลากรที่มีความรู้และทักษะในการพัฒนาซอฟต์แวร์ การจัดการข้อมูล และเทคโนโลยีดิจิทัล เพื่อนำไปใช้ในการทำงานจริง
        </p>
      </div>

      {/* Vision Section */}
      <div style={styles.section}>
        <h3 style={styles.subheading}>วิสัยทัศน์ของสาขา</h3>
        <p style={styles.text}>
          <em>"มุ่งเน้นการสร้างสรรค์เทคโนโลยีสารสนเทศที่ตอบสนองต่อการพัฒนาสังคมและเศรษฐกิจอย่างยั่งยืน"</em>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '3rem',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '15px',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
    fontFamily: "'Prompt', sans-serif", // Thai font family
    lineHeight: '1.8',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#34495e',
    textAlign: 'center',
    marginBottom: '2rem',
    borderBottom: '3px solid #3498db',
    display: 'inline-block',
    paddingBottom: '0.5rem',
  },
  section: {
    marginBottom: '2rem',
  },
  subheading: {
    fontSize: '1.8rem',
    fontWeight: '600',
    color: '#3498db',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  text: {
    fontSize: '1.2rem',
    color: '#555',
    textAlign: 'justify',
    lineHeight: '1.8',
    padding: '0 1rem',
  },
};

export default About;
