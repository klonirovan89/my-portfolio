import React from 'react'
import Typewriter from 'typewriter-effect'
import photo from './../../../assets/images/myPhoto.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Container } from '../../../components/Container'
import Tilt from 'react-parallax-tilt'

import { S } from './Main_Styles'

export const Main: React.FC = () => {
  return (
    <S.Main id={'home'}>
      <Container>
        <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>
              I am <span>Pavel Shcherbachenko</span>
            </S.Name>
            <S.MainTitle>
              <p>A Web Developer.</p>
              <Typewriter
                options={{
                  strings: ['A Web Developer.', 'A Frontend Developer.'],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                }}
              />
            </S.MainTitle>
          </div>
          <S.PhotoWrapper>
            <Tilt tiltEnable={false} scale={1.1} transitionSpeed={2500}>
              <S.Photo src={photo} alt="" />
            </Tilt>
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  )
}
