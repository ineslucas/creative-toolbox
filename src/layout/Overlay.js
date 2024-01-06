import React, { useState } from 'react';
import { OverlayContainer, TopCenterBar, NavButton, NameDescription, AvatarImage } from './styles';
import About from './About.js';
import EIFForOverlay from '../pages/EIFForOverlay.js';

export default function Overlay()
{
  const [showAbout, setShowAbout] = useState(false);
  const toggleAbout = () => setShowAbout(!showAbout);

  return <>
    <OverlayContainer>
      <TopCenterBar>
          <NameDescription onClick={toggleAbout}>Inês Lucas</NameDescription>
          <AvatarImage src="/images/about/purple_avatar.png" onClick={() => window.open('/about')}/>
          <NavButton onClick={() => window.open('/')}>Projects</NavButton>
          <NavButton>Playground</NavButton>
          <NavButton>Digital Home</NavButton>
      </TopCenterBar>

      { showAbout && <About/>}

      {/* <EIFForOverlay/> */}
    </OverlayContainer>
  </>
}
