import React, { useState } from 'react';
import { TopCenterBar, NavButton, NameDescription } from './styles';
import EIFForOverlay from '../projectpages/EIFForOverlay.js';
import About from './About.js';

export default function Overlay()
{
  const [showAbout, setShowAbout] = useState(false);
  const toggleAbout = () => setShowAbout(!showAbout);

  return <>
    <TopCenterBar>
        <NameDescription onClick={toggleAbout}>Inês Lucas</NameDescription>
        <NavButton>Projects</NavButton>
        <NavButton>Playground</NavButton>
        <NavButton>Digital Home</NavButton>
    </TopCenterBar>

    { showAbout && <About/>}

    {/* <EIFForOverlay/> */}

   </>
}
