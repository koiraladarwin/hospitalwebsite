import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/logo.svg';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';
function NavBar() {
  return (
    <div className="bg-white h-70 md:h-28 px-10 pt-2 shadow-lg flex flex-col [@media(min-width:1152px)]:flex-row items-center justify-between md:px-15 md:pb-3 xl:py-0 lg:h-22 sticky top-0 z-2 [@media(min-width:1152px)]:h-18">

      <div className='flex items-center pt-2 pb-3 md:pt-0 md:pb-0'>
        <img src={logo} className='w-60' />
      </div>

      <div className='flex flex-col justify-center pb-5 md:flex-row  items-center gap-4 md:gap-8 md:pb-0'>
        <ul className='flex flex-col gap-3 md:flex-row lg:gap-12 md:gap-4 font-poppins text-gray '>
          <li><NavLink to='/' className={'hover:text-gray-light'}>About</NavLink></li>
          <li><NavLink to='/' className={'flex items-center hover:text-gray-light'}>Therapy <RiArrowDropDownLine size={20} /></NavLink></li>
          <li><NavLink to='/' className={'hover:text-gray-light'}>Our Focus</NavLink></li>
          <li><NavLink to='/' className={'hover:text-gray-light'}>Contact</NavLink></li>
        </ul>

        <div className='flex gap-4 items-center'>
          <button className='bg-green text-white px-6 py-1 font-poppins rounded-2xl hover:bg-green-light'>Book now</button>
          <button className='bg-orange-gradient text-white px-6 py-1 font-poppins rounded-2xl hover:bg-orange-200'>Login</button>
          <FaSearch color='gray' />
        </div>
      </div>

    </div>
  )
}

export default NavBar