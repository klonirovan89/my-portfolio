import React, { useState } from 'react'

import { Menu } from '../menu'
import { S } from '../HeaderMenu_Styles'

export const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={open} onClick={() => setOpen(!open)}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={open} onClick={() => setOpen(!open)}>
        <Menu />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  )
}
