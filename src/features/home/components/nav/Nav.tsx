import logo from '../../../../assets/logo.svg';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import {motion} from "framer-motion";
import { Link } from "react-scroll";


function NavBar() {
  const [open, setOpen] = useState(false)
  return (
    <div className={`bg-white cursor-pointer md:h-28 px-10 pt-2 shadow-lg flex flex-col [@media(min-width:1152px)]:flex-row items-center justify-between md:px-15 md:pb-3 xl:py-0 lg:h-22 sticky top-0 z-2 [@media(min-width:1152px)]:h-18 transition-all duration-300 ${open ? 'h-auto' : 'h-20 md:h-28'}`}>

      <div className='flex items-center gap-4 pt-2 pb-3 md:pt-0 md:pb-0 '>
        <button
          className="md:hidden text-gray-700 text-2xl "
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={24} color='gray' /> : <FaBars size={24} color='gray' />}
        </button>

        {/* <img src={logo} className='w-60' /> */}
        <motion.img 
        src={logo} 
        layoutId="App-logo" 
        className='w-60 relative' 
        // transition={{ duration: 0.1, ease: "easeInOut" }}
        />
      </div>

      <div className={`flex flex-col pb-5 md:flex-row  items-center gap-8 md:gap-8 md:pb-0  ${open ? 'flex' : 'hidden md:flex'}`}>
        <ul className='flex flex-col gap-3 md:flex-row lg:gap-12 md:gap-4 font-poppins text-gray '>
          <li><Link smooth={true}
            duration={500} to='home' className={'hover:text-gray-light'}>About</Link></li>
          <li><Link smooth={true}
            duration={500} to='therapy' className={'flex items-center hover:text-gray-light'}>Therapy </Link></li>
          <li><Link smooth={true}
            duration={500} to='focus' className={'hover:text-gray-light'}>Our Focus</Link></li>
          <li><Link smooth={true}
            duration={500} to='/' className={'hover:text-gray-light'}>Camp & Events</Link></li>
          <li><Link smooth={true}
            duration={500} to='footer' className={'hover:text-gray-light'}>Contact</Link></li>
        </ul>

        <div className='flex gap-4 items-center'>
          <button className='bg-orange-gradient text-white px-6 py-1 font-poppins rounded-2xl hover:bg-orange-200'>Login</button>
        </div>
      </div>

    </div>
  )
}

export default NavBar
