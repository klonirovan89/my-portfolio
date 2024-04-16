import React from 'react'
import { FlexWrapper } from '../../../components'
import { SectionTitle } from '../../../components'
import { Skill } from './skill'
import { Container } from '../../../components'
import { S } from './skill/Skills_Styles'
import { Fade } from 'react-awesome-reveal'
import { skillsData } from '../../../common/consts'

export const Skills = () => {
  return (
    <S.Skills id={'skills'}>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={'wrap'} justify={'space-around'}>
          <Fade cascade={true} damping={0.05} direction={'up'}>
            {skillsData.map((skill, index) => {
              return <Skill key={index} iconId={skill.iconId} title={skill.title} />
            })}
          </Fade>
        </FlexWrapper>
      </Container>
    </S.Skills>
  )
}
