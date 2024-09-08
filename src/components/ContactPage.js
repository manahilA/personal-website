import React, { useState } from 'react';
import Background from './Background';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaCopy } from 'react-icons/fa';

function ContactPage() {

    const email = "manahilawan.dev@gmail.com";
    const [copied, setCopied] = useState(false);
    const [buttonText, setButtonText] = useState('copy');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setButtonText('copied!');
        setTimeout(() => {
            setCopied(false);
            setButtonText('copy');
        }, 2000);
    };

    return (
        <div style={{ 
            position: 'relative', 
            height: '100vh', 
            overflow: 'hidden', 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            fontFamily: 'Libre Bodoni, serif',
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
                display: 'flex',
                width: '100%',
                maxWidth: '1200px',
                zIndex: 2,
                flexWrap: 'wrap',
            }}>
                {/* Left Section */}
                <div style={{
                    flex: 1,
                    padding: '2rem',
                    color: '#505060',
                    textAlign: 'left',
                }}>
                    <h1 className="libre-bodoni-bold-italic text-animation" style={{
                        fontSize: 'clamp(2rem, 8vw, 4rem)',
                        marginBottom: '1rem',
                    }}>
                        Get in touch.
                    </h1>
                    <p className="montserrat-regular text-animation" style={{
                        fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                        marginBottom: '2rem',
                        lineHeight: '1.5',
                    }}>
                        I'm always excited to connect with new people. Send me a direct email, or connect with me on LinkedIn or GitHub!
                    </p>
                </div>

                {/* Right Section */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    padding: '2rem',
                }}>
                    <div className="meie-script-regular text-animation" style={{ marginBottom: '1.5rem' }}>
                        <a href="https://www.linkedin.com/in/manahilawan" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-link" 
                        style={{
                                display: 'flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: '#303040',
                                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                            }}>
                            <FaLinkedin className="text-animation hover-italic-underline" style={{ marginRight: '0.8rem', fontSize: '2rem' }} />
                            <span className="text-animation hover-italic-underline">linkedin</span>
                        </a>
                    </div>
                    
                    <div className="meie-script-regular text-animation" style={{ marginBottom: '1.5rem' }}>
                        <a href="https://github.com/manahilA" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-link" 
                        style={{
                                display: 'flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: '#303040',
                                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                            }}>
                            <FaGithub className="text-animation hover-italic-underline" style={{ marginRight: '0.8rem', fontSize: '2rem' }} />
                            <span className="text-animation hover-italic-underline">github</span>
                        </a>
                    </div>
                    
                    <div className="text-animation" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <FaEnvelope className="text-animation hover-italic-underline" style={{ marginRight: '0.8rem', fontSize: '2rem' }} />
                        <a href={`mailto:${email}`}
                            className="meie-script-regular text-animation hover-italic-underline" 
                            style={{
                                textDecoration: 'none',
                                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                                marginRight: '1rem',
                            }}>
                            {email}
                        </a>
                        <button className="meie-script-regular text-animation hover-italic-underline" onClick={copyToClipboard} style={{
                            background: 'none',
                            border: 'none',
                            color: '#606070',
                            cursor: 'pointer',
                            fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <FaCopy style={{ marginRight: '0.5rem' }} />
                            {buttonText}
                        </button>
                        {copied}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
