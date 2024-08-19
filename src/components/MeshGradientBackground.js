import React from 'react';
import '../styles.css';

function MeshGradientBackground() {
    return (
        <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                backgroundColor: '#ff99ff',
                backgroundImage: `
                    radial-gradient(circle at 79% 90%, hsla(223,77%,77%,1) 0px, transparent 50%),
                    radial-gradient(circle at 0% 54%, hsla(330,70%,80%,1) 0px, transparent 50%),
                    radial-gradient(circle at 34% 16%, hsla(240,70%,75%,1) 0px, transparent 50%),
                    radial-gradient(circle at 37% 96%, hsla(200,70%,70%,1) 0px, transparent 50%),
                    radial-gradient(circle at 91% 47%, hsla(290,60%,75%,1) 0px, transparent 50%),
                    radial-gradient(circle at 16% 11%, hsla(270,70%,75%,1) 0px, transparent 50%),
                    radial-gradient(circle at 85% 17%, hsla(230,50%,80%,1) 0px, transparent 50%),
                    radial-gradient(circle at 45% 51%, hsla(210,70%,60%,1) 0px, transparent 50%)`,
                backgroundSize: '150% 150%',
                filter: 'blur(80px)',
                animation: 'moveBackground 10s linear infinite',
            }}></div>
            <div class = "anton-regular" style={{
                position: 'absolute',
                top: '15%',
                left: '8%',
                fontSize: '8rem',
                color: '#404050',
            }}>
                MANAHIL
            </div>
            <div class = "anton-regular" style={{
                position: 'absolute',
                top: '30%',
                left: '8%',
                fontSize: '8rem',
                color: '#404050',
            }}>
                AWAN
            </div>
            <div class = "anton-regular" style={{
                position: 'absolute',
                bottom: '30%',
                right: '8%',
                fontSize: '8rem',
                color: '#404050',
            }}>
                FRONTEND
            </div>
            <div class = "anton-regular" style={{
                position: 'absolute',
                bottom: '15%',
                right: '8%',
                fontSize: '8rem',
                color: '#404050',
            }}>
                DEVELOPER
            </div>
        </div>
    );
}

export default MeshGradientBackground;
