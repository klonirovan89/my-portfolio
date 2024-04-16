import React from 'react'

import { SectionTitle } from '../../../components'
import { Button } from '../../../components'
import { Container } from '../../../components'
import { FlexWrapper } from '../../../components'
import { S } from './Slogan_Styles'

export const Slogan: React.FC = () => {
  return (
    <S.Slogan id={'slogan'}>
      <Container>
        <FlexWrapper direction={'column'} align={'center'}>
          <SectionTitle>Let's get to work</SectionTitle>
          <Button>
            <a href={'https://t.me/klonirovan89'} target={'_blank'}>
              WRITE ME
            </a>
          </Button>
        </FlexWrapper>
      </Container>
    </S.Slogan>
  )
}
