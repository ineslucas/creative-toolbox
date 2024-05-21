import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { OverlayContainer, TopCenterBar, NavButton, NameDescription, AvatarImage } from './styles';
// import About from './About.js';
// import EIFForOverlay from '../pages/EIFForOverlay.js';

export default function Overlay()
{
  // const [showAbout, setShowAbout] = useState(false);
  // const toggleAbout = () => setShowAbout(!showAbout);

  return <>
    <OverlayContainer>
      <TopCenterBar>
          <NameDescription><Link to="/">digipeasy</Link></NameDescription> {/* onClick={toggleAbout} */}
          <AvatarImage src="/images/about/purple_avatar.png"/>

          {/* <Link to="/">
            <NavButton as="div">Projects</NavButton>
          </Link> */}

          {/* <NavButton>Playground</NavButton> */}
          {/* <NavButton>Digital Home</NavButton> */}

          {/* <Link to="/about">
            <NavButton as="div">Playground / About</NavButton>
          </Link> */}

      </TopCenterBar>

      {/* { showAbout && <About/>} */}
      {/* <EIFForOverlay/> */}

    </OverlayContainer>
  </>
}

// Overuse of useNavigate() hook can lead to performance issues.
