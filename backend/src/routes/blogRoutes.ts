import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

import { Hono } from 'hono';
import { jwt, sign, verify } from 'hono/jwt';

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
  Variables: {
    userId: string
  }
}>;

blogRouter.use("/*", async (c, next) => {
  const headers = c.req.header("authorization") || '';
  const user = await verify(headers, c.env.JWT_SECRET);
  // console.log(user)
  if (user) {
    c.set("userId", user.id);
    await next();
  } else {
    c.status(403);
    return c.json({ msg: "token not present" });
  }
});

blogRouter.post('/', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const blogBody = await c.req.json(); // Await the promise
    // console.log(c.get("userId"))
    const authorID = c.get("userId")
    const blog = await prisma.post.create({
      data: {
        title: blogBody.title,
        content: blogBody.content,
        authorId: authorID
      }
    })
    return c.json({ msg: "blog created successfully" })
  }
  catch (e) {
    c.status(403)
    return c.json({ msg: "blog was not created" })
  }
})

blogRouter.put('/', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const authorID = c.get("userId")
  try {
    const body = await c.req.json()
    const updates = await prisma.post.update({
      where: {
        id: body.id,
        authorId: authorID
      },
      data: {
        title: body.title,
        content: body.content
      }
    })
    return c.json({ msg: "blog was updated" })
  }
  catch (e) {
    c.status(403)
    return c.json({ msg: "blog was not updated" })
  }
})

blogRouter.get('/bulk', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const blogs = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true
          }
        }
      }
    })
    return c.json({ blogs })
  }
  catch(e){
    console.log(e)
    c.status(404)
    return c.json({msg : "couldn't find all the blogs"})
  }

  
})

blogRouter.get('/:id', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const params = c.req.param('id')
  try {
    const blog = await prisma.post.findUnique({
      where: {
        id: params
      },
      select: {
        title : true,
        content : true,
        author : {
          select : {
            name : true
          }
        }
      }
    })
    return c.json({ blog })
  }
  catch (e) {
    console.error({"error is" : e})
    c.status(411)
    return c.json({ msg: "some error occured while getting the blog" })
  }
})