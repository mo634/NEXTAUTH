"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

interface ButtonProps {
    children: React.ReactNode
}

const LoginButton = ({ children }: ButtonProps) => {
    //states 

    const router = useRouter()

    //funcs
    const handleClick = () => {
        router.push(
            "auth/sign-in"
        )
    }
    return (
        <span
            className='cursor-pointer '
            onClick={handleClick}>
            {children}
        </span>
    )
}

export default LoginButton