import React from 'react'
import { Logo } from '../../components/Logo/Logo'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'

import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu'
import { S } from './Header_Styles'
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu'

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

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
          {width < breakpoint ? (
            <MobileMenu menuItems={items} />
          ) : (
            <DesktopMenu menuItems={items} />
          )}
        </FlexWrapper>
      </Container>
    </S.Header>
  )
}
