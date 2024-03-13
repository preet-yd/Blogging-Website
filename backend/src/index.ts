import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

import { Hono } from 'hono'
import { jwt, sign } from 'hono/jwt';
import { cors } from 'hono/cors'

import { userRouter } from './routes/userRoutes';
import { blogRouter } from './routes/blogRoutes';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>();
app.use('/api/*', cors())
app.route("/api/v1/user",userRouter)
app.route("/api/v1/blog",blogRouter)




export default app
