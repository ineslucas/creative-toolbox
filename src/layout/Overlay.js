import { Container, BottomLeft, BottomCenterBar, NavButton, NameDescription } from './styles'
import EIFForOverlay from '../projectpages/EIFForOverlay.js'

export default function Overlay()
{
   return <>
      <Container>
        <BottomCenterBar>
            <NavButton>Projects</NavButton>
            <NavButton>Playground</NavButton>
            <NavButton>Digital Home</NavButton>
            {/* <NameDescription>Inês Lucas</NameDescription> */}
        </BottomCenterBar>
    </Container>

    {/* <EIFForOverlay/> */}
   </>
}
