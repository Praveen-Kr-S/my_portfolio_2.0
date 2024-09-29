import React from 'react';
import HeroImg from "../assets/Hero.jpeg";
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";


const Hero = () => {

  const config = {
    subtitile : 'Im Frontend Developer',
    linkedIn : 'https://www.linkedin.com/in/praveen-kumar-s-frontend-developer/',
    instagram : 'https://www.instagram.com/praveenkumar.s.tn/?hl=en',
    github : 'https://github.com/Praveen-Kr-S',
  }

  return (
    <section className='flex flex-col md:flex-row justify-center px-10 md:px-24 xl:px-32  pb-14 pt-20 md:py-40 bg-primary'>

        <div className='w-full md:w-9/12 lg:w-8/12 flex items-center md:items-start md:mt-20 lg:mt-32 flex-col xl:pl-32'>

            <h1 className='text-white text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-bold font-hero-font'>Hi, <br /> Im 
                <span className='text-black'> Praveen Kumar</span>
                <p className='text-2xl md:text-3xl text-white font-semibold'>{config.subtitile}</p>
            </h1>

            <div className='flex mt-4 mb-10'>
                <a target='_blank' href={config.linkedIn}className='hover:text-white'><AiOutlineLinkedin className='size-9 mr-3' /></a>
                <a target='_blank' href={config.instagram}className='hover:text-white'><AiOutlineInstagram className='size-9 mr-3' /> </a>
                <a target='_blank' href={config.github}className='hover:text-white'><AiOutlineGithub className='size-9 mr-3' /></a>
            </div>
             
        </div>
        <div className='flex justify-center md:justify-start'>
          <img className=' border-8 border-white lg:rounded-full rounded-3xl h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] md:w-[250px] md:h-[250px] md:mt-14' src={HeroImg} alt="Hero Pic" />
        </div>
        
    </section>
  )
}

export default Hero