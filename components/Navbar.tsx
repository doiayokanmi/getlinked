import { links } from '@/util'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="flex relative justify-between items-center p-4 md:px-24 border-b text-white">
        <Link href="/" className='font-bold'>get<span className="text-primary">Linked</span></Link>

        <div className="flex absolute md:static px-2 bg-background md:p-0 w-full md:w-auto flex-col md:flex-row top-16 left-0 md:items-center md:space-x-12">
          {
            links.map((link) => (
              <Link key={link.name} href={link.href} className='p-2'>
                {link.name}
              </Link>
            ))
          }

          <Link href={'/register'} className="bg-gradient px-4 rounded py-2 text-white">Register</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar