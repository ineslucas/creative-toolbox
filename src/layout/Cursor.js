// Animated correctly but not in the right position
import styled from 'styled-components';
import { Html } from '@react-three/drei';

const CircularLetter = styled.span`
  position: absolute;
  height: 120px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 60px 60px; // Half the size of the container
  transform: ${({ angle }) => `rotate(${angle}deg) translateY(-47px)`}; // translateY determines radius
  color: #EFA8B2;
  font-size: 16px;
  font-weight: 400;
`;

const CursorPhoto = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  background: #EB5729;
  z-index: 9999;
  font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
  position: relative;
  overflow: hidden;
  animation: effect 14s linear infinite; // takes 14s for the cursor to complete a full rotation

  @keyframes effect {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Cursor({ text = " view project view project" }) {
  const letters = text.split('');
  const degreeIncrement = 360 / letters.length;

  return (
    <Html>
      <CursorPhoto>
        {letters.map((letter, index) => (
          <CircularLetter
            key={index}
            angle={degreeIncrement * index}
          >
            {letter}
          </CircularLetter>
        ))}
      </CursorPhoto>
    </Html>
  );
}
