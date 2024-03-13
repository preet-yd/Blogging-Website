import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

import { Hono } from 'hono';
import { jwt, sign, verify } from 'hono/jwt';

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL : string,
        JWT_SECRET :string
    },
    
}>;

// userRouter.use("/*", async (c, next) => {
  
// });

userRouter.post('/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();
  try{
    const user = await prisma.user.create({
      data:{
        email: body.email,
        password: body.password,
        name: body.name
      }
    })
    const token = await sign ({id : user.id},c.env.JWT_SECRET)
    return c.json({token})

  }
  catch(e){
    c.status(403)
    return c.json({msg : "error while signing up"})
  }
})

userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json()

  const user = await prisma.user.findFirst({
    where:{
      email : body.email,
      password: body.password
    }
  })
  // console.log(user)
  if(!user){
    c.status(403);
    return c.json({msg : "invalid credentials"})
  }
  const token = await sign ({id : user.id},c.env.JWT_SECRET)
  return c.json({token})

})
