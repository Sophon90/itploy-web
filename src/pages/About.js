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
    padding: '3rem', // เพิ่มระยะห่างรอบๆ กรอบ
    width: '100%', // กำหนดให้กรอบกว้างเต็มที่
    maxWidth: '1200px', // ขยายกรอบให้กว้างขึ้นเป็น 1200px เมื่อหน้าจอใหญ่
    margin: '0 auto', // จัดให้อยู่กลางหน้า
    backgroundColor: '#f9f9f9',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Prompt', sans-serif",
    lineHeight: '1.8',
    border: '1px solid #ddd',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#34495e',
    textAlign: 'center',
    marginBottom: '3rem',
    borderBottom: '4px solid #3498db',
    display: 'inline-block',
    paddingBottom: '0.8rem',
  },
  section: {
    marginBottom: '3rem', // เพิ่มระยะห่างระหว่าง section
  },
  subheading: {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#3498db',
    marginBottom: '1.5rem', // เพิ่มระยะห่างจากข้อความ
    textAlign: 'center',
  },
  text: {
    fontSize: '1.3rem',
    color: '#555',
    textAlign: 'justify',
    lineHeight: '1.8',
    padding: '0 2rem', // เพิ่มระยะห่างด้านข้าง
    marginBottom: '1.5rem', // เพิ่มระยะห่างระหว่างย่อหน้า
  },
};

export default About;
