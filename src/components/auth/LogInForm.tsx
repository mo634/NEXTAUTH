import React from 'react'
import CardWrapper from './CardWrapper'

const LogInForm = () => {
    return (
        <CardWrapper
        headerLabel="Welcome Back"
        backButtonLabel= "Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
        >
            login form
        </CardWrapper>
    )
}

export default LogInForm