import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OverlayContainer, TopCenterBar, NavButton, NameDescription, AvatarImage, TopRight } from './styles';
// import About from './About.js';
// import EIFForOverlay from '../pages/EIFForOverlay.js';

export default function Overlay()
{
  const navigate = useNavigate();
  // const [showAbout, setShowAbout] = useState(false);
  // const toggleAbout = () => setShowAbout(!showAbout);

  return <>
    <OverlayContainer>
      <TopCenterBar>
          <NameDescription>digipeasy</NameDescription> {/* onClick={toggleAbout} */}
            {/* onClick={() => navigate('/about')} */}
          <AvatarImage src="/images/about/purple_avatar.png"/>
            {/* onClick={() => navigate('/about')} */}
          <NavButton onClick={() => navigate('/')}>Projects</NavButton>
          {/* <NavButton>Playground</NavButton> */}
          {/* <NavButton>Digital Home</NavButton> */}
      </TopCenterBar>

      {/* { showAbout && <About/>} */}
      {/* <EIFForOverlay/> */}

      {/* <TopRight> */}
      {/* This top left should dissapear and become sticky to the bottom of the canvas */}
      {/* Hi there, I’m <a href="https://mariaineslucas.com/" target="_blank">Inês’</a> creative toolbox, home to her creative projects. Pleasure to see you here. Each object means something - except the Leica. She sadly doesn’t own one. Drag the box and hover around. See what you can find. */}
      {/* </TopRight> */}

    </OverlayContainer>
  </>
}
