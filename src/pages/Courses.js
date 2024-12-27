import React from 'react';

const Courses = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Courses and Materials</h2>
      
      {/* PDF 1 */}
      <div style={styles.pdfContainer}>
        <h3 style={styles.pdfTitle}>Course Material 1</h3>
        <iframe
          src="https://drive.google.com/file/d/1KlESxHfQdaNQ5trzY9rSJhpiDCU5GDe8/preview"
          style={styles.iframe}
          title="PDF Viewer 1"
          allow="autoplay"
        ></iframe>
      </div>

      {/* PDF 2 */}
      <div style={styles.pdfContainer}>
        <h3 style={styles.pdfTitle}>Course Material 2</h3>
        <iframe
          src="https://drive.google.com/file/d/1vx5diaTenzBsZuYRDX19YjesoCB6XA3m/preview"
          style={styles.iframe}
          title="PDF Viewer 2"
          allow="autoplay"
        ></iframe>
      </div>

      {/* PDF 3 */}
      <div style={styles.pdfContainer}>
        <h3 style={styles.pdfTitle}>Course Material 3</h3>
        <iframe
          src="https://drive.google.com/file/d/14qknn42lagFi_WuJoiOl_ibPwu7bUvte/preview"
          style={styles.iframe}
          title="PDF Viewer 3"
          allow="autoplay"
        ></iframe>
      </div>

      {/* PDF 4 */}
      <div style={styles.pdfContainer}>
        <h3 style={styles.pdfTitle}>Course Material 4</h3>
        <iframe
          src="https://drive.google.com/file/d/1tnEVbTXtZNwtHmFuWMd7Xm5hFlMDI0Be/preview"
          style={styles.iframe}
          title="PDF Viewer 4"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '2rem',
  },
  pdfContainer: {
    marginBottom: '2rem',
  },
  pdfTitle: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#3498db',
    marginBottom: '1rem',
  },
  iframe: {
    width: '100%',
    height: '700px',
    border: 'none',
    margin: '1rem 0',
  },
};

export default Courses;
