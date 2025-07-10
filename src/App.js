import React from 'react'
import g from '../src/image/g.png.jpg'

const Navbar = () => {
  return (
    <navbar >
      <div></div>
       <div className='flex  bg-cyan-900 h-11 text-2xl justify-between px-10 '>
        
        < div  >
        
       <h1 className='text-white'>Logo</h1>
       </div> 
       <div>
      <ul className='flex space-x-10 '>
        <li className='hover:underline  hover:text-red-700 text-white'>Home</li>
        <li className='hover:underline  hover:text-red-700 text-white'>About</li>
        <li className='hover:underline hover:text-red-700 text-white'>Services</li>
        <li className='hover:underline hover:text-red-700 text-white '>Contact</li>
      </ul>
      </div>
      <div className='text-white'>Icons</div>
      </div>
      <div className='bg-slate-400 h-6'>
        
        <img height={700} width={400}src={g}></img>
      </div>
      <div>
        
        </div>
    </navbar>
  )
}

export default Navbar
