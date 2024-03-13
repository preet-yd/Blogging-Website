import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

interface BlogProps {
  author: string,
  title: string;
  content: string,
  publishDate: string,
}
export function Blog3({ author, title, content, publishDate }: BlogProps) {


  return (
    <Link className="group p-4 rounded-lg border-b hover:shadow-card transform transition-transform" to={""}>

      <div className="container py-8 space-y-12 md:space-y-16 lg:space-y-20"></div>


      <div className="grid max-w-4xl grid-cols-1 items-start gap-4 px-4 mx-auto sm:grid-cols-2 md:gap-8 md:max-w-5xl lg:gap-12 xl:gap-16 xl:max-w-6xl">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <div className='flex gap-3'>
              <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
              </div>
              <p> {author}</p>
              <p className="text-gray-500 dark:text-gray-400">Jun 12 ・ 6 min read</p>
            </div>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            {/* content */}
            {content.length > 100 ? content.slice(0, 100) + "..." : content}
          </div>
        </div>
        <div className="mx-auto w-full aspect-video overflow-hidden rounded-lg">
          {/* <img
            alt="Cover image"
            className="object-cover object-center"
            height="337"
            src="/placeholder.svg"
            style={{
              aspectRatio: "600/337",
              objectFit: "cover",
            }}
            width="600"
          /> */}
        </div>
      </div>
    </Link>


  )
}

export default Blog3