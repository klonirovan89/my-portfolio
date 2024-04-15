import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { font } from '../../Common'

const Footer = styled.footer`
  position: relative;
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`

const SocialItem = styled.li``

const SocialLink = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #ffffff1a;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.accent};

  transition: ${theme.animations.transition};

  &:hover {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`

const Name = styled.span`
  ${font({ family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16 })}

  letter-spacing: 3px;
`

const Copyright = styled.small`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  opacity: 0.5;
`

export const S = {
  Footer,
  SocialList,
  SocialItem,
  SocialLink,
  Name,
  Copyright,
}
