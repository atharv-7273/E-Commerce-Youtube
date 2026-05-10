import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 py-5 font-medium'>

      <img src={assets.logo} alt="logo" className='w-36' />

      <ul className='flex items-center gap-8 text-sm text-gray-700 whitespace-nowrap list-none m-0 p-0'>
        <li>

         <NavLink to='/' className='flex flex-col items-center '>
          <p>HOME</p>
          <hr className ='w-2/4 border-none h-[1.5px] bg-gray-700 ' />
        </NavLink>
        </li>

        <li>
        <NavLink to='/collection' className='flex flex-col items-center '>
          <p>COLLECTION</p>
          <hr className ='w-2/4 border-none h-[1.5px] bg-gray-700 ' />
        </NavLink>
        </li>
        
        
      </ul>
      
    </div>
  )
}

export default Navbar
