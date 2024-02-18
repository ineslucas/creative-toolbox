import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5em;
  z-index: 9999;

  @media (min-width: 910px) {
    display: none; // Hide on larger screens
  }

  p {
    padding-left: 10%;
    padding-right: 10%;
  }
`;

const MobileWarning = () => {
  return (
    <MessageContainer>
      <p>Please check out Digipeasy on a computer fullscreen for the best experience.</p>
    </MessageContainer>
  );
}

export default MobileWarning;
