import React, { useState } from 'react'

import { SectionTitle } from '../../../components/SectionTitle'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Work } from './work/Work'
import socialImg from './../../../assets/images/proj-1.png'
import timerImg from './../../../assets/images/proj-2.png'
import { TabMenu, TabsItemsType } from './tabMenu/TabMenu'
import { Container } from '../../../components/Container'
import { S } from './Works_Styles'

const tabsItems: TabsItemsType = [
  {
    title: 'All',
    status: 'all',
  },
  {
    title: 'landing page',
    status: 'landing',
  },
  {
    title: 'React',
    status: 'react',
  },
  {
    title: 'spa',
    status: 'spa',
  },
]

const workData = [
  {
    src: socialImg,
    title: 'Social Network',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    type: 'spa',
  },
  {
    src: timerImg,
    title: 'Timer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    type: 'react',
  },
]

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState('all')

  const filteredWorks = workData.filter(el =>
    currentFilterStatus === 'all' ? el : el.type === currentFilterStatus
  )

  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          currentFilterStatus={currentFilterStatus}
          setCurrentFilterStatus={setCurrentFilterStatus}
        />
        <FlexWrapper justify={'space-around'} align={'flex-start'} wrap={'wrap'}>
          {filteredWorks.map((work, index) => {
            return <Work key={index} src={work.src} title={work.title} text={work.text} />
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  )
}
