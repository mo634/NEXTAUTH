import React from 'react'
import { MdError } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
interface formSuccessProps {
    message: string
}
const FormSuccess = ({ message }: formSuccessProps) => {
    if (!message) return null
    return (
        <div className=' p-2 flex bg-emerald-500/15 items-center rounded-md text-emerald-500'>
            <FaRegCheckCircle className='mr-2' />
            <p>{message}</p>
        </div>
    )
}

export default FormSuccess