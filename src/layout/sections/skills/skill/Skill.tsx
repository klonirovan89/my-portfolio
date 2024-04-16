import React from 'react'

import { Icon } from '../../../../components/Icon'
import { FlexWrapper } from '../../../../components'
import { S } from './Skills_Styles'

type PropsType = {
  iconId: string
  title: string
}

export const Skill = (props: PropsType) => {
  return (
    <S.Skill>
      <FlexWrapper direction={'column'} align={'center'}>
        <S.IconWrapper>
          <Icon iconId={props.iconId} />
        </S.IconWrapper>
        <S.SkillTitle>{props.title}</S.SkillTitle>
      </FlexWrapper>
    </S.Skill>
  )
}
