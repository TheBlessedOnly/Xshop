"use client"
import Link from 'next/link'
import Image from 'next/image'
import {  Grid2X2, Heart, LayoutGrid, Search, ShoppingCart, User } from 'lucide-react'
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

function Header() {
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const input = e.currentTarget.input.value;
    router.push(`/search?q=$(input)`)
  }
  return (
    <header className='flex flex-col md:flex-row bg-xshop px-10 py-7 space-x-5 items-center'>
      <Link href="/" className='mb-5 md:mb-0'>
        <Image 
        src ="https://i.imgur.com/5V4wehM.png"
        alt="Logo"
        width={150}
        height={150}/>
      </Link>

      <form onSubmit={ handleSubmit} className='flex items-center bg-white rounded-full w-full flex-1'>
        <input type='text' name="input" placeholder='Search ...' className='flex-1 border-gray-400 px-4 rounded-l-full outline-none placeholder:text-xs text-black'/>
        <button type='submit'>
          <Search className='rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer'/>
        </button>
      </form>

      <div className='flex space-x-5 mt-5 md:mt-0'>
        <Link href={"/"} className='hidden xl:flex text-white font-bold items-center space-x-2 text-sm'>
          <Grid2X2 size={20}/>
          <p>Department</p>
        </Link>

        <Link href={"/"} className='hidden xl:flex text-white font-bold items-center space-x-2 text-sm'>
          <LayoutGrid size={20}/>
          <p>Services</p>
        </Link>

        <Link href={"/"} className='flex text-white font-bold items-center space-x-2 text-sm'>
          <Heart size={20}/>
          <div>
            <p className='font-xs font-extralight'>Reorder</p>
            <p>My Items</p>
          </div>
        </Link>

        <Link href={"/"} className='flex text-white font-bold items-center space-x-2 text-sm'>
          <User size={20}/>
          <div>
            <p className='font-xs font-extralight'>Sign In</p>
            <p>Accout</p>
          </div>
        </Link>

        <Link href={"/basket"} className='flex text-white font-bold items-center space-x-2 text-sm'>
          <ShoppingCart size={20}/>
          <div>
            <p className='font-xs font-extralight'>No Items</p>
            <p>0.0$</p>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header