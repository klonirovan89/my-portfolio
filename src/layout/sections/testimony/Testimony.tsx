import React from 'react'

import { SectionTitle } from '../../../components'
import { Icon } from '../../../components/Icon'
import { Slider } from '../../../components/slider'
import { FlexWrapper } from '../../../components'
import { Container } from '../../../components'
import { S } from '../skills/skill/Skills_Styles'
import { C } from './Testimony_Styles'

export const Testimony: React.FC = () => {
  return (
    <C.Testimony id={'testimony'}>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper direction={'column'} align={'center'}>
          <S.IconWrapper>
            <Icon iconId={'quote'} />
          </S.IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </C.Testimony>
  )
}
