import React from 'react'
import { CiSearch } from 'react-icons/ci'

const SearchBar = () => {
  return (
        <div className='hidden lg:flex items-center justify-center px-3 gap-1 py-2 border border-gray-border rounded-xl bg-gray-bg w-50 focus-within:w-65 focus-within:border-gold  transition-all duration-300 
        focus-within:ring focus-within:ring-gold/40
        '>
        <CiSearch className='text-sm' />
        <input type="text"
        placeholder='Search products...' 
        className=' font-semibold text-[12px] text-gray-500 outline-none w-full '
        />

        </div>
  )
}

export default SearchBar