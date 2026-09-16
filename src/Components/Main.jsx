import React from 'react'
import Sidebar from './sidebar'
import Videos from './Videos'

export default function Main() {
  return (
    <div className='w-[100%] h-auto min-h-[88vh] bg-black flex py-[15px]'>
     <Sidebar />
     <Videos />
    </div>
  )
}
