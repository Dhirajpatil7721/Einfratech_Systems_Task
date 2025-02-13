import React from 'react'
import loc from'../img/location.gif'
import tic from'../img/ticket_17270686.gif'
import hotel from'../img/hotel.gif'
import './Service.css'

function Service() {
  return (
    <div id='bg' className='w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center p-12'>
    <p className='text-blue-500 text-lg font-semibold'>Services</p>
    <h1 className='text-3xl md:text-4xl font-bold mt-2 mb-8 text-center'>Tours & Travel Services</h1>

    <div className='flex flex-col md:flex-row justify-center gap-12 w-full max-w-7xl'>
      <div className='bg-white p-8 rounded-2xl shadow-xl max-w-sm text-center w-full md:w-1/3'>
        <img src={loc} alt="Travel Guide" className='w-24 h-24 mx-auto mb-4'/>
        <h2 className='text-2xl font-bold'>Travel Guide</h2>
        <p className='text-gray-600 mt-3'>Get expert guidance for your travels with our experienced professionals.</p>
      </div>

      <div className='bg-white p-8 rounded-2xl shadow-xl max-w-sm text-center w-full md:w-1/3'>
        <img src={tic} alt="Ticket Booking" className='w-24 h-24 mx-auto mb-4'/>
        <h2 className='text-2xl font-bold'>Ticket Booking</h2>
        <p className='text-gray-600 mt-3'>Easily book your flights, trains, and bus tickets at the best prices.</p>
      </div>

      <div className='bg-white p-8 rounded-2xl shadow-xl max-w-sm text-center w-full md:w-1/3'>
        <img src={hotel} alt="Hotel Booking" className='w-24 h-24 mx-auto mb-4'/>
        <h2 className='text-2xl font-bold'>Hotel Booking</h2>
        <p className='text-gray-600 mt-3'>Find and reserve the best hotels for a comfortable stay anywhere.</p>
      </div>
    </div>
  </div>
  )
}

export default Service
