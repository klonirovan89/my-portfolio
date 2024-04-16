import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'

//Skills

const Skills = styled.section`
  position: relative;
`

//Skill

const Skill = styled.div`
  flex-grow: 1;
  width: 210px;
  padding: 42px 20px 52px;

  @media ${theme.media.mobile} {
    padding: 40px 0 40px;
  }
`

const IconWrapper = styled.div`
  position: relative;
  display: flex;

  &::before {
    position: absolute;
    content: '';
    display: inline-block;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(45deg) translate(-50%, -50%);
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`

const SkillTitle = styled.h3`
  margin: 50px 0 15px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`

export const S = {
  Skills,
  Skill,
  IconWrapper,
  SkillTitle,
}
