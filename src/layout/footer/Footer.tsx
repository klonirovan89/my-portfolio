import React from 'react'

import { Icon } from '../../components/Icon'
import { FlexWrapper } from '../../components'
import { S } from './Footer_Styles'
import { footerMenuItems } from '../../common/consts'

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <FlexWrapper direction={'column'} align={'center'}>
        <S.Name>Pavel Shcherbachenko</S.Name>
        <S.SocialList>
          {footerMenuItems.map((item, index) => {
            return (
              <S.SocialItem key={index}>
                <S.SocialLink href={item.href} target={'_blank'} key={index}>
                  <Icon
                    key={index}
                    iconId={item.iconId}
                    height={'21'}
                    width={'21'}
                    viewBox={'0 0 21 21'}
                  />
                </S.SocialLink>
              </S.SocialItem>
            )
          })}
        </S.SocialList>
        <S.Copyright>© 2023 Pavel Shcherbachenko, All Rights Reserved.</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  )
}
