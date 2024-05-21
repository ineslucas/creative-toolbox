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

  function handleProjectsClick() {
    // navigate to '/'
    navigate('/');

    // scroll to the top of the page
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth' // or 'auto' for instant scrolling
    // });
  }

  return <>
    <OverlayContainer>
      <TopCenterBar>
          <NameDescription>digipeasy</NameDescription> {/* onClick={toggleAbout} */}
            {/* onClick={() => navigate('/about')} */}
          <AvatarImage src="/images/about/purple_avatar.png"/>
            {/* onClick={() => navigate('/about')} */}
          <NavButton onClick={handleProjectsClick}>Projects</NavButton>
          {/* <NavButton>Playground</NavButton> */}
          {/* <NavButton>Digital Home</NavButton> */}
      </TopCenterBar>

      {/* { showAbout && <About/>} */}
      {/* <EIFForOverlay/> */}

    </OverlayContainer>
  </>
}
