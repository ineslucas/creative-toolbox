import styled from 'styled-components';

export const PageContainer = styled.div`
  position: relative;
  background: #630535;
  width: 100vw;
  height: 100vh;
  // can't have padding - causes overflow

  display: flex;
  justify-content: space-between;

  @media (max-width: 663px) {
    flex-direction: column; // Stack children vertically on small screens
  }

  h1 {
    font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
    font-weight: 400;
    font-size: 2em;
    line-height: 1.2em;
    color: #fad9e4;
    margin-bottom: 3%;
  }

  p {
    color: #fad9e4;
  }
`
export const LeftContainer = styled.div`
  background: #630535;
  width: 30%;
  height: 100vh;
  // can't have padding - causes overflow

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 663px) {
    width: 100%; // Full width on small screens
    height: auto; // Adjust height as per content
  }
`

export const BackButton = styled.div`
  align-self: flex-start;
  display: flex; // Changed to flex to align children inline
  align-items: center; // Align items vertically

  margin-top: 25vh;
  margin-left: 3vw;

  img, p {
    display: inline-block; // Make both children inline-block
    margin-right: 30px; // Optional, for some space between elements
  }

  p {
    font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
    font-weight: 400;
    font-size: 1.5em;
    line-height: 1.2em;
    color: #fad9e4;
  }
`

export const Description = styled.div`
  overflow-y: auto;
  align-self: flex-end;
  margin-left: 3vw;
  margin-right: 3vw;
  margin-bottom: 3vw;
  margin-top: 3vw;

  h1 {
    font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
    font-weight: 400;
    font-size: 2em;
    line-height: 1.2em;
    color: #fad9e4;
    margin-bottom: 5%;
  }

  p {
    color: #fad9e4;
  }
`

export const RightContainer = styled.div`
  background: #470728;
  height: 100vh;
  width: 60%;
  overflow: auto; // Allows scrolling

  @media (max-width: 663px) {
    width: 100%; // Full width on small screens
    height: auto; // Adjust height as per content
  }
`

export const Title = styled.h2`
  position: absolute;
  top: 15vh;
  left: calc(30% + 4vw); // 30% is the width of the LeftContainer + 10px into the RightContainer

  font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
  font-weight: 400;
  font-size: 7em;
  line-height: 1.2em;
  color: #fad9e4;
  margin-bottom: 5%;
  z-index: 20;

  @media (max-width: 663px) {
    top: 10vh; // Adjust this value as needed for mobile
    left: 3vw; // Align with the left margin of BackButton
    font-size: 3em; // Adjust font size for smaller screens
    // Add any other adjustments for smaller screens
  }
`

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-bottom: 5%;
`;

export const YearRoleTopicsTechTag = styled.div`
  padding: 0.5em 1em;
  // background: #943E59;
  border-style: solid;
  border-width: 1px;
  border-color: #fad9e4;
  color: #fad9e4;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
`
// can place them on upper right corner - with button to LIVE DEMO & GITHUB, Technologies used, Year, Role, Topics

export const UpperRightLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: fixed;
  top: 2.7vw;
  right: 2.5vw;
  z-index: 20;

  img {
    cursor: pointer;
    transform: scale(1.6);
    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.2);
    }
    margin-left: 30px;
  }
`;
