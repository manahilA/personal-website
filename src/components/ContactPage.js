import React from 'react';
import Background from './Background';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function ContactPage() {
    return (
        <div style={{ 
            position: 'relative', 
            height: '100vh', 
            overflow: 'hidden', 
            //display: 'flex',
            //justifyContent: 'center',
            //alignItems: 'center',
            //textAlign: 'center',
            //padding: '2rem',
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
                <div className="libre-bodoni-bold text-animation" style={{
                    fontSize: 'clamp(3rem, 8vw, 4rem)',
                    color: '#505060',
                    letterSpacing: '-0.9px'
                }}>
                    Contact Page
                </div>
            </div>
        </div>
    );
}


export default ContactPage;
