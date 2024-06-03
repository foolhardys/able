import React from 'react'

const Heading = (props) => {
  return (
    <div className='snap-start font-[poppins]'>
     <h1 className='pt-16 font-semibold text-black md:text-6xl text-4xl text-center dark:text-white'>{props.head}</h1>
    </div>
  )
}

export default Heading
