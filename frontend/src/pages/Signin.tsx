/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VqEnc9kBs3y
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "../components/ui/Label"
import { Input } from "../components/ui/Input"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"
import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



export function Signin() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function onLogin( email: string, password: string) {

    if (email === "") {
      setError('Email is required')
      return;
    }
    if (!email.endsWith("@gmail.com")) {
      setError("Email should end with @gmail.com");
      return;
    }
    if (password === "") {
      setError('Password is required')
      return;
    }
    if (password.length < 6) {
      setError('Password should be atleast 6 characters')
      return;
    }

    try {
      const response = await axios.post('https://backend.preet-yadav266.workers.dev/api/v1/user/signup', {
        email,
        password,

      })
      localStorage.setItem("token", response.data.token)
      navigate('/')
    }
    catch (e) {
      alert('something went wrong')
    }


  }

  return (
    <div className="w-full gap-10 lg:grid lg:min-h-[600px] lg:grid-cols-2 lg:gap-0 xl:min-h-[900px]">
      <div className="flex items-center justify-center p-6 lg:p-10">
        <div className="mx-auto w-[350px] space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Sign in</h1>
            <p className="text-gray-500 dark:text-gray-400">Enter your email below to signin to your account</p>
          </div>
          <div className="space-y-4">


            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input onChange={(e) => {
                setEmail(e.target.value)
              }} id="email" placeholder="m@example.com" required type="email" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <p className="ml-auto inline-block text-sm underline" >
                  Forgot your password?
                </p>
              </div>
              <Input onChange={(e) => {
                setPassword(e.target.value)
              }} id="password" required type="password" />
            </div>
            <div className="mt-1 text-sm text-red-500 whitespace-nowrap text-error">{error}</div>
            <Button onClick={
              async () => {
                onLogin( email, password)

              }
            }
              className="w-full" type="submit">
              Login
            </Button>

          </div>
          <div className="mt-4 text-center text-sm">
            Have an account?
            <Link className="underline" to="/signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="items-center justify-center p-6  lg:flex lg:bg-gray-100 lg:p-10 dark:lg:bg-gray-800">
        <div className="mx-auto grid max-w-[350px] gap-3 lg:max-w-[500px]">
          <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
            “The customer service I received was exceptional. The support team went above and beyond to address my
            concerns.“
          </blockquote>
          <div>
            <div className="font-semibold">Jules Winnfield</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Inc</div>
          </div>
        </div>
      </div>
    </div>
  )
}

