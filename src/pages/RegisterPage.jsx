import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { signup, isAuthenticated } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/bets')
    }
  }, [isAuthenticated])



  const onSubmit = handleSubmit((values) => {
    signup(values)
  })

  return (

    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">

        <h1 className="text-2xl font-bold">User Register</h1>

        <form onSubmit={onSubmit}>
          <input type="text" {...register('username', { required: true })}
            className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
            placeholder='Username' />
          {errors.username && <p className="text-red-500">Username is required</p>}

          <input type="text" {...register('email', { required: true })}
            className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
            placeholder='Email' />
          {errors.email && <p className="text-red-500">Email is required</p>}

          <input type="text" {...register('password', { required: true })}
            className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
            placeholder='Password' />
          {errors.password && <p className="text-red-500">Password is required</p>}

          <input type="text" {...register('phone')}
            className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
            placeholder='Phone' />

          <button type='submit'>
            Register
          </button>
        </form>

        <p className="flex gap-x-2 justify-between">Already have an account? <Link to='/login' className="text-sky-500">Sign In</Link> </p>
      </div>
    </div>
  )
}

export default RegisterPage