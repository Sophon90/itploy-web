import React from 'react';

// You can use icons from libraries like Font Awesome or React Icons
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>ติดต่อเรา</h2>

      {/* Contact Information */}
      <div style={styles.contactInfo}>
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
          <p>Facebook: <a href="https://www.facebook.com/lannapolyCNX" target="_blank" rel="noopener noreferrer">lannapolyCNX</a></p>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div style={styles.mapContainer}>
        <h3>แผนที่</h3>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8195035975674!2d98.99356681534507!3d18.79527888703562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da2dbf9ffb8a2f%3A0xd56ba941c6f0669!2s123%20%2C%20%20เชียงใหม่%2C%20ประเทศไทย!5e0!3m2!1sen!2sus!4v1601594784353!5m2!1sen!2sus"
          width="600" 
          height="450" 
          style={{border: '0', borderRadius: '8px'}} 
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
    backgroundColor: '#f4f4f9', // Light background for the contact page
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Slight shadow for better visibility
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: '2rem',
  },
  contactInfo: {
    marginBottom: '2rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    fontSize: '1.2rem',
    color: '#555',
  },
  icon: {
    fontSize: '1.5rem',
    marginRight: '1rem',
    color: '#3498db',
  },
  additionalInfo: {
    fontSize: '1.2rem',
    color: '#555',
    marginTop: '2rem',
  },
  mapContainer: {
    marginBottom: '2rem',
  },
};

export default Contact;
