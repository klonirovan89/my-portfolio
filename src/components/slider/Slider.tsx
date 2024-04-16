import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './../../styles/slider.css'
import { S } from './Slider_Styles'
import { itemsSlider } from '../../common/consts'

type SlidePropsType = {
  text: string
  userName: string
}

const Slide: React.FC<SlidePropsType> = (props: SlidePropsType) => {
  return (
    <S.Slide>
      <S.Text>{props.text}</S.Text>
      <S.Name>{props.userName}</S.Name>
    </S.Slide>
  )
}

const items = itemsSlider.map(el => {
  return <Slide text={el.text} userName={el.userName} />
})

export const Slider: React.FC = () => (
  <S.Slider>
    <AliceCarousel
      autoPlay
      autoPlayInterval={1500}
      infinite
      disableButtonsControls
      mouseTracking
      items={items}
    />
  </S.Slider>
)
