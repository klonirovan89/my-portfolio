import React from 'react'

import { Link } from '../../../../components'
import { S } from './TabMenu_Styles'
import { TabsItemsType, TabsStatusType } from '../../../../common/consts'

type PropsType = {
  tabsItems: TabsItemsType
  setCurrentFilterStatus: (value: TabsStatusType) => void
  currentFilterStatus: string
}

export const TabMenu: React.FC<PropsType> = (props: PropsType) => {
  return (
    <S.TabMenu>
      <ul>
        {props.tabsItems.map((item, index) => {
          return (
            <S.ListItem key={index}>
              <Link
                active={props.currentFilterStatus === item.status}
                as={'button'}
                onClick={() => {
                  props.setCurrentFilterStatus(item.status)
                }}
              >
                {item.title}
              </Link>
            </S.ListItem>
          )
        })}
      </ul>
    </S.TabMenu>
  )
}
