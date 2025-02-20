import React, { useRef } from 'react';
import Background from './Background';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import '../styles/styles.css';
import ProjectImageOne from '../assets/images/project1.jpeg'; // Update with the path to your image

function PortfolioPage() {
    const projects = [
        { 
            title: "Coming Soon", 
            image: ProjectImageOne
        },
        { title: "Coming Soon", image: ProjectImageOne },
        { title: "Coming Soon", image: ProjectImageOne }
    ];

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    };

    return (
        <div style={{ 
            position: 'relative', 
            height: '100vh', 
            overflow: 'hidden', 
            margin: '0', 
            padding: '0',
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
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
                padding: '0',
                margin: '0',
                overflow: 'hidden', // Hides the scrollbar
            }}>
                <div style={{
                    width: '80%',
                    height: '80%',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    display: 'flex',
                    gap: '20px',
                    position: 'relative',
                    msOverflowStyle: 'none', // Hides scroll bar in IE/Edge
                    scrollbarWidth: 'none', // Hides scroll bar in Firefox
                }} ref={scrollRef}>
                    {projects.map((project, index) => (
                        <div key={index} className="project-tile" style={{
                            backgroundColor: '#e6e1dc',
                            color: '#404050',
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            width: '450px',
                            height: '100%',  
                            flexShrink: '0',
                            borderRadius: '10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: 'none',
                            boxShadow: '0px 2px 5px rgba(64, 64, 80, 0.1)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundImage: `url(${project.image})`,
                        }}>
                            <h2 className="meie-script-regular" style={{
                                fontSize: 'clamp(2.5rem, 4vw, 3rem)',
                                margin: '0',
                                textAlign: 'center',
                                color: '#404050',
                                zIndex: 2,
                                position: 'absolute',
                                bottom: '10%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                textShadow: '1px 1px 2px rgba(255, 255, 255, 0.7)',
                            }}>{project.title}</h2>
                        </div>
                    ))}
                </div>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '5%',
                    right: '5%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    zIndex: 2,
                    transform: 'translateY(-50%)',
                }}>
                    <button 
                        onClick={scrollLeft} 
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0',
                            margin: '0',
                        }}
                    >
                        <BsArrowLeft size={40} color="#404050" />
                    </button>
                    <button 
                        onClick={scrollRight} 
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0',
                            margin: '0',
                        }}
                    >
                        <BsArrowRight size={40} color="#404050" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;
