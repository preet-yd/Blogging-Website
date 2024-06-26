// Code: Home page
import { Blog } from "../components/ui/Blog"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { Link } from "react-router-dom"
import MediumLogo from "../images/blogger-icon.webp"
import { useEffect, useState } from "react";
import axios from "axios"
import { BlogSkelton } from "../components/ui/BlogSkelton"

export function Home() {
  // const id = useId()
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchBlogs = async () => {

      try {
        const response = await axios.get(`https://backend.preet-yadav266.workers.dev/api/v1/blog/bulk`, {
          headers: {
            Authorization: localStorage.getItem('token')
          }
        });
        setBlogs(response.data.blogs);
        setLoading(false)
      } catch (error) {
        // Handle error (e.g., show an error message)
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="px-4 py-6 md:px-6">
        <div className=" space-y-2">
          <div className="flex justify-between">
            <div className="flex  gap-4">
              
              <div className="flex">
                  <img src={MediumLogo} className=" w-10 "></img>
                  <p className="font-bold">logging</p>
                </div>
              <Button className="ml-4" size="sm" variant="outline">
                <Input placeholder="Search" type="text" />
              </Button>

            </div>
            <Link to={"/publish"} className="flex items-center px-4 py-2 text-white bg-green-500 rounded">Create</Link>
            {/* <Button color="bg-green-200">Create</Button> */}
          </div>
          <p className=" text-gray-500  dark:text-gray-400">
            Thoughts, stories and ideas. Grab a cup of coffee and read the latest.
          </p>
        </div>
        <div className="flex-col  pt-20 ">
          <BlogSkelton />
          <BlogSkelton />
          <BlogSkelton />
          <BlogSkelton />
          <BlogSkelton />
        </div>
      </div>
    )
  }
  else {
    return (

      <div className="px-4 py-6 md:px-6 ">
        <div className=" space-y-6">
          <div className=" space-y-2">
            <div className="flex justify-between">
              <div className="flex gap-4">
                
                <div className="flex">
                  <img src={MediumLogo} className=" w-10 "></img>
                  <p className="font-bold">logging</p>
                </div>
                <Button className="ml-4" size="sm" variant="outline">
                  <Input placeholder="Search" type="text" />
                </Button>

              </div>
              <Link to={"/publish"} className="flex items-center px-4 py-2 text-white bg-green-500 rounded">Create</Link>
              {/* <Button color="bg-green-200">Create</Button> */}
            </div>
            <p className=" text-gray-500  dark:text-gray-400">
              Thoughts, stories and ideas. Grab a cup of coffee and read the latest.
            </p>
          </div>

          <div className="flex pt-12 space-y-4">
            <div className="grid md:grid-cols-1 md:gap-4 ">
              {blogs.map((blog: any) => {
                return <Blog key={blog.id} id={blog.id} author={blog.author.name} title={blog.title} content={blog.content} publishDate={blog.publishDate} />
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
}

