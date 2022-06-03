import React, {useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {BsChatLeft} from 'react-icons/bs'
import {RiNotification3Line} from 'react-icons/ri'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {TooltipComponent} from '@syncfusion/ej2-react-popups'

import { Chat, Notification, UserProfile} from '.'




const Navbar = () => {


  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <TooltipComponent content='Menu'   position='BottomCenter'>
        <button type='button'  className='relative text-xl rounded-full p-3 hover:bg-light-gray' >
          <AiOutlineMenu />
        </button>
      </TooltipComponent>
      <div className='flex'>
        <TooltipComponent content='Chat'   position='BottomCenter'>
          <button type='button'  className='relative text-xl rounded-full p-3 hover:bg-light-gray' >
            <BsChatLeft />
          </button>
        </TooltipComponent>
        <TooltipComponent content='Notification'   position='BottomCenter'>
          <button type='button'  className='relative text-xl rounded-full p-3 hover:bg-light-gray' >
            <RiNotification3Line />
          </button>
        </TooltipComponent>
        <img src='' alt='' style={{borderRadius:'50%'}} className='rounded-full w-8 h-8' />
        <p className='mt-3 ml-2' >
          <span className='text-gray-400 text-14'>Hi,</span>
          <span className='text-gray-400 font-bold ml-1 text-14' >Admin</span>
        </p>
        <TooltipComponent content='Menu'   position='BottomCenter'>
          <button type='button'  className='relative text-xl rounded-full p-3 hover:bg-light-gray mt-2' >
            <MdKeyboardArrowDown />
          </button>
        </TooltipComponent>
      </div>
      
    </div>
  )
}

export default Navbar