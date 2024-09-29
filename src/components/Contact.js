import React from 'react'

const Contact = () => {

  const config = {
    email : "praveenkrsslm69@gmail.com",
    phone : "7598152270",
  }

  return (
    
    <section className='flex px-10 py-32 flex-col text-center bg-primary' id='contact'>
        <div className="text-white flex flex-col items-center">
            <h1 className='text-4xl lg:text-6xl text-yellow-500 border-b-4 border-white font-bold mb-5'>
              Contact
            </h1>

            <p className='lg:text-2xl lg:font-semibold'>
              If you want to discuss more in detail, please contact me
            </p>

            <p className='py-2'>
                <span className='font-bold'>Email : </span>{config.email}</p>

            <p className='py-2'>
                <span className='font-bold'>Phone : </span>{config.phone}</p>

        </div>

            

    </section>
  )
}

export default Contact