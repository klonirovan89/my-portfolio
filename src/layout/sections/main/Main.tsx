import React from 'react'
import Typewriter from 'typewriter-effect'
import photo from './../../../assets/images/myPhoto.webp'
import { FlexWrapper } from '../../../components'
import { Container } from '../../../components'
import Tilt from 'react-parallax-tilt'

import { S } from './Main_Styles'

export const Main: React.FC = () => {
  return (
    <S.Main id={'home'}>
      <Container>
        <FlexWrapper align={'center'} justify={'center'} wrap={'wrap'}>
          <S.PhotoWrapper>
            <Tilt tiltEnable={false} scale={1.1} transitionSpeed={2500}>
              <S.Photo src={photo} alt="" />
            </Tilt>
          </S.PhotoWrapper>
          <div>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>
              I'm <span>Pavel Shcherbachenko!</span>
            </S.Name>
            <S.MainTitle>
              <Typewriter
                options={{
                  strings: ['A Web Developer.', 'A Frontend Developer.'],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                }}
              />
            </S.MainTitle>
            <S.MainTitle>
              I'm frontend developer with experience in creating SPA using React, Redux,
              redux-Toolkit, Axios, React-Router-Dom, TypeScript, JavaScript, SCSS, HTML. I am
              enthusiastic team player focused on personal growth. Now I am improving my skills in
              this direction and expanding them with new technologies.
            </S.MainTitle>
          </div>
        </FlexWrapper>
      </Container>
    </S.Main>
  )
}
