import React, { useState } from 'react'

import { Menu } from '../menu/Menu'
import { S } from '../HeaderMenu_Styles'

export const MobileMenu: React.FC<{ menuItems: string[] }> = (props: { menuItems: string[] }) => {
  const [open, setOpen] = useState(false)

  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={open} onClick={() => setOpen(!open)}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuPopup isOpen={open} onClick={() => setOpen(!open)}>
        <Menu menuItems={props.menuItems} />
      </S.MobileMenuPopup>
    </S.MobileMenu>
  )
}
