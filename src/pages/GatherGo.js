import React, { useState } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PageContainer, Description, RightContainer, LeftContainer, BackButton, Title, TagsContainer, YearRoleTopicsTechTag, UpperRightLinkContainer } from './TemplateComponents/ProjectStyledTemplates';
import { Cursor } from '../layout/Cursor.js';

const StyledYouTubeVideo = styled.div`
  max-width: 593.88px;

  @media (max-width: 1098px) {
    iframe {
      scale: 0.8;
      padding-left: 0;
      /* missing left margin fix */
    }
  }

  @media (max-width: 976px) {
    iframe {
      scale: 0.6;
      padding-left: 0;
    }
  }
`;

const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35vh;
`;

const SubHeadingsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SubHeading = styled.div`
  font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
  font-weight: 400;
  font-size: 1.6em;
  line-height: 1.2em;
  color: #fad9e4;
  margin-bottom: 2%;
  margin-left: 25px;

  @media (max-width: 663px) {
    top: 10vh;
    left: 3vw;
    font-size: 3em;
  }
`
const ContainerForToggle = styled.div`
  padding: 0px 25px 15px 25px;
  color: #fad9e4;
  line-height: 1.5em;

  @media (max-width: 1098px) {
    margin-left: 0px;
  }

  p, li {
    color: #fad9e4;
    font-weight: 400;
    line-height: 1.5em;
  }
`;

const UserInterfaceGalleryContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  height: 100%;
  overflow-x: auto;  // Enable horizontal scrolling
  overflow-y: hidden; // Disable vertical scrolling
`;

const Photo = styled.img`
  height: auto;
  max-height: 55vh; // ⭐️
  aspect-ratio: auto 1 / 1; /* Original aspect ratio */
  flex-shrink: 0;
`;

const TwoColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

const GatherGo = () => {
  const [activeSection, setActiveSection] = useState('ui'); // State keeps track of the active section - 'ui' set as default

  const handleSubHeadingClick = (section) => {
    setActiveSection(section); // Handles clicks on subheadings
  };

  const handleStart = (event) => {
    event.preventDefault();
  };

  const renderYoutubeVideo = () => {
    return (
      <iframe
        width="593.88"
        height="334.0575"
        src="https://www.youtube.com/embed/uXlWTxWLvlQ?si=05tnZntZWp6wiCR1&amp;start=1830"
        // REDO START STAMP
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    );
  };

  return <>
    <Cursor />
    <PageContainer>
      <UpperRightLinkContainer>
        <img src="/images/code.svg" onClick={ () => window.open('https://github.com/ineslucas/gather_go', '_blank')}/>
      </UpperRightLinkContainer>

      <Title style={{ top: '2vh' }}>Gather Go</Title>
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
            <YearRoleTopicsTechTag>2023</YearRoleTopicsTechTag>
            <YearRoleTopicsTechTag>Bootcamp Final Project</YearRoleTopicsTechTag>
            <YearRoleTopicsTechTag>Ruby on Rails</YearRoleTopicsTechTag>
            <YearRoleTopicsTechTag>Lead Developer</YearRoleTopicsTechTag>
          </TagsContainer>
          <p>
            GatherGo is a comprehensive party planning app designed to streamline and simplify the process of organizing and hosting themed events.
            <br />
            <br />
            The app provides users with tools for selecting themes with a dedicated Spotify playlist, discovering creative DIY decoration ideas through a Pinterest mood board, recipes, mocktails, cocktails and game options.
            <br />
            <br />
            Developed with a user-friendly interface, GatherGo aims to make party planning an enjoyable and stress-free experience for everyone by also giving you a to-do list with the ingredients for your recipes and the materials for your games.
          </p>
        </Description>
      </LeftContainer>

      <RightContainer style={{ position: 'relative' }}>
        {/* <Draggable defaultPosition={{ x: 2000, y: -730 }} onStart={handleStart}>
          <img src='/images/gathergo.png' style={{ scale: '0.2' }} />
        </Draggable> */}

        <SectionsContainer>
          <SubHeadingsContainer>
            <SubHeading
              onClick={() => handleSubHeadingClick('ui')}
              style={{ opacity: activeSection === 'ui' ? 1 : 0.4 }}>User Interface</SubHeading>
            <SubHeading
              onClick={() => handleSubHeadingClick('pitch')}
              style={{ opacity: activeSection === 'pitch' ? 1 : 0.4 }}>Watch me pitch</SubHeading>
            <SubHeading
              onClick={() => handleSubHeadingClick('tech')}
              style={{ opacity: activeSection === 'tech' ? 1 : 0.4 }}>Tech Stack details</SubHeading>
          </SubHeadingsContainer>

          {activeSection === 'ui' &&
            <ContainerForToggle>
              <UserInterfaceGalleryContainer>
                <Photo src='/images/gatherGoInterface/gathergo1.png' />
                <Photo src='/images/gatherGoInterface/gathergo2.png' />
                <Photo src='/images/gatherGoInterface/gathergo3.png' />
                <Photo src='/images/gatherGoInterface/gathergo4.png' />
                <Photo src='/images/gatherGoInterface/gathergo5.png' />
                <Photo src='/images/gatherGoInterface/gathergo6.png' />
                <Photo src='/images/gatherGoInterface/gathergo7.png' />
                <Photo src='/images/gatherGoInterface/gathergo8.png' />
                <Photo src='/images/gatherGoInterface/gathergo9.png' />
              </UserInterfaceGalleryContainer>
            </ContainerForToggle>
          }
          { activeSection === 'pitch' &&
            <ContainerForToggle>
              <StyledYouTubeVideo>
                {renderYoutubeVideo()}
              </StyledYouTubeVideo>
            </ContainerForToggle>
          }
          { activeSection === 'tech' &&
            <ContainerForToggle>
              {/* tbc creating 2 columns */}
              Contrary to Surf the Job, which was developed with no-code, I went into the bootcamp because I wanted to be capable to fully create a web app and give life to my ideas. GatherGo was then created and shipped using HTML, CSS, Bootstrap, JavaScript ES6, SQL, git, GitHub, Heroku and Ruby on Rails. GatherGo’s branding and logo was also developed by me, with a lot of the UX being João Gouveia’s work.
              <br />
              <br />
              <p>As a lead developer, I’ve worked mainly on the following features:</p>
              <ul className='custom-bullet'>
                <li>Roadmap and delegation</li>
                <li>Tactical decisions on the database Schema with additional fixes and migrations</li>
                <li>Routes and controller for bookings, using Ruby on Rails</li>
                <li>Seeds including embedded Spotify playlist and Pinterest mood board for each party theme</li>
                <li>Start your Party Questionnaire, using HTML and JavaScript</li>
                <li>Page to show each booking of a party, showing details for each party theme and to-do list</li>
                <li>Front end for to-do list and moodboard brainstorm field, using Java Script, Bootstrap and CSS</li>
                <li>Confirmation page, using HTML and CSS</li>
                <li>iCalendar download for each party</li>
                <li>WhatsApp sharing</li>
                <li>Deploying to Heroku and fixes</li>
                <li>Code clean-up</li>
              </ul>
            </ContainerForToggle>
          }
        </SectionsContainer>
      </RightContainer>
    </PageContainer>
  </>
};

export default GatherGo;
