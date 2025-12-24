"use client"
import { useFormContext } from 'react-hook-form'

type TProps = {
    name: string,
    label?: string,
    type?: string,
    placeholder?: string,
    validation?: object,
    defaultValue?: string
}

const FormInput = ({label, type, name, placeholder, validation, defaultValue}: TProps) => {
    const {register, formState: {errors}} = useFormContext();
    return (
        <div className="w-full mb-3">
            <label className="block text-header font-semibold text-[16px] mb-2 capitalize">{label ? label : null}</label>
            <input type={type} defaultValue={defaultValue} placeholder={placeholder} className='py-3 text-title px-4 outline-none border border-border-color rounded-xl appearance-none w-full placeholder:select-none' {...register(name, validation || { required: true })} />
            {
                errors[name] && <span className='text-sm text-red-500 select-none'>{typeof errors[name]?.message === 'string' ? errors[name]?.message : "This field is required"}</span>
            }
        </div>
    )
}

export default FormInput;
