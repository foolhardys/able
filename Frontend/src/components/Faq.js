import React from 'react'

const Faq = () => {
  return (
    <>
    <div className='bg-white mb-20'>

    <div className='  justify-center grid lg:grid-cols-3 gap-8 sm:px-24 px-4 py-16 font-[sans-serif] text-[#333]'>
        
    <div className="  collapse collapse-plus bg-white">
  <input type="radio" name="my-accordion-3"  /> 
  <div className="collapse-title text-md ">
  What are the services of Able ?
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className=" collapse collapse-plus bg-white">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-md ">
  What are the services of Able ?
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
<div className=" collapse collapse-plus bg-white">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-md ">
  What are the services of Able ?
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
</div>
</div>
      </>
  )
}

export default Faq

