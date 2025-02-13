import React from 'react'
import about from '../img/about.jpg'
import about1 from '../img/about-1.jpg'
import about2 from '../img/about-2.jpg'
import './About.css'

function About() {
  return (
    <div  id='bg' className="flex flex-col md:flex-row items-center text-center md:text-left px-4 sm:px-8 md:px-12 py-8">
      <div className="w-full md:w-1/2 flex justify-center">
        <img className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-lg shadow-lg"
          src={about}
          alt="About Us" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start max-w-2xl p-6">
        <p className="text-blue-500 text-lg font-semibold">About Us</p>
        <h1 className="text-2xl sm:text-3xl font-bold mt-2 text-gray-800">
          We Provide Best Tour Packages In Your Budget
        </h1>
        <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
          Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit.
          Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo.
        </p>

        <div className="flex flex-wrap sm:flex-nowrap justify-between gap-4 mt-6 w-full">
          <img id='imgs'
            src={about1}
            alt="Tour Experience 1"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-lg shadow-lg border border-gray-300"
          />
          <img id='imgs'
            src={about2}
            alt="Tour Experience 2"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-lg shadow-lg border border-gray-300"
          />
        </div>

      </div>
    </div>
  )
}

export default About
