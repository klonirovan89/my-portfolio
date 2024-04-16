import styled from 'styled-components'
import { Button } from '../../../components'
import { theme } from '../../../styles/Theme'
import { Link } from '../../../components'
import { FlexWrapper } from '../../../components'

//Works

const Works = styled.section`
  position: relative;

  ${FlexWrapper} {
    gap: 30px;
  }
`

//Work

const Work = styled.div`
  background-color: ${theme.colors.secondaryBg};

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    z-index: 0;
    transition: ${theme.animations.transition};

    &::before {
      z-index: -1;
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #0000004d;
    backdrop-filter: blur(2px);
    opacity: 0;

    transition: ${theme.animations.transition};
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Description = styled.div`
  padding: 25px 20px;
`

const Title = styled.h3`
  color: ${theme.colors.accent};
`

const Text = styled.p`
  margin: 14px 0 10px;
`

export const S = {
  Works,
  Work,
  ImageWrapper,
  Image,
  Description,
  Title,
  Text,
}
