import React from 'react'

export default function Footer() {
  return (
    <div className='py-2 bg-slate-950'>
      {/* Container with responsive margin and padding */}
      <div className='text-white px-5 md:px-10 font-semibold'>
        {/* Title */}
        <h1 className='text-xs md:text-xs'>Address</h1>

        {/* Address Details */}
        <div className='flex gap-5 mt-1'>
            <p className='text-10px '>Island: Fuvamulah</p>
            <p className='text-10px '>Road: Husnuheenamagu</p>
            <p className='text-10px '>Country: Maldives</p>
            <p className='text-10px '>Postal code: 18012</p>
        </div>
      </div>
    </div>
  )
}
