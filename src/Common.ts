import { theme } from './styles/Theme'

type FontPropsType = {
  family?: string
  weight?: number
  color?: string
  lineHeight?: number
  Fmin?: number
  Fmax?: number
}

export const font = ({ family, weight, lineHeight, color, Fmin, Fmax }: FontPropsType) => `
    font-family: ${family || 'Poppins'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || 1.2};
    font-size: calc((100vw - 360px)/(2200 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`
