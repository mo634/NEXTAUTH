"use client"
import React from 'react'
import CardWrapper from './CardWrapper'
import { useForm } from 'react-hook-form'
import { LoginSchema } from '../../../schemas'
import * as z from "zod"
import  {zodResolver}  from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
const LogInForm = () => {
    // states 

    // define form and link it with zod schema validation 
    const form = useForm<z.infer<typeof LoginSchema>>(
        {
            resolver: zodResolver(LoginSchema),
            defaultValues:{
                email: "",
                password:""
            }
        }

    )
    return (
        <CardWrapper
        headerLabel="Welcome Back"
        backButtonLabel= "Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
        >
            <Form {...form}>

                <form onSubmit={form.handleSubmit(()=>{})}>
                    {/* email item */}
                    <FormField
                    control={form.control}
                    name="email"
                    render={
                        ({field})=>(
                            <FormItem>
                                
                                {/* {console.log(field)} */}

                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input 
                                    {...field}
                                    type='email'
                                    placeholder='Enter Your Email'
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )
                    }
                    >
                        

                    </FormField>
                </form>

            </Form>
        </CardWrapper>
    )
}

export default LogInForm