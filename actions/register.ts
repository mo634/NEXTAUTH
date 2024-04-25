"use server"

import { validateFieldsNatively } from "@hookform/resolvers"
import { RegisterSchema } from "../schemas"
import * as z from "zod"
import Register from "@/app/(auth)/register/page"
export const register =async (values:z.infer<typeof RegisterSchema>)=>{
    const validCredentials = RegisterSchema.safeParse(values)

    // console.log(validCredentials)

    if(validCredentials.success){
        return {
            success:"register success"
        }
    }
    return {
        error:"register failed"
    }
}