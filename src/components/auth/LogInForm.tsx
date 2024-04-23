"use client"
import React from 'react'
import CardWrapper from './CardWrapper'
import { useForm } from 'react-hook-form'
import { LoginSchema } from '../../../schemas'
import * as z from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
const LogInForm = () => {
    // states 

    // define form and link it with zod schema validation 
    const form = useForm<z.infer<typeof LoginSchema>>(
        {
            resolver: zodResolver(LoginSchema),
            defaultValues: {
                email: "",
                password: ""
            }
        }

    )

    // create a function to submit the form
    const onSubmit = (values:z.infer<typeof LoginSchema>) => 
        { console.log(values) }
return (
    <CardWrapper
        headerLabel="Welcome Back"
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
    >
        <Form {...form}>

            <form onSubmit={form.handleSubmit(onSubmit)} className=' flex flex-col gap-3'>
                <div className="">
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
                <Button type="submit" className='mt-2 w-full' size={'lg'}>
                    Login
                </Button>


            </form>

        </Form>
    </CardWrapper>
)
}

export default LogInForm