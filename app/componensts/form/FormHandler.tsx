/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { FormProvider, useForm } from 'react-hook-form'

type TProps = {
  children: React.ReactNode,
  onSubmit: (data: any) => void
}

const FormHandler = ({children, onSubmit}: TProps) => {
    const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

export default FormHandler;
