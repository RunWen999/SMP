import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message: 'Too short'}),
    username: z.string().min(2, {message: 'Too short'}),
    email: z.string().email(),
    password: z.string().min(8, {message: 'Must be more than 8'}),
  })

  export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message: 'Must be more than 8'}),
  })

  export const PostValidation = z.object({
    caption: z.string().max(2200),
    file: z.custom<File[]>(),
    location: z.string().max(100),
    tags: z.string(),
  })