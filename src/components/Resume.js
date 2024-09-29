import React from 'react'
import resumeImg from '../assets/resume.jpg'

const Resume = () => {
  

  const config = {
    link : "https://dochub.com/m/shared-document/praveenkrsslm69/ALzmZB7wM16YmANwX8J560/praveen-fn-sm-pdf?dt=CNBr3TZPzzGN9wwssMEW"
  }

  return (
    <section className='flex px-10 pb-28 pt-10 flex-col md:flex-row md:justify-center items-center md:items-start bg-secondary' id='resume'>

        <div className="md:w-1/2 md:py-10 lg:py-5">

            <img className='mt-10 pt-10 md:mt-5 lg:mt-16  md:pl-20 lg:pl-40 w-[250px] md:w-[500px]'  src={resumeImg} alt="About Image" />

        </div>

        <div className="md:w-1/2  md:px-7 pt-10 sm:pt-12 md:py-16 text-start md:mt-32 lg:mt-40 xl:mt-44">

            <h1 className='font-semibold md:font-bold text-yellow-500 text-4xl sm:text-5xl lg:text-6xl mb-5 border-b-4 border-white w-[130px] sm:w-[175px] md:w-[180px] lg:w-[225px]'>
              Resume
            </h1>

            <p className='text-white lg:font-bold pt-3'>
              You can view my resume <a className='btn' target='_blank' href={config.link}>Download</a>
            </p>

        </div>

    </section>
  )
}

export default Resume