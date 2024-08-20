import React from 'react';
import '../styles.css';

function MeshGradientBackground() {
    return (
        <div style={{ 
            position: 'relative', 
            height: '100vh', 
            overflow: 'hidden', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '2rem',
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                backgroundColor: '#ff999f',
                backgroundImage: `
                    radial-gradient(circle at 79% 90%, hsla(223,77%,77%,1) 0px, transparent 50%),
                    radial-gradient(circle at 0% 54%, hsla(330,70%,80%,1) 0px, transparent 50%),
                    radial-gradient(circle at 34% 16%, hsla(240,70%,75%,1) 0px, transparent 50%),
                    radial-gradient(circle at 37% 96%, hsla(200,70%,70%,1) 0px, transparent 50%),
                    radial-gradient(circle at 91% 47%, hsla(290,60%,75%,1) 0px, transparent 50%),
                    radial-gradient(circle at 16% 11%, hsla(270,70%,75%,1) 0px, transparent 50%),
                    radial-gradient(circle at 85% 17%, hsla(230,50%,80%,1) 0px, transparent 50%)`,
                backgroundSize: '100% 100%',
                filter: 'blur(80px)',
                animation: 'moveBackground 15s linear infinite',
            }}></div>

            {/* NAME AND TITLE CONTAINER */}

            <div style={{
                lineHeight: '1'
            }}>
                <div className="anton-regular" style={{
                    fontSize: 'clamp(4rem, 8vw, 6rem)',
                    color: '#404050',
                }}>
                    MANAHIL AWAN
                </div>
                <div className="anton-regular" style={{
                    fontSize: 'clamp(4rem, 8vw, 6rem)',
                    color: '#303040',
                    //marginTop: '0.5rem',
                    //paddingLeft: '10vw',
                }}>
                    FRONTEND DEVELOPER
                </div>
                <div className="montserrat-regular" style={{
                    fontSize: 'clamp(1rem, 4vw, 2rem)',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    marginTop: '1.3rem',
                }}>
                    <a href="#about" className="hover-italic-underline">about</a> &nbsp;
                    <a href="#portfolio" className="hover-italic-underline">portfolio</a> &nbsp;
                    <a href="#github" className="hover-italic-underline">github</a> &nbsp;
                    <a href="#contact" className="hover-italic-underline">contact</a>
                </div>
            </div>
        </div>
    );
}


export default MeshGradientBackground;
