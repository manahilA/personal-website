import React from 'react';
import '../styles/styles.css';

function Background() {
    return (
        <div className="background-animation" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            backgroundColor: 'hsla(27,23%,52%,1)',
            backgroundImage: `
                radial-gradient(circle at 40% 20%, hsla(28,100%,87%,0.6) 0px, transparent 50%),
                radial-gradient(circle at 15% 38%, hsla(189,100%,87%,0.7) 0px, transparent 50%),
                radial-gradient(circle at 0% 50%, hsla(355,100%,87%,0.6) 0px, transparent 50%),
                radial-gradient(circle at 83% 42%, hsla(340,100%,87%,0.6) 0px, transparent 50%),
                radial-gradient(circle at 0% 100%, hsla(22,100%,87%,0.6) 0px, transparent 50%),
                radial-gradient(circle at 80% 100%, hsla(242,100%,87%,0.6) 0px, transparent 50%),
                radial-gradient(circle at 0% 0%, hsla(343,100%,87%,0.6) 0px, transparent 50%)`,
            backgroundSize: '150% 150%',
            filter: 'blur(80px)',
            animation: 'moveBackground 10s linear infinite',
        }}></div>
    );
}

export default Background;