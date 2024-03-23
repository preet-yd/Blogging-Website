
import { Link } from "react-router-dom"

interface BlogProps {
  id: string,
  author: string,
  title: string;
  content: string,
  publishDate: string,
}
export function Blog({id, author, title, content, publishDate }: BlogProps) {


  return (
    <Link className="group p-4 rounded-lg border-b hover:shadow-card transform transition-transform" to={`/blog/${id}`}>

      <div className="space-y-2">
        <p className="text-sm font-medium tracking-wide uppercase text-gray-500 dark:text-gray-400">Article</p>
        <h2 className="text-2xl font-bold leading-tight group-hover:underline">
          {title}
        </h2>
        <p className="text-gray-500 dark:text-gray-400">{content.length > 100 ? content.slice(0, 100) + "..." : content}</p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="pt-3 flex items-center space-x-2">
          <div className=" relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
          </div>
          <div className="space-y-0.5">
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{publishDate}</p>
          </div>
        </div>
      </div>
    </Link>



  )
}

export default Blog