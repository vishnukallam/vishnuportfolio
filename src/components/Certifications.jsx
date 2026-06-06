import React, { useState } from 'react';
import mongoCert from '../assets/certificates/mongo_cert.jpeg';
import pythonCert from '../assets/certificates/python_cert.jpeg';
import magnoCert from '../assets/certificates/thumb_magno_charger_certificate.jpeg';

const Certifications = () => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const openLightbox = (imgSrc) => {
    setLightboxImage(imgSrc);
    setZoomLevel(1); // Reset zoom
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setZoomLevel(1);
  };

  // Mouse wheel zoom
  const handleWheelZoom = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const zoomSpeed = 0.1;
    const minZoom = 1;
    const maxZoom = 5;

    if (e.deltaY < 0) {
      // Scroll up = Zoom in
      setZoomLevel((prev) =>
        Math.min(prev + zoomSpeed, maxZoom)
      );
    } else {
      // Scroll down = Zoom out
      setZoomLevel((prev) =>
        Math.max(prev - zoomSpeed, minZoom)
      );
    }
  };

  const certs = [
    {
      id: 'mongo_cert',
      title: "MongoDB Developer's Toolkit",
      issuer: 'GeeksForGeeks',
      image: mongoCert,
      alt: 'MongoDB Certificate'
    },
    {
      id: 'python_cert',
      title: 'Python Full Stack Development',
      issuer: 'Ethnus',
      image: pythonCert,
      alt: 'Python Certificate'
    },
    {
      id: 'magno_cert',
      title: 'Magno Charger: Intelligent Auto Disconnect Charger',
      issuer: 'TIH-IoT Chanakya',
      image: magnoCert,
      alt: 'Magno Charger Certificate'
    }
  ];

  return (
    <section className="content-section active" id="certifications">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>

        <div className="certs-grid" id="certsGrid">
          {certs.map(cert => (
            <div
              className="cert-card"
              key={cert.id}
              onClick={() => openLightbox(cert.image)}
            >
              <h3>{cert.title}</h3>
              <p>Issued by: {cert.issuer}</p>

              <img
                src={cert.image}
                alt={cert.alt}
                className="cert-preview"
              />
            </div>
          ))}
        </div>
      </div>

      {lightboxImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 2000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'auto',
            cursor: zoomLevel > 1 ? 'grab' : 'default'
          }}
          onClick={closeLightbox}
        >
          <img
            src={lightboxImage}
            alt="Certificate View"
            onWheel={handleWheelZoom}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              transform: `scale(${zoomLevel})`,
              transition: 'transform 0.15s ease-out',
              borderRadius: '10px',
              boxShadow: '0 0 50px rgba(0,0,0,0.5)',
              transformOrigin: 'center center',
              userSelect: 'none'
            }}
          />

          {/* Close button */}
          <div
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '20px',
              right: '30px',
              color: 'white',
              fontSize: '2rem',
              cursor: 'pointer'
            }}
          >
            <i className="fas fa-times"></i>
          </div>

          {/* Zoom indicator */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              color: 'white',
              fontSize: '1rem',
              background: 'rgba(255,255,255,0.1)',
              padding: '8px 14px',
              borderRadius: '8px'
            }}
          >
            Zoom: {(zoomLevel * 100).toFixed(0)}%
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
