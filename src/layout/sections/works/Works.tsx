import React, { useState } from 'react'

import { SectionTitle } from '../../../components'
import { FlexWrapper } from '../../../components'
import { Work } from './work'
import { TabMenu } from './tabMenu'
import { Container } from '../../../components'
import { S } from './Works_Styles'
import { AnimatePresence, motion } from 'framer-motion'
import { tabsItems, worksData } from '../../../common/consts'

export const Works: React.FC = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState('all')

  const filteredWorks = worksData.filter(el =>
    currentFilterStatus === 'all' ? el : el.type === currentFilterStatus
  )

  return (
    <S.Works id={'works'}>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu
          tabsItems={tabsItems}
          currentFilterStatus={currentFilterStatus}
          setCurrentFilterStatus={setCurrentFilterStatus}
        />
        <FlexWrapper justify={'space-around'} align={'flex-start'} wrap={'wrap'}>
          <AnimatePresence>
            {filteredWorks.map(work => {
              return (
                <motion.div
                  key={work.id}
                  style={{ maxWidth: '540px', width: '400px', flexGrow: 1 }}
                  id={work.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  layout
                >
                  <Work
                    demo={work.demo}
                    key={work.id}
                    src={work.src}
                    title={work.title}
                    text={work.text}
                    href={work.href}
                  />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </S.Works>
  )
}
