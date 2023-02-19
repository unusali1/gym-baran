import React, { useState } from 'react'
import Button from './Button';
import { BiMenu } from "react-icons/bi";

const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Program", link: "/" },
    { name: "Blog", link: "/" },
    { name: "About Us", link: "/" },

  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=' w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <span className=' bg-blue-800 rounded-2xl m-2 w-18 p-1 text-white font-[Poppins] '>Gym</span> baran
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 bg-white cursor-pointer sm:hidden sm:w-28 md:hidden'>
          <BiMenu name={open ? 'close' : 'menu'} />

        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all font-[Poppins] duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
          <Button>
            Login
          </Button>
        </ul>
      </div>
    </div>
  )
}

export default Nav;