/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xSNx6yhrEEe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {Link} from "react-router-dom"
import MediumLogo from "../images/Medium_(website)_logo.svg"
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function Blog() {
  const { id } = useParams();
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')

  useEffect( () => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://backend.preet-yadav266.workers.dev/api/v1/blog/${id}`,{
          headers: {Authorization : localStorage.getItem('token')}
        })
        setTitle(response.data.blog.title)
        setContent(response.data.blog.content)
        setAuthor(response.data.blog.author.name)
      }
      catch (error) {
        console.error('Error fetching blog:', error);
      }
    }
    fetchData();
  }
  , [id])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between p-4 ">
        <img src={MediumLogo} className="flex justify-start w-36 "></img>
        <Link className="px-4 py-2 text-white bg-green-500 rounded" to={"/"}>
          Back
        </Link>
      </header>
      <main className="flex flex-col items-center justify-center p-8 md:p-16 bg-gray-100 dark:bg-gray-900 flex-1">
        <header className="w-full max-w-3xl mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">{title}</h1>
          <div className="mt-2 text-gray-600 dark:text-gray-400">{author}</div>
        </header>
        <article className="w-full text-xl text-gray-600 max-w-3xl prose prose-lg prose-gray dark:prose-invert shadow-lg rounded-lg p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
          {content}
      </article>
      </main>
    </div>
  )
}

