import React from 'react'
import { Icon } from '../Icon/Icon'
import { animateScroll } from 'react-scroll'

export const Logo: React.FC = () => {
  return (
    <a
      onClick={() => {
        animateScroll.scrollToTop()
      }}
    >
      <Icon iconId={'code'} />
    </a>
  )
}
