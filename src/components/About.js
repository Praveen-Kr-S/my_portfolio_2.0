import React from 'react'
import AboutImg from '../assets/about.png'

const About = () => {

  const config = {
    line1 : 'Hi, My name Praveen Kumar. I am a Frontend Developer. I built Beatiful Websites with React.js and Tailwind CSS + Bootstrap',
    line2 : 'I am proficient in Frontend skills like React.js, JavaScript, Redux ToolKit,  Fetch & Axios and many more',
    line3 : 'In backend I know Node.js, Express.js, Python, MySQL, MongoDB & Mongoose'
  }

  return (
    <section className='flex px-10 pb-20 flex-col md:flex-row justify-center bg-secondary' id='about'>

        <div className="md:w-1/2 md:py-28 lg:py-16">

            <img className='mt-20 lg:mt-40 xl:mt-10' src={AboutImg} alt="About Image" />

        </div>

        <div className="md:w-1/2 lg:pr-8 md:px-10 sm:py-28 md:py-24 text-justify lg:mt-16 xl:mt-24">

            <h1 className='font-semibold md:font-bold text-yellow-500 text-4xl sm:text-5xl lg:text-6xl mb-5 border-b-4 border-white w-[165px] sm:w-[220px] md:w-[230px] lg:w-[285px]'>
              About Me
            </h1>

            <p className='text-white lg:text-2xl lg:font-semibold'>{config.line1}</p>

            <p className='text-white lg:text-2xl lg:font-semibold pt-2 xl:pt-5'>{config.line2}</p>

            <p className='text-white lg:text-2xl lg:font-semibold pt-2 xl:pt-5'>{config.line3}</p>

        </div>

    </section>
  )
}

export default About