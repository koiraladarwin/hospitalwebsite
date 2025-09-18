import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/logo.svg';
import { RiArrowDropDownLine } from 'react-icons/ri';
function NavBar() {
  return (
    <div className="bg-white h-70 md:h-25 px-10 pt-2 shadow-lg flex flex-col lg:flex-row items-center justify-between md:px-15 md:pb-3 lg:py-0 lg:h-18 sticky top-0 z-2 ">

      <div className='flex items-center pt-2 pb-3 md:pt-0 md:pb-0'>
        <img src={logo} className='w-60' />
      </div>

      <div className='flex flex-col justify-center pb-10 md:flex-row  items-center gap-6 md:pb-0'>
        <ul className='flex flex-col gap-3 md:flex-row md:gap-12 font-poppins text-gray '>
          <li><NavLink to='/' className={'hover:text-gray-light'}>About</NavLink></li>
          <li><NavLink to='/' className={'flex items-center hover:text-gray-light'}>Therapy <RiArrowDropDownLine size={20} /></NavLink></li>
          <li><NavLink to='/' className={'hover:text-gray-light'}>Our Focus</NavLink></li>
          <li><NavLink to='/' className={'hover:text-gray-light'}>Contact</NavLink></li>
        </ul>
        <button className='bg-green text-white px-6 py-1 font-poppins rounded-md hover:bg-green-light'>Book now</button>
      </div>

    </div>
  )
}

export default NavBar