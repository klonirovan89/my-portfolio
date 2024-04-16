import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { S } from '../../layout/sections/contacts/Contacts_Styles'

export const TextField = forwardRef<HTMLInputElement, PropsType>(
  ({ errorMessage, ...rest }, ref) => {
    return (
      <>
        <S.Field required errorMessage={!!errorMessage} ref={ref} {...rest} />
        {!!errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      </>
    )
  }
)

export type TextFiledProps = {
  as?: string
  errorMessage?: string
  placeholder: string
} & ComponentPropsWithoutRef<'input'>

type PropsType = TextFiledProps & Omit<ComponentPropsWithoutRef<'input'>, keyof TextFiledProps>
