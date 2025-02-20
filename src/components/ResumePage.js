import React from 'react';
import Background from './Background';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import resumePDF from '../assets/resume.pdf';

function ResumePage() {
    return (
        <div style={{ 
            position: 'relative', 
            height: '100vh', 
            overflow: 'hidden', 
        }}>
            <Background />
            <Link to="/" className="anton-regular text-animation" style={{
                position: 'absolute',
                top: '40px',
                left: '40px',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: '#404050',
                textDecoration: 'none',
                fontWeight: 'bold',
                zIndex: 2,
            }}>
                MA
            </Link>
            <div style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                textAlign: 'center',
                padding: '2rem',
                lineHeight: '1'
            }}>
                {/* Title with updated font style */}
                <div className="libre-bodoni-bold-italic text-animation" style={{
                    fontSize: 'clamp(3rem, 8vw, 4rem)',
                    color: '#505060',
                    letterSpacing: '-0.9px',
                    marginBottom: '2rem'
                }}>
                    My Resume
                </div>
                <iframe src={resumePDF} style={{
                    width: '80%',
                    height: '70vh',
                    border: 'none',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
                }} title="Resume"></iframe>
                {/* Styled download button */}
                <a href={resumePDF} download className="libre-bodoni-bold-italic text-animation" style={{
                    marginTop: '1.5rem',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    color: '#404050',
                    textDecoration: 'none',
                    border: '2px solid #404050',
                    padding: '0.8rem 1.5rem',
                    borderRadius: '5px',
                    transition: 'background 0.3s, color 0.3s',
                }}
                onMouseOver={(e) => { e.target.style.background = '#404050'; e.target.style.color = '#fff'; }}
                onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#404050'; }}>
                    download PDF
                </a>
            </div>
        </div>
    );
}

export default ResumePage;
