import React from 'react'
import { Logo } from '../../components/Logo'
import { Container } from '../../components'
import { FlexWrapper } from '../../components'
import { MobileMenu } from './headerMenu/mobileMenu'
import { S } from './Header_Styles'
import { DesktopMenu } from './headerMenu/desktopMenu'

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth)
  const breakpoint = 768

  React.useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify={'space-between'} align={'center'}>
          <Logo />
          {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
        </FlexWrapper>
      </Container>
    </S.Header>
  )
}
