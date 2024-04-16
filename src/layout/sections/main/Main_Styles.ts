import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import { font } from '../../../Common'

const Main = styled.section`
  min-height: 100vh;
  background: #1f1f20;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin: 65px 0;

  &::before {
    content: '';
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: -20px;
    left: 24px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 300px;
      height: 403px;
      top: -11px;
      left: 20px;
    }
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;
  cursor: pointer;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`

const TextWrapper = styled.div``

const MainTitle = styled.h1`
  width: 100%;
  padding-bottom: 10px;
  text-align: justify;

  ${font({ weight: 400, Fmax: 27, Fmin: 20 })}

  p {
    display: none;
  }
`

const Name = styled.h2`
  ${font({ family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 26 })}
  letter-spacing: 0.05em;
  margin: 10px 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;

  span {
    position: relative;
    z-index: 0;
  }

  @media ${theme.media.mobile} {
    margin: 10px 0 10px 0;
  }
`

const SmallText = styled.h2`
  ${font({ family: "'Josefin Sans', sans-serif", weight: 400, Fmax: 20, Fmin: 14 })}
`

export const S = {
  Main,
  PhotoWrapper,
  Photo,
  MainTitle,
  Name,
  SmallText,
  TextWrapper,
}
