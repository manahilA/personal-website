import React from 'react';
import styled from 'styled-components';
import Background from './Background';
import profileImage from '../assets/images/profile.jpg';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const HeaderLink = styled(Link)`
    position: absolute;
    top: 40px;
    right: 40px;
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: #404050;
    text-decoration: none;
    font-weight: bold;
    z-index: 2;
`;

const ContentWrapper = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 1200px;
    padding: 2rem;
    margin: 0 auto;
    box-sizing: border-box;
`;

const TextSection = styled.div`
    flex: 1 1 55%;
    max-width: 55%;
    min-width: 300px;
    margin-right: 300px;
`;

const Title = styled.div`
    font-size: clamp(2rem, 8vw, 4rem);
    color: #404050;
    margin-bottom: 2rem;
`;

const Quote = styled.div`
    font-size: clamp(1.2rem, 4vw, 2rem);
    color: #404050;
    margin-bottom: 1.5rem;
    font-style: italic;
`;

const Paragraph = styled.p`
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: #606070;
    line-height: 1.6;
    margin-bottom: 1.5rem;
`;

const ProfileImage = styled.img`
    position: absolute;
    top: 150px;
    right: 50px;
    width: 30%;
    max-width: 350px;
    height: auto;
    z-index: 1;
`;

function AboutPage() {
    return (
        <PageContainer>
            <Background />
            <HeaderLink to="/" className="anton-regular text-animation">
                MA
            </HeaderLink>
            <ContentWrapper>
                <TextSection>
                    <Title className="libre-bodoni-bold-italic text-animation">
                        About Me
                    </Title>
                    <Quote className="libre-bodoni-bold-italic text-animation">
                        "Every child is an artist. The problem is how to remain an artist once we grow up." - Pablo Picasso
                    </Quote>
                    <Paragraph className="montserrat-regular text-animation">
                        The process of creating something from nothing has always fascinated me. 
                        Staring at a blank screen or page and bringing an idea or a goal 
                        to life where there was nothing. I've followed that feeling through my 
                        childhood until now through all of my endeavours. As an art student, an 
                        avid reader and writer, and later as a software engineer and a frontend developer, 
                        I've always been drawn to the process of actualizing an idea in 
                        a way that's tangible and presentable to others.
                    </Paragraph>
                    <Paragraph className="montserrat-regular text-animation">
                        In search of the perfect medium, I've gone from fashioning things out charcoal, clay, 
                        and even words into fashioning my ideas out of code. I've worked with both 
                        frontend and backend technologies such as AWS, Laravel, React, Flutter, 
                        etc. and found my calling in frontend development, as the cusp between 
                        my creative mind and programming skills. I enjoy the ease of watching ideas 
                        come to life in a few lines, and, most of all, knowing that 
                        these ideas serve a purpose and impact how people interact with technology and 
                        the online world.
                    </Paragraph>
                    <Paragraph className="montserrat-regular text-animation">
                        I love being a puzzle piece that is part of a bigger picture, working with 
                        designers, backend developers, and other stakeholders to help businesses and users in 
                        equal measure in achieving their goals and improving their experiences. 
                        "Every child is an artist," as Pablo Picasso said, that certainly rings 
                        true for me. And as for the problem of "how to remain an artist once we grow 
                        up," I've finally found my answer and purpose in helping others achieve their 
                        creative and business goals through frontend development.
                    </Paragraph>
                </TextSection>
                <ProfileImage
                    className="text-animation"
                    src={profileImage}
                    alt="Profile picture of Manahil Awan"
                />
            </ContentWrapper>
        </PageContainer>
    );
}

export default AboutPage;
