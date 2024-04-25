import React from 'react'
import { MdError } from "react-icons/md";
interface formErrorProps {
    message:string
}
const FormError = ({message}:formErrorProps) => {
    if(!message)return null
    return(
        <div className=' p-2 flex bg-destructive/15 items-center rounded-md text-red-500'>
            <MdError className='mr-2' />
            <p>{message}</p>
        </div>
    )
}

export default FormError