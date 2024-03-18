import React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';
import { Link } from 'react-router-dom';
import { PageContainer, Description, RightContainer, LeftContainer, BackButton, Title, TagsContainer, YearRoleTopicsTechTag, UpperRightLinkContainer } from './TemplateComponents/ProjectStyledTemplates';
import { Cursor } from '../layout/Cursor.js';

const MemoryLab = () => {
  const handleStart = (event) => {
    // Prevent the default drag image from being set
    event.preventDefault();
  };

  const BouncyVertical = styled.div`
    animation: bounce 2s ease-out;

    @keyframes bounce {
      0%   { transform: translateY(0); }
      20%  { transform: translateY(-20px); }
      40%  { transform: translateY(0); }
      60%  { transform: translateY(-15px); }
      80%  { transform: translateY(0); }
      100% { transform: translateY(0); }
    }
  `;

  const BouncyHorizontal = styled.div`
    // to animate
  `;

  return <>
    <Cursor />
    <PageContainer>
      <UpperRightLinkContainer>
        <img
          src="/images/icons/laptop.svg"
          onClick={ () => window.open('https://www.memorylab.space/', '_blank')}/>
        <img
          src="/images/code.svg"
          onClick={ () => window.open('https://github.com/ineslucas/photo_exhibit', '_blank')}/>
      </UpperRightLinkContainer>

      <Title>Memory Lab</Title>
      <LeftContainer>
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
            <YearRoleTopicsTechTag>Ruby on Rails, Three.js, Blender</YearRoleTopicsTechTag>
            <YearRoleTopicsTechTag>Frontend Developer</YearRoleTopicsTechTag>
          </TagsContainer>
          <p>This project is a dynamic 3D visualization where users can upload their photography work. The main focus is on the interactive and dynamic nature of the 3D scene, with user-uploaded images being a key feature. I've always wanted a place on the inter-webs to showcase my photography. This is that.</p>
        </Description>
      </LeftContainer>

      <RightContainer>
        {/* TBC animate to float */}
        <BouncyVertical>
          {/* Wide */}
          <Draggable defaultPosition={{ x: 110, y: 450 }} onStart={handleStart}>
            <img src="/images/memory_lab_wide.png" style={{ width: '300px', height: 'auto' }} />
          </Draggable>

          {/* Login */}
          <Draggable defaultPosition={{ x: -250, y: -130 }} onStart={handleStart}>
            <img src="/images/memory_lab_login.png" style={{ width: '200px', height: 'auto' }} />
          </Draggable>

          {/* Physics */}
          <Draggable defaultPosition={{ x: 10, y: 320 }} onStart={handleStart}>
            <img src="/images/memory_lab_physics.png" style={{ width: '200px', height: 'auto' }} />
          </Draggable>

          {/* Mobile */}
          <Draggable defaultPosition={{ x: -15, y: 100 }} onStart={handleStart}>
            <img src="/images/memory_lab_mobile.jpeg" style={{ width: '200px', height: 'auto' }} />
          </Draggable>
        </BouncyVertical>
      </RightContainer>
    </PageContainer>
  </>
};

export default MemoryLab;
