import { FieldValues, UseControllerProps, useController } from 'react-hook-form'
import { TextField, TextFiledProps } from './TextField'

type Props<T extends FieldValues> = UseControllerProps<T> & TextFiledProps
export const ControlledTextField = <T extends FieldValues>({
  control,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const { field } = useController({
    control,
    name: rest.name,
    shouldUnregister,
  })

  return <TextField {...rest} {...field} />
}
