import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header className=' bg-slate-600 shadow-md'>
        <div className='flex justify-between  items-center max-w-5xl mx-auto p-4'>
        <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className=' text-red-50'>Dream</span>
                <span className=' text-slate-400'>Homes</span>
            </h1>
        </Link>
        <form className=' bg-slate-100 p-1 rounded-xl flex items-center'>
            <input type='text' placeholder='Search' className=' bg-transparent focus:outline-none w-24 sm:w-64 p-1'/>
            <FaSearch className=' mr-2'/>
        </form>
        <ul className=' flex gap-4 items-center p-2'>
            <Link to='/'>
                <li className=' text-red-50 hidden sm:inline hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
                <li className=' text-red-50 hidden sm:inline hover:underline'>About</li>
            </Link>
            <Link to='/sign-in'>
                <li className=' text-red-50 hover:underline'>Signin</li>
            </Link>
        </ul>
        </div>
    </header>
  )
}
