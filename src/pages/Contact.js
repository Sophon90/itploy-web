import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We have received your message.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>ติดต่อเรา</h2>

      <div style={styles.contentWrapper}>
        {/* Contact Form */}
        <div style={styles.formContainer}>
          <h3 style={styles.formHeading}>ส่งข้อความถึงเรา</h3>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="ชื่อของคุณ"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="อีเมลของคุณ"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <textarea
              name="message"
              placeholder="ข้อความของคุณ"
              value={formData.message}
              onChange={handleChange}
              style={styles.textarea}
              required
            ></textarea>
            <button type="submit" style={styles.button}>ส่งข้อความ</button>
          </form>
        </div>

        {/* Contact Information */}
        <div style={styles.contactInfoWrapper}>
          <div style={styles.contactItem}>
            <FaMapMarkerAlt style={styles.icon} />
            <p>ที่อยู่: 123 ถนนตัวอย่าง อำเภอเมือง จังหวัดเชียงใหม่</p>
          </div>
          <div style={styles.contactItem}>
            <FaPhoneAlt style={styles.icon} />
            <p>โทรศัพท์: 053-123456</p>
          </div>
          <div style={styles.contactItem}>
            <FaEnvelope style={styles.icon} />
            <p>อีเมล: lannapoly@lannapoly.ac.th</p>
          </div>
          <div style={styles.contactItem}>
            <FaFacebook style={styles.icon} />
            <p>
              Facebook: <a href="https://www.facebook.com/lannapolyCNX" target="_blank" rel="noopener noreferrer">lannapolyCNX</a>
            </p>
          </div>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div style={styles.mapContainer}>
        <h3>แผนที่</h3>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8195035975674!2d98.99356681534507!3d18.79527888703562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da2dbf9ffb8a2f%3A0xd56ba941c6f0669!2s123%20%2C%20%20เชียงใหม่%2C%20ประเทศไทย!5e0!3m2!1sen!2sus!4v1601594784353!5m2!1sen!2sus"
          width="100%" 
          height="450" 
          style={{ border: '0', borderRadius: '8px' }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>

      {/* Additional Information */}
      <div style={styles.additionalInfo}>
        <p>เปิดทำการทุกวันจันทร์ถึงศุกร์ เวลา 8:00 น. - 17:00 น.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f4f4f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: '2rem',
  },
  contentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '2rem',
  },
  contactInfoWrapper: {
    width: '50%',
    padding: '1.5rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
    fontSize: '1.2rem',
    color: '#555',
  },
  icon: {
    fontSize: '1.5rem',
    marginRight: '1rem',
    color: '#3498db',
  },
  formContainer: {
    width: '50%',
    padding: '1.5rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  formHeading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    width: '95%',
    padding: '1rem',
    marginBottom: '1rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  textarea: {
    width: '95%',
    padding: '1rem',
    height: '150px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  button: {
    padding: '1rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#3498db',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  mapContainer: {
    marginBottom: '2rem',
  },
  additionalInfo: {
    fontSize: '1.2rem',
    color: '#555',
    marginTop: '2rem',
  },
};

export default Contact;
