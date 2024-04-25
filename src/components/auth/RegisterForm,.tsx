"use client"
import React, { useState, useTransition } from 'react'
import CardWrapper from './CardWrapper'
import { useForm } from 'react-hook-form'
import { LoginSchema, RegisterSchema } from '../../../schemas'
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import FormError from '../FormError'
import FormSuccess from '../FormSuccess'
import { register } from '../../../actions/register'
import Loader from '../Loader'
const RegisterForm = () => {
    // states 

    // define form and link it with zod schema validation 
    const form = useForm<z.infer<typeof LoginSchema>>(
        {
            resolver: zodResolver(RegisterSchema),
            defaultValues: {
                name: "",
                email: "",
                password: ""
            }
        }

    )
    const [isPending, startTransition] = useTransition()

    const [success, setSuccess] = useState<string | null>()
    const [error, setError] = useState<string | null>()

    // create a function to submit the form
    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        startTransition(() => {

            //send form data to server 
            register(values).then((data) => {
                console.log(data)
                setSuccess(data.success)
                setError(data.error)
            })
        })
    }
    return (
        <CardWrapper
            headerLabel="Create your own account"
            backButtonLabel="Already have an account?"
            backButtonHref="/sign-in"
            showSocial
        >
            <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)} className=' flex flex-col gap-3'>
                    <div className="">
                        {/* name item */}
                        <FormField
                            // control={form.control}
                            name="name"
                            render={
                                ({ field }) => (
                                    <FormItem>

                                        {/* {console.log(field)} */}

                                        <FormLabel>name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type='string'
                                                placeholder='Enter Your Name'
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )
                            }
                        >


                        </FormField>
                        {/* email item */}
                        <FormField
                            // control={form.control}
                            name="email"
                            render={
                                ({ field }) => (
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
                                        <FormMessage />
                                    </FormItem>
                                )
                            }
                        >


                        </FormField>
                        {/* password item */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={
                                ({ field }) => (
                                    <FormItem>

                                        {/* {console.log(field)} */}

                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type='password'
                                                placeholder='Enter Your Password'
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )
                            }
                        >


                        </FormField>

                    </div>

                    <FormError message={error} />

                    <FormSuccess message={success} />

                    {
                        isPending ? (
                            <div className=" flex justify-center">
                                <Loader />
                            </div>

                        ) : <Button type="submit" className='mt-2 w-full' size={'lg'}>
                            Register
                        </Button>
                    }


                </form>

            </Form>
        </CardWrapper>
    )
}

export default RegisterForm