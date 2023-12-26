import styled from 'styled-components';
{/** npm install styled-components */}

export const Container = styled.div`
  font-family: 'Inter';
  font-size: 16px;
  & h1 {
    padding: 0;
    margin: 0 0 0.05em 0;
    font-family: 'Ayer Poster', serif;
    font-weight: 400;
    font-size: min(18vw, 14em);
    line-height: 0.85em;
  }
`

export const TopLeft = styled.div`
  position: absolute;
  top: 5vw;
  left: 5vw;
`

export const BottomLeft = styled.div`
  position: absolute;
  bottom: 5vw;
  left: 5vw;
  width: 30ch;
  max-width: 40%;
`
{/** Add media queries & margin & flex disposition */}
export const BottomCenterBar = styled.div`
  // position: absolute;
  position: fixed;
  bottom: 5vw;
  left: 50%;
  transform: translateX(-50%);
`

export const NavButton = styled.div`
  display: inline-block;
  padding: 0.5em 1em;
  margin: 0px 0.5em 0.5em 0em;
  background: #943E59;
  color: white;
  border-radius: 0.5em;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
  &:hover {
    background: #000;
    color: #fff;
  }
`

{/** This is how we can extend a styled component - to be used */}
export const NavButtonSelected = styled(NavButton)`
  background: #000;
  color: #fff;
`

export const NameDescription = styled.div`
  display: inline-block;
  margin: 0px 0.5em 0.5em 0em;
  font-size: 2em;
  font-weight: 300;
  line-height: 1.2em;
  color: white;
`

{/** Project pages */}
export const ProjectContainer = styled.div`
  top: 5vw;
  left: 5vw;
  width: 90vw;
  height: 90vh;
  background: mediumpurple;
  padding: 10px;
`
