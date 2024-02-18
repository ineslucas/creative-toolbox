// ❌
import styled from "styled-components";

const IntroContainer = styled.div`
  max-width: 553px;
  border-radius: 0.5em;

  position: fixed;
  top: 6vw;
  left: 2vw;

  overflow: auto;
  padding: 1em;
  margin-right: 10px;
  background: white;
  animation: effect 1s ease-out;
  @keyframes effect {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;

  img {
    transition: transform 0.3s ease; /* Smooth transition for 0.3 seconds */
    max-height: 30px;

    &:hover {
      transform: scale(6) rotate(10deg);
    }
  }

  p {
    font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
    font-size: 1em;
    line-height: 1.2em;
    color: #943E59;
  }
`

export default function About() {
  return <>
    <IntroContainer>
      <p>My</p> <p>name</p> <p>is</p> <p>Inês</p> <p>Lucas,</p> <p>a</p> <p>Full</p> <p>Stack</p> <p>Developer</p> <p>and</p> <p>creative</p> <p>technologist</p>
      <img src='/images/pnglogosurfthejob.png' height={60} alt="Logo" />
      <p>based</p> <p>in</p> <p>Lisbon.</p>
      <p>Entrepreneurship</p> <p>enthusiast</p> <p>previously</p> <p>at</p> <p>the</p> <p>European</p> <p>Investment</p> <p>Fund</p>
      <img src='/images/EIF.jpeg' height={60} alt="EIF" />
      <p>and</p> <p>Nestlé.</p>
      <p>Currently</p> <p>on</p> <p>a</p> <p>gap</p> <p>year.</p>
    </IntroContainer>
  </>
}
