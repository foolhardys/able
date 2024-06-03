import Tab  from './Tabs.js'
import React from 'react'

const BasicModal = () => {
  return (
    <div className='font-[poppins]'>
<button className="" onClick={()=>document.getElementById('my_modal_2').showModal()}>Apply Now</button>
<dialog id="my_modal_2" className=" modal">
  <div className="modal-box w-11/12 md:h-[90vh] max-w-7xl dark:bg-[#131313]">
    <Tab/>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
  )
}

export default BasicModal
