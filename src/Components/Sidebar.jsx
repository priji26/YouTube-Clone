import React from 'react'
import home from '../assets/Icons/home.png'
import short from '../assets/Icons/short.png'
import subscription from '../assets/Icons/subscription.png'
import user from '../assets/Icons/user.png'

export default function Sidebar() {
    let sidebarArr = [
        {
            name: "Home",
            img : home,
        },
        {
            name: "Shorts",
            img : short,
        },
        {
            name: "Subscription",
            img : subscription,
        },
        {
            name: "You",
            img : user,
        },
    ]
  return (
    <div  className='w-[7%] h-[100%]'>

      {
      sidebarArr.map((obj)=>{
        return(
            <div  className='w-[100%] py-[15px] gap-1 cursor-pointer rounded-lg flex flex-col justify-center items-center hover:bg-[#272727] transition-all duration-500'>
                <img className='h-[20px]' src={obj.img} alt=''/>  
                <p className='text-[0.7rem] text-white'> {obj.name} </p>
            </div>
        )
        
      })
    }
    </div>
  )
}
