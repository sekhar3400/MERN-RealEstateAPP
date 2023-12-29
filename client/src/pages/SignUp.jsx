import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='flex flex-col max-w-lg mx-auto mt-4'>
      <h1 className=' text-slate-800 font-bold text-xl sm:text-2xl self-center'>Sign Up</h1>
      <form action="" className='flex flex-col py-2'>
        <input id='name' type="text" placeholder='name' className='broder rounded-md mt-3 p-2'/>
        <input id='email' type="email" placeholder='email' className='border rounded-md mt-3 p-2' />
        <input id='password' type="password" placeholder='password' className='border rounded-md mt-3 p-2' />
        <button className=' text-white bg-slate-500 rounded-md mt-3 p-2  uppercase'>Sign Up</button>
      </form>
      <div className='flex gap-2 text-sm'>
        <p>Have an account?</p>
        <Link className=' text-blue-700' to='/sign-in'>Sign in</Link>
      </div>
      


    </div>
  )
}
