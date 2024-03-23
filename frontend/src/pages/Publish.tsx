/**
 * v0 by Vercel.
 * @see https://v0.dev/t/D7YfmCbEmDu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/Button"
import MediumLogo from "../images/Medium_(website)_logo.svg"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export function Publish() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-3xl mx-auto pt-10 px-4">
      <img src={MediumLogo} className=" w-36 p-3"></img>
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center space-x-4">
            <div className="space-y-1">
              <label className="sr-only" htmlFor="title">
                Title
              </label>
              <input
              onChange={(e) => {
                setTitle(e.target.value)
              }}
                className="border-0 font-bold text-3xl focus:ring-0 h-[1.5em] p-0"
                id="title"
                placeholder="Title"
                type="text"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400">Add a title to your story</p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="space-y-1">
              <label className="sr-only" htmlFor="content">
                Content
              </label>
              <textarea
              onChange={(e) => {
                setContent(e.target.value)
              }}
                className="border-0 resize-none w-full min-h-[200px] font-serif text-base"
                id="content"
                placeholder="Start writing..."
                style={{
                  "--tw-ring-color": "transparent",
                } as React.CSSProperties}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center space-x-4">
          <Link to={"/"}>
            Back to home
          </Link>
          <Button onClick={
            async () => {
              const response = await axios.post('https://backend.preet-yadav266.workers.dev/api/v1/blog', {
                title,
                content
              }, {
                headers: {
                  Authorization: localStorage.getItem('token')
                }
              })
              console.log(response)
              navigate('/')
            }
          } size="lg">Publish</Button>
        </div>
      </div>
    </div>
  )
}

