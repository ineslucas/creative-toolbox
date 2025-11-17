import React, { useState } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PageContainer, Description, RightContainer, LeftContainer, BackButton, Title, TagsContainer, YearRoleTopicsTechTag, UpperRightLinkContainer } from './TemplateComponents/ProjectStyledTemplates';
import { Cursor } from '../layout/Cursor.js';
import TouchGrassFilm from '../../public/images/touchGrass/TouchGrassFilm.png';

const RightContainerWithImage = styled.div`
  background: #470728;
  background-image: url(${TouchGrassFilm});
  background-size: cover; /* image covers the entire container */
  background-position: center; /* center image within the container */
  width: 60%;

  @media (max-width: 663px) {
    width: 100%; // Full width on small screens
    height: auto; // Adjust height as per content
  }
`

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
  margin-top: 60vh; // What makes the information be underneath.
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
  max-height: 30vh; // ⭐️ sets the height for the photos, and therefore the container.
  aspect-ratio: auto 1 / 1; /* Original aspect ratio */
  flex-shrink: 0;
`;

const TwoColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

const TouchGrass = () => {
  const [activeSection, setActiveSection] = useState('documentation'); // State keeps track of the active section - 'ui' set as default

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
      {/* <UpperRightLinkContainer>
        <img src="/images/code.svg" onClick={ () => window.open('https://github.com/ineslucas/gather_go', '_blank')}/>
      </UpperRightLinkContainer> */}

      <Title style={{ top: '2vh' }}>Touch Grass</Title>
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
            <YearRoleTopicsTechTag>2024</YearRoleTopicsTechTag>
            <YearRoleTopicsTechTag>Interactive Installation</YearRoleTopicsTechTag>
          </TagsContainer>
          <p>
            Touch Grass is an interactive digital pond. Its shape ensures everyone has equal stakes and engaging in accessible collective play, which creates a state of mind for open conversation. It conveys the power of collaboration in society, as you need everyone to touch it as the same time to see the full ripple effects.
            <br />
            <br />
            Exhibited at Interactive Media Arts Show, Brooklyn, December 2024.
            <br />
            <br />
            Developed in collaboration with Ranjani Ramakrishnan.
          </p>
        </Description>
      </LeftContainer>

      <RightContainerWithImage style={{ position: 'relative' }}>
        {/* <Draggable defaultPosition={{ x: 2000, y: -730 }} onStart={handleStart}>
          <img src='/images/gathergo.png' style={{ scale: '0.2' }} />
        </Draggable> */}

        <SectionsContainer>
          <SubHeadingsContainer>
            <SubHeading
              onClick={() => handleSubHeadingClick('documentation')}
              style={{ opacity: activeSection === 'documentation' ? 1 : 0.4 }}>Documentation</SubHeading>
            <SubHeading
              onClick={() => handleSubHeadingClick('materials')}
              style={{ opacity: activeSection === 'materials' ? 1 : 0.4 }}>Materials</SubHeading>
          </SubHeadingsContainer>

          {activeSection === 'documentation' &&
            <ContainerForToggle>
              <UserInterfaceGalleryContainer>
                <Photo src='/images/touchGrass/TG GIF Canon Fabri.gif' />
                <Photo src='/images/touchGrass/iPhoneVideo.gif' />
                <Photo src='/images/touchGrass/Sequence 4k Timelapse_1.gif' />
                <Photo src='/images/touchGrass/Sequence GIF Canon Clips above.gif' />
                <Photo src='/images/touchGrass/TouchGrassFilm.png' />
              </UserInterfaceGalleryContainer>
            </ContainerForToggle>
          }
          { activeSection === 'materials' &&
            <ContainerForToggle>
              Textiles, Custom Pressure Sensor, Arduino, Particle visuals, Metal frame, Plastic Bin, Books, MDF Board, Projector, Projector Screen
            </ContainerForToggle>
          }
        </SectionsContainer>
      </RightContainerWithImage>
    </PageContainer>
  </>
};

export default TouchGrass;
