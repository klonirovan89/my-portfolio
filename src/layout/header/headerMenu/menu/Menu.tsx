import React from 'react'
import { S } from '../HeaderMenu_Styles'
import { headerMenuItems } from '../../../../common/consts'

export const Menu: React.FC = () => {
  return (
    <ul>
      {headerMenuItems.map((item, index) => {
        return (
          <S.MenuItem key={index}>
            <S.NavLink activeClass="active" to={item.href} smooth={true} spy={true}>
              {item.title}
              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>
              <S.Mask>
                <span>{item.title}</span>
              </S.Mask>
            </S.NavLink>
          </S.MenuItem>
        )
      })}
    </ul>
  )
}
