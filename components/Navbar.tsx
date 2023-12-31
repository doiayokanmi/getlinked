'use client'

import { links } from '@/util'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

interface Props {
  curPage: number;
  setCurPage: React.Dispatch<React.SetStateAction<number>>;
}

const Navbar = ({ curPage, setCurPage }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
    <nav className="flex sticky top-0 z-50 justify-between items-center p-4 md:px-24 border-b text-white">
        <Link href="/" className='font-bold'>get<span className="text-primary">Linked</span></Link>

        <div className={`flex absolute md:static px-2 bg-background md:bg-transparent md:p-0 w-full md:w-auto flex-col md:flex-row top-16 left-0 md:items-center transition-all md:h-auto duration-300 md:space-x-12 overflow-hidden ${isMenuOpen ? 'h-[500px]' : 'h-0'}`}>
          {
            links.map((link) => (
              <Link key={link.name} onClick={()=>{link.name === 'Contact' ? setCurPage(2) : setCurPage(1)}} href={link.href} className='p-2'>
                {link.name}
              </Link>
            ))
          }

          <Link href={'#'} onClick={()=>setCurPage(3)} className="bg-gradient mx-2 px-4 rounded py-2 w-[100px] text-white">Register</Link>

        </div>

          <div className='md:hidden' onClick={toggleMenu}>
            {
              isMenuOpen ? <X /> : <Menu />
            }
          </div>
      </nav>
    </>
  )
}

export default Navbar