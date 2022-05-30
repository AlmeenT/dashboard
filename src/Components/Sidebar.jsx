import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {GoCalendar} from 'react-icons/go'
import {IoIosPeople} from 'react-icons/io'
import {BsShop} from 'react-icons/bs'
import {FaPeopleCarry} from 'react-icons/fa'
import {GiNotebook} from 'react-icons/gi'
import {MdColorLens} from 'react-icons/md'
import {GrShop} from 'react-icons/gr'
import { GrMoney } from 'react-icons/gr'

const Sidebar = () => {
  const activeMenu = true;

  const activeLink ='flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white bg-black text-md m-2';

  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray text-md m-2';

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto pb-10'>
    {activeMenu && (<>
      <div className='flex justify-between items-center'>
        <Link to='/' onClick={ () => {}} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
          <SiShopware /><span> Admin </span>
        </Link>
        <TooltipComponent content='Menu' position='BottomCenter'>
          <button type='button' onClick={ () => {}} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
            <MdOutlineCancel />
          </button>
        </TooltipComponent>
      </div>
      <div className='mt-4 m-3 uppercase text-gray-400 '>
        <p>DASHBOARD</p>
        <NavLink to='/calendar' className={({ isActive}) => isActive ? activeLink : normalLink}>
          <GoCalendar /><span className='capitalize'><p> Calendar</p></span>
        </NavLink>
        <NavLink to='/clients' className={({ isActive}) => isActive ? activeLink : normalLink}>
          <FaPeopleCarry /><span className='capitalize'><p> Clients</p></span>
        </NavLink>
        <NavLink to='/editor' className={({ isActive}) => isActive ? activeLink : normalLink}>
          <GiNotebook /><span className='capitalize'><p> Editor</p></span>
        </NavLink>
        <NavLink to='/financial' className={({ isActive}) => isActive ? activeLink : normalLink}>
          <GrMoney /><span className='capitalize'><p> Financial</p></span>
        </NavLink>
        <NavLink to='/order' className={({ isActive}) => isActive ? activeLink : normalLink}>
          <GrShop /><span className='capitalize'><p> Orders</p></span>
        </NavLink>
        <NavLink to='/products' className={({ isActive}) => isActive ? activeLink : normalLink}>
          <BsShop /><span className='capitalize'><p> Products</p></span>
        </NavLink>
        <NavLink to='/team' className={({ isActive}) => isActive ? activeLink : normalLink}>
          <IoIosPeople /><span className='capitalize'><p> Team Members</p></span>
        </NavLink>
        <NavLink to='/color' className={({ isActive}) => isActive ? activeLink : normalLink}>
          <MdColorLens /><span className='capitalize'><p> Color Picker</p></span>
        </NavLink>
      </div>
    </>)}
    </div>
  )
}

export default Sidebar