import React, { useRef } from 'react'

import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'
import { S } from './Contacts_Styles'
import emailjs from '@emailjs/browser'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ControlledTextField } from '../../../components/textField/controlled-text-field'

export type FormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  user_name: z.string().min(3).max(30),
  email: z.string().email(),
  subject: z.string().min(3).max(30),
  message: z.string().min(3),
})

export type LoginArgs = {
  user_name: string
  email: string
  subject: string
  message: string
}

export const Contact: React.FC = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      user_name: '',
      email: '',
      subject: '',
      message: '',
    },
    resolver: zodResolver(loginSchema),
  })

  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (data: LoginArgs) => {
    if (!form.current) {
      return
    }
    emailjs
      .sendForm('service_4sy9jl8', 'template_a9i0c1a', form.current, {
        publicKey: 'RQm2LG3-zSQESIsDt',
      })
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    reset()
  }

  return (
    <S.Contacts id={'contact'}>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form ref={form} onSubmit={handleSubmit(sendEmail)}>
          <ControlledTextField
            control={control}
            name={'user_name'}
            placeholder={'name'}
            errorMessage={errors.user_name?.message}
          />
          <ControlledTextField
            control={control}
            name={'email'}
            placeholder={'email'}
            errorMessage={errors.email?.message}
          />
          <ControlledTextField
            control={control}
            name={'subject'}
            placeholder={'subject'}
            errorMessage={errors.subject?.message}
          />
          <ControlledTextField
            control={control}
            name={'message'}
            as={'textarea'}
            placeholder={'message'}
            errorMessage={errors.message?.message}
          />
          <Button type={'submit'}>Send message</Button>
        </S.Form>
      </Container>
    </S.Contacts>
  )
}
