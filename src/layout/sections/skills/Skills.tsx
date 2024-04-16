import React from 'react'
import { FlexWrapper } from '../../../components'
import { SectionTitle } from '../../../components'
import { Skill } from './skill'
import { Container } from '../../../components'
import { S } from './skill/Skills_Styles'
import { Fade } from 'react-awesome-reveal'
import { skillsData } from '../../../common/consts'
import Tilt from 'react-parallax-tilt'

export const Skills = () => {
  return (
    <S.Skills id={'skills'}>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={'wrap'} justify={'space-around'}>
          <Fade cascade={true} damping={0.05} direction={'up'}>
            {skillsData.map((skill, index) => {
              return (
                <Tilt tiltEnable={false} scale={1.1} transitionSpeed={2500}>
                  <a href={skill.href} target={'_blank'}>
                    <Skill key={index} iconId={skill.iconId} title={skill.title} />
                  </a>
                </Tilt>
              )
            })}
          </Fade>
        </FlexWrapper>
      </Container>
    </S.Skills>
  )
}
