import React from 'react'
import './Contach.css'

function Contact() {
  return (
    <div>
     <footer id='back' className='bg-gray-500 text-white p-6'>
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center'>
        <nav className='mb-4 md:mb-0'>
          <ul className='flex space-x-6'>
            <li><a href='/' className='hover:underline'>Home</a></li>
            <li><a href='/about' className='hover:underline'>About</a></li>
            <li><a href='/services' className='hover:underline'>Services</a></li>
            <li><a href='/contact' className='hover:underline'>Contact</a></li>
          </ul>
        </nav>
        <div className='text-center md:text-right'>
          <p className='text-sm'>📞 +123 456 7890</p>
          <p className='text-sm'>📧 info@example.com</p>
          <p className='text-sm'>🌐 www.example.com</p>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Contact
