import React from 'react';
import Draggable from 'react-draggable';
import { Link } from 'react-router-dom';
import { PageContainer, Description, RightContainer, LeftContainer, BackButton, Title } from './TemplateComponents/ProjectStyledTemplates';
import { Cursor } from '../layout/Cursor.js';

const MemoryLab = () => {
  const handleStart = (event) => {
    // Prevent the default drag image from being set
    event.preventDefault();
  };

  return <>
    <Cursor />
    <PageContainer>
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
          <p>This project is a dynamic 3D visualization where users can upload their photography work. The main focus is on the interactive and dynamic nature of the 3D scene, with user-uploaded images being a key feature. I've always wanted a place on the inter-webs to showcase my photography. This is that.</p>
        </Description>
      </LeftContainer>

      <RightContainer>
        <Link to="https://www.memorylab.space" style={{ textDecoration: 'none', color: 'inherit' }}>
          {/* I should animate these to be floating */}
          <Draggable defaultPosition={{ x: 100, y: 500 }} onStart={handleStart}>
            <img src="/images/EIF.jpeg" style={{ width: '200px', height: 'auto' }} />
          </Draggable>
        </Link>
        <Draggable defaultPosition={{ x: 380, y: 300 }} onStart={handleStart}>
          <img src="/images/EIF.jpeg" style={{ width: '200px', height: 'auto' }} />
        </Draggable>
      </RightContainer>
    </PageContainer>
  </>
};

export default MemoryLab;
