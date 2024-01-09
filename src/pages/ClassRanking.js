import React from 'react';
import styled from 'styled-components';

const BoldText = styled.span`
  font-weight: 900;
  opacity: 1;
`;

const PageContainer = styled.div`
  position: relative;
  background: #630535;
  width: 100vw;
  height: 100vh;
  overflow: auto;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1087px) {
    flex-direction: column;
  }

  h1 {
    font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
    font-weight: 400;
    font-size: 2em;
    line-height: 1.2em;
    color: #fad9e4;
    margin-bottom: 3%;
  }

  p, li {
    font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
    color: #fad9e4;
    font-weight: 400;
    opacity: 0.8;
    margin-bottom: 1em;

    ${BoldText} {
      opacity: 1; /* Overriding opacity for BoldText inside p and li */
    }
  }
`;

const LeftContainer = styled.div`
  background: #630535;
  width: 70%;
  margin-left: 3vw;
  margin-right: 3vw;
  margin-top: 15vh; // same as CertificateContainer
  margin-bottom: 1em;

  @media (max-width: 1087px) {
    width: auto;
    margin-left: 3vw;
  }
`;

const CertificateContainer = styled.div`
  /* No pre prescribed height */
  margin-top: 15vh;
  margin-bottom: 5vh;
  margin-right: 3vw;

  img {
    transform: rotate(10deg);
    max-height: 667px;
    margin-left: 12vw;
    transition: transform 0.5s ease-in-out; /* Smooth transition for Rotation */

    &:hover {
      animation: shake 0.5s;
      animation-timing-function: ease-in-out;
      transform: rotate(0deg);
    }
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }

  @media (max-width: 1087px) {
    height: auto; /* Allowing height to adjust as per content */
    margin-left: 3vw;
    margin-top: 8vh;
    margin-bottom: 3vh;
    margin-left: 3vw; // Add some space on the left
    margin-right: 3vw; // Add some space on the right

    img {
      transform: rotate(0deg);
      margin-left: 0vw;
      max-height: 500px;
      width: 100%;
      max-height: none;
      transition: transform 0.5s ease-in-out; /* Smooth transition for Rotation */
    }
  }
`;

const ClassRanking = () => {
  return <>
    <PageContainer>
      <LeftContainer>
        <h1>Academic excellence details</h1>
        <ul className='custom-bullet' style={{ marginBottom: '5vh'}}>
          <li>The GPA for my degree <BoldText>has never been higher than 17</BoldText> and only two students in the history of my degree got that GPA. One of these two students is the former CEO of Lloyds Bank.</li>
          <li>With a <BoldText>GPA of 16</BoldText>, I rank #6 in the group of #33 students that succeeded in graduating from my BSc program in 2019/2020.</li>
          <li>I’ve obtained Merit Scholarships, awarded consecutively for the 3 years of my degree based on academic merit.</li>
          <li>I was the top candidate for the flagship competitive program, the <BoldText>International Tri School Exchange,</BoldText> through which I studied at <BoldText>McGill in Canada and BI in Norway.</BoldText></li>
        </ul>

        <h1>During my degree, I was quite active in the community:</h1>
        <ul className='custom-bullet'>
          <li>Social Impact Consultant at 180 Degrees Consulting, with Deloitte mentorship, in the veterinary health sector.</li>
          <li>Marketing VP at Católica International Club.</li>
          <li>Incoming Exchange Partners Team Member at AIESEC, where I organised projects between nursing homes and volunteers. Later on, became a project participant as an English Teacher in Phetchaburi, Thailand.</li>
          <li>Volunteered at a number of events, including TEDxCatólicaLisbonSBE, Web Summit, as a mentor and driver for other students.</li>
        </ul>
      </LeftContainer>
      <CertificateContainer>
        <img src="/images/about/class-ranking-for-site.png"/>
      </CertificateContainer>
    </PageContainer>
  </>
};

export default ClassRanking;
