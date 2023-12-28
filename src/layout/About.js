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
`

export default function About() {
  return <>
    <IntroContainer>
      <h1>Creative Technologist and Full Stack developer based in Lisbon.</h1>
      <p>Entrepreneurship enthusiast previously at the European Investment Fund and Nestlé.</p>
      <br/>
      <p>This is information about me.</p>
      <p>This is information about me.</p>
      <p>This is information about me.</p>
    </IntroContainer>
  </>
}
