import styled from 'styled-components';

export const AboutContainer = styled.div`
  padding: 4em 7em;
  height: auto;
  background: #FECCD3;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Adjust the space between text and image */

  img {
    transition: transform 0.3s ease; /* Smooth transition for 0.3 seconds */
    max-height: 30px;

    &:hover {
      transform: scale(6) rotate(10deg);
    }
  }

  p {
    font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
    font-size: 1.7em;
    line-height: 1.2em;
    color: #943E59;
  }
`;

export default function AboutHover() {
  return <>
    <AboutContainer>
        <p>My</p> <p>name</p> <p>is</p> <p>Inês</p> <p>Lucas,</p> <p>a</p> <p>Full</p> <p>Stack</p> <p>Developer</p>
        <img src='/images/pnglogosurfthejob.png' alt="Logo" />
        <p>based</p> <p>in</p> <p>Lisbon.</p>
        <p>Entrepreneurship</p> <p>enthusiast</p> <p>previously</p> <p>at</p> <p>the</p> <p>European</p> <p>Investment</p> <p>Fund</p>
        <img src='/images/EIF.jpeg' alt="EIF" />
        <p>and</p> <p>Nestlé.</p>
        <p>Currently</p> <p>on</p> <p>a</p> <p>gap</p> <p>year.</p>
    </AboutContainer>
  </>;
}
