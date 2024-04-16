import React from 'react'

import { Link } from '../../../../components'
import { Button } from '../../../../components'
import { S } from '../Works_Styles'

type WorkPropsType = {
  title: string
  text: string
  src: string
  href: string
  demo: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  return (
    <S.Work>
      <S.ImageWrapper>
        <S.Image src={props.src} alt="" />
        <Button>
          <a target="_blank" href={props.href}>
            View project
          </a>
        </Button>
      </S.ImageWrapper>
      <S.Description>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <Link target="_blank" active href={props.demo}>
          demo
        </Link>
        <Link target="_blank" href={props.href}>
          code
        </Link>
      </S.Description>
    </S.Work>
  )
}
