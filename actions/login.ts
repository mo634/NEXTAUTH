"use server"

import { validateFieldsNatively } from "@hookform/resolvers"
import { LoginSchema } from "../schemas"
import * as z from "zod"
export const login =async (values:z.infer<typeof LoginSchema>)=>{
    const validCredentials = LoginSchema.safeParse(values)

    // console.log(validCredentials)

    if(validCredentials.success){
        return {

            success:"valid credentials"
        }
    }
    return {
        error:"invalid credentials"
    }
}