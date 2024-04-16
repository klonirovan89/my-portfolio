import React from 'react'
import { Icon } from '../Icon'
import { animateScroll } from 'react-scroll'
import styled from 'styled-components'

export const Logo: React.FC = () => {
  return (
    <a
      onClick={() => {
        animateScroll.scrollToTop()
      }}
    >
      <Wrapper>
        <Icon iconId={'code'} />
      </Wrapper>
    </a>
  )
}

const Wrapper = styled.div``
