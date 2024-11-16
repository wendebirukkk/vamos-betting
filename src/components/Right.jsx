import React from 'react'

const Right = () => {
  return (

    <div className='w-1/6 bg-[#131313] mt-3'>
    <div className=' m-2 border-2 h-48 w-auto bg-[#131313] border-[#084C85] text-white'>
      <div className=' border-b-2 '>
        <div className='bg-[#0363B5] '>
        <button className='bg-blue-200 w-16 p-2 hover:bg-blue-900'>Bet 1</button>
        <button className='bg-blue-200 w-16 p-2'> Bet 2</button>
        <button className='bg-blue-200 w-16 p-2'>Bet 3</button>
        </div>
      </div>
      <h2 className='flex items-center justify-center text-center mt-12'>click odds to start</h2>
    </div>
    </div>

  
  )
}

export default Right