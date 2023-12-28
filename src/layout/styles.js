import styled from 'styled-components'; {/** npm install styled-components */}

{/** Add media queries & margin & flex disposition */}
export const TopCenterBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: fixed;
  top: 2vw;
  left: 2vw; // vh?

  // background: #FECCD3;
  background: white;
  padding: 0.5em 1em;
  border-radius: 0.5em;

  font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
`

export const NavButton = styled.div`
  display: inline-block;
  padding: 0.5em 1em;

  background: #943E59;
  color: white;
  border-radius: 0.5em;
  cursor: pointer;
  transition: all 0.2s ease;
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
  // display: inline-block;
  margin-right: 10px;
  font-size: 2em;
  line-height: 1.2em;
  color: #671069;
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

{/** Project pages */}
export const ProjectContainer = styled.div`
  top: 5vw;
  left: 5vw;
  width: 90vw;
  height: 90vh;
  background: mediumpurple;
  padding: 10px;
`
