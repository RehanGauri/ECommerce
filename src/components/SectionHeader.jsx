import React from 'react'

const SectionHeader = ({heading1, heading2, subHeading}) => {
  return (
    <div>
      <h1 className='font-cormorant text-4xl font-semibold'>{heading1} <span className='text-gold'>{heading2}</span></h1>
      <h2 className='text-sm text-gray-500 ml-0.5 mt-1 '>{subHeading}</h2>
    </div>
  )
}

export default SectionHeader