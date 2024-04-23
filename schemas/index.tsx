
//  schema validation for login

import * as  z from "zod"

const loginSchema = z.object({
    email: z.string().email(),
    password : z.string()
})