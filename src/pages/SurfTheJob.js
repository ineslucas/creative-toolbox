import React from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PageContainer, Description, RightContainer, LeftContainer, BackButton, Title, TagsContainer, YearRoleTopicsTechTag } from './TemplateComponents/ProjectStyledTemplates';
import { Cursor } from '../layout/Cursor.js';

const SurfTheJob = () => {
  const handleStart = (event) => {
    // Prevent the default drag image from being set
    event.preventDefault();
  };

  const renderYoutubeVideo = () => {
    return (
      <iframe
        width="392"
        height="220.5"
        src="https://www.youtube.com/embed/bcLTA6tmOOo?si=o8RBvqrjF9UBmOgA"
        title="YouTube video player"
        style={{ border: 'none' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
      </iframe>
    );
  };

  const StyledYouTubeVideo = styled.div`
  position: absolute;
  bottom: 1em;
  left: 30em;
  width: 150px;
  `;

  const StyledPitchDeck = styled.div`
    position: absolute;
    top: 50%;  // Adjust as needed
    left: 10%;   // Adjust as needed
    width: 70%;  // Adjust as needed
    iframe {
      border: none;
    }
  `;

  return <>
    <Cursor />
    <PageContainer>
      <Title>Surf the Job</Title>
      <LeftContainer style={{ overflow: 'auto' }}>
        <BackButton>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src="/images/arrow_back.svg" style={{ transform: 'scale(1.4)' }}/>
            <p>BACK</p>
          </Link>
        </BackButton>
        <Description>
          <h1>details</h1>
          <TagsContainer>
            <YearRoleTopicsTechTag>2021</YearRoleTopicsTechTag>
            <YearRoleTopicsTechTag>Co-founder</YearRoleTopicsTechTag>
            <YearRoleTopicsTechTag>No-code: Bubble, Figma</YearRoleTopicsTechTag>
            <YearRoleTopicsTechTag>Product Developer, Brand Designer</YearRoleTopicsTechTag>
          </TagsContainer>
          <p>
          All stages of product development (understanding customer needs, branding, launching our Minimum Viable Product - the platform).
          <br/>
          <br/>
          My co-founder and I did 73 customer interviews (with both students & companies such as Nestlé, Deloitte, Ageas etc.), pitched to 12 investors / industry mentors and closed contract with an incubator and 4 startups, resulting in 30 matches.
          <br/>
          <br/>
          I learned how to do low-code development with Bubble, how to position a startup, how to pitch and most importantly, how to think about businesses and how startups get going.
          <br/>
          <br/>
          We're very proud that Surf the Job was a finalist of the Forward Pre-Acceleration Program, by the Católica Lisbon Centre for Tech Entrepreneurship, Mango UP, BET Ventures and Startup Lisboa.
          </p>
        </Description>
      </LeftContainer>

      <RightContainer style={{ position: 'relative' }}>
        <Draggable defaultPosition={{ x: 2700, y: -800 }} onStart={handleStart}>
          <img src='/images/pnglogosurfthejob.png' style={{ scale: '0.2' }} />
        </Draggable>

        <StyledYouTubeVideo>
          {renderYoutubeVideo()}
        </StyledYouTubeVideo>
        <StyledPitchDeck>
          <h1>pitch deck</h1>
          <iframe
            src="/files/Surf_the_Job_pitching_kit_pdf.pdf"
            // style={{ width: '50%', height: '30%' }}
            >
          </iframe>
        </StyledPitchDeck>



        {/* <h1>the story behind Surf the Job</h1>
        <p>
        Surf the Job was created by two business graduates, Inês Lucas and Mariana Kobayashi.

        As we ventured into the job market, we realised that most students are not sure what the "dream job" is, ourselves included. Especially in the business areas, there's so much to try.

        We needed to experiment with more roles. After helping more than 30 of our peers with job applications and finding the opportunities that were right for them, we wanted to simplify the process for everyone.

        Simultaneously, transitioning from being a student to a paid contributor is quite hard, particularly in Portugal. As a student, everyone expects you to do everything for free, often even after you graduate.

        We set out to tackle the youth employment & unpaid internships issue whilst making it fun to design your future. We partnered with startups so you can get experience in your dream job before graduation.

        It started as a slightly different idea but as we interviewed both students and companies, we adapted our product into flexible internships for students adapted to today’s working culture.
        </p> */}
      </RightContainer>
    </PageContainer>
  </>
};

export default SurfTheJob;
