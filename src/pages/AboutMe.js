import React from 'react';
import styled from 'styled-components';

const AboutMeContainer = styled.div`
  // Basics
  background: #4C325F;
  height: 100vh;
  overflow: auto; // allows scrolling

  padding: 15vh 10vw 10vh 2vw; // top right bottom left
    // creates automatic overflow

  h1 {
    font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
    font-weight: 400;
    font-size: 4em;
    line-height: 1.2em;
    color: #fad9e4;
  }

  p {
    font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
    font-weight: 400;
    font-size: 1.5em;
    line-height: 1.2em;
    color: #fad9e4;
  }
`;

const AboutMe = () => {
  return <>
    <AboutMeContainer>
      <h1>About Me</h1>
      <p>My name is Inês Lucas,
        a Full Stack Developer and creative technologist based in Lisbon.
        Entrepreneurship enthusiast previously at the European Investment Fund and Nestlé. Currently on a gap year.</p>
      <p>My main goal is to create meaningful products that can make a difference in people's lives.  </p>
      <p>I'm a big fan of the outdoors, photography and cooking.</p>
    </AboutMeContainer>
  </>
}

export default AboutMe;
