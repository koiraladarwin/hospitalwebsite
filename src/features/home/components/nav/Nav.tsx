import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/logo.svg';
import { RiArrowDropDownLine } from 'react-icons/ri';
function NavBar() {
  return (
    <div className="bg-white h-18 shadow-lg flex items-center justify-between px-15">

      <div className='flex items-center'>
        <img src={logo} className='w-60' />
      </div>

      <div className='flex items-center gap-6'>
        <ul className='flex gap-12 font-poppins text-gray '>
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