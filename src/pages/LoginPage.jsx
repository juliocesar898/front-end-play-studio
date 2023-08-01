import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function LoginPage() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { signin, isAuthenticated } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile')
    }
  }, [isAuthenticated])

  const onSubmit = handleSubmit((values) => {
    signin(values);
  })

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

        <h1 className="text-2xl font-bold">Login</h1>

        <form onSubmit={onSubmit}>
          <input type="text" {...register('email', { required: true })}
            className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
            placeholder='Email' />
          {errors.email && <p className="text-red-500">Email is required</p>}

          <input type="text" {...register('password', { required: true })}
            className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
            placeholder='Password' />
          {errors.password && <p className="text-red-500">Password is required</p>}

          <button type='submit'>
            Login
          </button>
        </form>

        <p className="flex gap-x-2 justify-between">Don't have an account? <Link to='/register' className="text-sky-500">Sign Up</Link> </p>

      </div>
    </div>
  )
}

export default LoginPage