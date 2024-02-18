import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OverlayContainer, TopCenterBar, NavButton, NameDescription, AvatarImage } from './styles';
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
    </OverlayContainer>
  </>
}
