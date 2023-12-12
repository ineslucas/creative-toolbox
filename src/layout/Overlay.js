import { Container, BottomLeft, BottomCenterBar, NavButton, NameDescription } from './styles'

export default function Overlay()
{
   return <Container>
      <BottomCenterBar>
          <NavButton>Projects</NavButton>
          <NavButton>Playground</NavButton>
          <NavButton>Digital Home</NavButton>
          <NameDescription>Inês Lucas</NameDescription>
      </BottomCenterBar>
   </Container>
}
