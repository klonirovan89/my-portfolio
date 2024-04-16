import React from 'react'

import { Menu } from '../menu'
import { S } from '../HeaderMenu_Styles'

export const DesktopMenu: React.FC = () => {
  return (
    <S.DesktopMenu>
      <Menu />
    </S.DesktopMenu>
  )
}
