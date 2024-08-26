import React from 'react';
import Background from './Background';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function HomePage() {
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
                    MANAHIL AWAN
                </div>
                <div className="libre-bodoni-bold text-animation" style={{
                    fontSize: 'clamp(3rem, 8vw, 4rem)',
                    color: '#303040',
                    letterSpacing: '-0.9px'
                    //marginTop: '0.5rem',
                    //paddingLeft: '10vw',
                }}>
                    FRONTEND DEVELOPER
                </div>
                <div className="meie-script-regular text-animation" style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    marginTop: '1.3rem',
                }}>
                    <Link to="/about" className="hover-italic-underline">about</Link>&nbsp;
                    <Link to="/portfolio" className="hover-italic-underline">portfolio</Link>&nbsp;
                    <a href="https://github.com/manahilA" target="_blank" rel="noopener noreferrer" className="hover-italic-underline">github</a>&nbsp;
                    <Link to="/contact-me" className="hover-italic-underline">contact</Link>&nbsp;
                </div>
            </div>
        </div>
    );
}


export default HomePage;
