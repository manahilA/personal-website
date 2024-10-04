import React, { useRef } from 'react';
import Background from './Background';
import { Link } from 'react-router-dom';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import '../styles/styles.css';
import ProjectImageOne from '../assets/images/project1.jpeg'; // Update with the path to your image

function PortfolioPage() {
    const projects = [
        { 
            title: "project 1", 
            image: ProjectImageOne
        },
        { title: "project 2", image: ProjectImageOne },
        { title: "project 3", image: ProjectImageOne },
        { title: "project 4", image: ProjectImageOne },
        { title: "project 5", image: ProjectImageOne },
        { title: "project 6", image: ProjectImageOne },
    ];

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
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

            {/* Inner Frame for the Project Tiles */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                justifyContent: 'center',  // Center horizontally
                alignItems: 'center',  // Center vertically
                height: '100%',
                width: '100%',
                padding: '0',
                margin: '0',
                overflow: 'hidden',
            }}>
                {/* Smaller "Window" for the projects */}
                <div style={{
                    width: '70%',  // Inner frame width (adjust as needed)
                    height: '70%',  // Inner frame height (adjust as needed)
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Subtle shadow for the frame effect
                    overflowX: 'auto',  // Allow horizontal scrolling inside the smaller frame
                    scrollBehavior: 'smooth',
                    display: 'flex',
                    position: 'relative',
                }} ref={scrollRef}>
                    {projects.map((project, index) => (
                        <div key={index} className="portfolio-tile" style={{
                            backgroundColor: '#d9c1ba',  // Softer, more lilac color
                            color: '#404050',
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            width: '280px',
                            height: '100%',  
                            flexShrink: '0',
                            borderRadius: '0px',
                            display: 'flex',
                            justifyContent: 'center',
                            border: '0px solid rgba(64, 64, 80, 0.1)',
                            boxShadow: 'inset -0.7px 0 0 rgba(64, 64, 80, 0.2)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundImage: 'none',  // No image initially
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundImage = `url(${project.image})`;  // Show image on hover
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundImage = 'none';  // Revert to plain color on hover exit
                        }}>
                            {/* Title always visible, you can choose to remove this if you want */}
                            <h2 className="meie-script-regular" style={{
                                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                                margin: '0',
                                textAlign: 'center', // Center the title text
                                color: '#404050',
                                zIndex: 2,
                                position: 'absolute', // Position absolutely within the tile
                                bottom: '10%', // Place title at the bottom
                                left: '50%', // Center horizontally
                                transform: 'translateX(-50%)', // Center the title text
                                textShadow: '1px 1px 2px rgba(255, 255, 255, 0.7)', // Optional: add a shadow for better readability
                            }}>{project.title}</h2>
                        </div>
                    ))}
                </div>

                {/* Scroll Buttons */}
                <div style={{
                    position: 'absolute',
                    top: '50%',  // Align the arrows vertically at the middle of the inner frame
                    left: '10%',  // Position the left arrow closer to the inner frame
                    right: '10%',  // Position the right arrow closer to the inner frame
                    display: 'flex',
                    justifyContent: 'space-between',
                    zIndex: 2,
                    transform: 'translateY(-50%)',  // Keep the buttons vertically centered
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
