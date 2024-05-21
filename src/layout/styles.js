import styled from 'styled-components'; {/** npm install styled-components */}

export const OverlayContainer = styled.div`
  position: absolute;
  z-index: 500;
`

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
  padding: 0.5em 0em; // top+bottom left+right
  border-radius: 0.5em;

  font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
`

// Button being used as a div with Link
export const NavButton = styled.div`
  display: inline-block;
  padding: 0.5em 1em;

  background: #943E59;
  color: white;
  border-radius: 1em;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: #73003A;
    color: #fff;
  }
`

{/** This is how we can extend a styled component - tbc */}
export const NavButtonSelected = styled(NavButton)`
  background: #000;
  color: #fff;
`

export const NameDescription = styled.div`
  // display: inline-block;
  margin-right: 10px;
  font-size: 2em;
  line-height: 1.2em;
  color: #fccada;

  // to target the 'Link'
  a {
    text-decoration: none;
    color: inherit;
  }

`

export const TopLeft = styled.div`
  position: fixed;
  top: 5vw;
  left: 5vw;
`

export const TopRight = styled.div`
  position: fixed;
  top: 3vw;
  right: 3vw;
  text-align: right;
  max-width: 22%;
  color: #73003A;

  a {
    // color: #8a0146;
    color: #660134;
  }
`

export const BottomLeft = styled.div`
  // Usable for Index component only, bottom + left are redundant. TBC.
  bottom: 3vw;
  left: 3vw;
  width: 30ch;
  max-width: 40%;
`

export const BottomRight = styled.div`
  position: fixed;
  bottom: 5vw;
  right: 5vw;
  text-align: right;
  max-width: 22%;
  // color: #fccada;
  color: #73003A;

  a {
    // color: #8a0146;
    color: #660134;
  }
`

export const AvatarImage = styled.img`
  animation: rotateImage 14s linear infinite;
  height: 34.5px;
  margin-right: 10px;

  @keyframes rotateImage {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &:hover {
    animation-play-state: paused;
    // missing scaling
  }
`

{/** Project pages */}
export const ProjectContainer = styled.div`
  top: 5vw;
  left: 5vw;
  width: 100vw;
  height: 100vh;
  background: mediumpurple;
  padding: 10px;
`
