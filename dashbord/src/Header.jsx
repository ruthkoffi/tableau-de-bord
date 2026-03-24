import React from 'react'

const Header = () => {
  return (
    <div >
        <div className=' flex items-center justify-between bg-white rounded-sm m-4'>
            <h1 className='text-5xl py-2'>Pro</h1>
            <div className="flex flex-wrap gap-4 py-2 px-8">
                <span className="size-10 bg-orange-500 border rounded-lg"></span>
                <span className="size-10 bg-orange-500 rounded-lg"></span>
            </div>
        </div>
     

    </div>
  )
}

export default Header
