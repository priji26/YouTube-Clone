import React from 'react'
import menu from '../assets/Icons/menu.png'
import youtube from '../assets/Icons/yt.png'
import search from '../assets/Icons/search.png'
import mic from '../assets/Icons/mic.png'
import bell from '../assets/Icons/bell.png'
import Priji from '../assets/Icons/priji.jpg';

export default function Navbar() {
  return (
    <div className='w-[100%] h-[12-vh] bg-black flex py-[15px]'>
        
        <div className='w-[25%] h-[12-vh] flex gap-4 pl-[20px] items-center'>
            <img className='h-[20px]' src={menu} alt=''/>
            <div className='flex gap-2'>
               <img className='h-[45px]' src={youtube} alt=''/>  
               <h1 className='text-white text-[1.6rem] font-semibold'>YouTube</h1>
            </div>
        </div>
    

        <div className='w-[50%] h-[12-vh] flex items-center gap-3'>
            <div className='w-[80%] rounded-[20px] overflow-hidden h-[40px] flex border-[1px] border-solid border-[#272727]'>
                <input className='w-[90%] outline-none pl-[15px] h-[100%] text-white' type='text' />
                <button className='w-[10%] h-[100%] bg-[#272727] flex justify-center items-center'>
                    <img className='h-[25px]' src={search} alt=''/>
                </button>
            </div>
            <div className='w-[40px] h-[40px] rounded-full bg-[#272727] flex justify-center items-center'>
                <img className='h-[25px]' src={mic} alt=''/>
            </div>
        </div>

        <div className='w-[25%] h-[12-vh] gap-2 flex justify-end pr-[20px] items-center'>
            <div className='w-[40px] h-[40px] cursor-pointer hover:bg-[#272727]  transition-all duration-500 flex rounded-full justify-end pr-[20px] items-center'>
                <img className='h-[25px]' src={bell} alt=''/>
            </div>
            <img className='w-[35px] h-[35px] rounded-full' src={Priji} alt=''/>
        </div>
    </div>
  )
}
