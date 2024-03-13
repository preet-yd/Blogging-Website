// Code: Home page
import { Blog } from "../components/ui/blog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import MediumLogo from "../images/Medium_(website)_logo.svg"
import { useEffect, useId, useState } from "react";
import axios from "axios"
import { BACKEND_URL } from "./config"

export function Home() {
  // const id = useId()
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get(`http://127.0.0.1:8787/api/v1/blog/bulk`, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((response) => {
      setBlogs(response.data.blogs)
    })
  }, [])
  return (

    <div className="px-4 py-6 md:px-6 ">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex gap-4">
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
            </div>
            <img src={MediumLogo} className=" w-36 "></img>
            <Button className="ml-4" size="sm" variant="outline">
              <Input placeholder="Search" type="text" />
            </Button>
          </div>
          <p className=" text-gray-500  dark:text-gray-400">
            Thoughts, stories and ideas. Grab a cup of coffee and read the latest.
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid md:grid-cols-1 md:gap-4">
            {blogs.map((blog: any) => {
              return <Blog key={blog.id} author={blog.author.name} title={blog.title} content={blog.content} publishDate={blog.publishDate} />
            })}
            {/* <Blog author="Preet" title="6 Legit Apps To Make Truly Passive Income By Having Your Computer Turned On." content="Discover how to earn passive income by simply leaving your computer running. Here are six methods that can help you monetize your idle computer time." publishDate="20 nov" />
            <Blog author="Preet" title="A Definitive Guide to Using BigQuery Efficiently" content="Make the most out of your BigQuery usage, burn data rather than money to create real value with some practical techniques. — · 📝 Introduction · 💎 BigQuery basics and understanding costs ∘ Storage ∘ " publishDate="20 nov" />
            <Blog author="Preet" title="can we do this" content="essssssssssssss we can " publishDate="20 nov" />
            <Blog author="Preet" title="can we do this" content="essssssssssssss we can " publishDate="20 nov" /> */}
          </div>
        </div>
      </div>
      <footer className="border-t border-gray-200 py-12 text-center dark:border-gray-800">
        <div className="container flex flex-col items-center justify-center gap-4">
          <nav className="flex items-center space-x-4">
            <Link className="underline" to={""}>
              About
            </Link>
            <Link className="underline" to={""}>
              Write
            </Link>
            <Link className="underline" to={""}>
              Help
            </Link>
            <Link className="underline" to={""}>
              Legal
            </Link>
            <Link className="underline" to={""}>
              Contact
            </Link>
          </nav>
          <div className="text-sm text-gray-500 dark:text-gray-400">© 2023 Medium. All rights reserved.</div>
        </div>
      </footer>
    </div>

  )
}

