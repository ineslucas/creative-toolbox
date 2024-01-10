import React from 'react';
import styled from 'styled-components';

const AboutMeContainer = styled.div`
  background: #4C325F;
  height: 100vh;
  overflow: auto; // allows scrolling

  padding: 20vh 2vw 10vh 2vw; // top right bottom left
    // creates automatic overflow

  h1 {
    font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
    font-weight: 400;
    font-size: 3em;
    line-height: 1.2em;
    color: #fad9e4;
  }

  p {
    font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
    font-weight: 400;
    font-size: 1.5em;
    line-height: 1.5em;
    color: #fad9e4;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 5vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FlexChild = styled.div`
  flex: 1; /* so each child takes up equal width */
  padding: 1em;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  h1 {
    font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
    font-weight: 400;
    font-size: 2em;
    line-height: 1.5em;
    color: #fad9e4;
  }

  p {
    font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
    color: #fad9e4;
    font-weight: 400;
    margin-bottom: 1em;
    font-size: 1em;
    line-height: 1.5;
  }
`;

const AboutMe = () => {
  return <>
    <AboutMeContainer>
      <p>Hi - my name is (Maria) Inês Lucas, a Marketeer turned Full Stack Developer based in Lisbon, Portugal.
        Into entrepreneurship and creativity through technology.
        Previously at the European Investment Fund and Nestlé. Currently on a gap year.</p>
      <br />
      <p>Digipeasy is the space acting as a playground for experimentation. My main goal is to create quality experiences for my community, which are web based for the moment.</p>

      <FlexContainer>
        <FlexChild>
          <h1>the what where</h1>
          <p>On a sabbatical, where I’ve recently finished an intensive Web Development bootcamp.
            Previously, I was a Marketing Officer for the European Investment Fund.
            I’ve lived in Luxembourg, Montréal, Oslo, Amsterdam, Thailand and Lisbon. Part-time digital nomad.</p>
        </FlexChild>
        <FlexChild>
          <h1>the creative</h1>
          <p>I’m working on building my Life Resumé as much as my creative one.
            I enjoy creating, whether it’s websites, new digital designs or swimwear. </p>
        </FlexChild>
        <FlexChild>
          <h1>the developer</h1>
          <p>One of my first building experiences was my own startup for youth employment, helping students experiment with their career path:
            Surf the Job in the Forward Pre-Acceleration Program.
            Recently, since I’ve learnt how to code, I built GatherGo. Now working on Rails, React & Three JS projects like this portfolio which I coded and designed.</p>
        </FlexChild>
      </FlexContainer>

    </AboutMeContainer>
  </>
}

export default AboutMe;
