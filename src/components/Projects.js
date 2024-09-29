import React from 'react'
import websiteImg1 from '../assets/Net-Ecomerce.png'
import websiteImg2 from '../assets/Fire-Pizza.png'
import websiteImg3 from '../assets/mern_todo.png'
const Projects = () => {

    const config = {
        projects : [
            {
                image : websiteImg1,
                description : "A Ecomerce Website. Built with MERN Stack",
                link : "https://github.com/Praveen-Kr-S/minicart"
            },
            {
                image : websiteImg2,
                description : "Food Ecommerce Website. Built with React Bootstrap Components",
                link : "https://phenomenal-trifle-f84dfd.netlify.app/"
            },
            {
                image : websiteImg3,
                description : "TODO-LIST. Build with MERN STACK + Bootstrap",
                link : "https://github.com/Praveen-Kr-S/mern_todo"
            },
        ]
    }

  return (
    <section className='flex flex-col py-20 xl:py-40 px-5 justify-center bg-primary text-white' id='projects'>

        <div className="w-full">
            <div className="flex flex-col items-center">
                <h1 className='font-semibold md:font-bold text-yellow-400 text-4xl sm:text-5xl lg:text-6xl mb-5 w-[132px] sm:w-[175px] md:w-[182px] lg:w-[226px]'>Projects</h1>
                <p className='text-center pb-5 md:font-semibold lg:text-2xl px-3'>These are some of my best projects. I have built these with React, MERN and Vanilla CSS. Check them out.</p>
            </div>
        </div>
            

        <div className="flex flex-col md:flex-row text-center items-center justify-center  md:mt-10 mt-5 gap-5 md:gap-10 px-5 font-semibold">

            {config.projects.map((project) => 
                <div className='relative'>
                    <img className='h-[200px] w-[350px]' src={project.image} alt="ecomerce" />

                    <div className="project-desc">
                        <p className='text-center pt-10 px-3'>{project.description}</p>
                        <div className='pt-3'>
                            <a className='btn' target='_blank' href={project.link}>View Project</a>
                        </div>
                    </div>
                </div>
            )}
        </div>

    </section>
  )
}

export default Projects