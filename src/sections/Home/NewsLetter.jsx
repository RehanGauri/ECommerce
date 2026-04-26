import React, { useState } from 'react'
import Button from '../../components/Button'
import { toast } from 'react-toastify'

const NewsLetter = () => {
    const [input, setInput] = useState("")
  return (
    <div className='py-20'>
    <div className='flex items-center justify-center flex-col h-80'>
        <div className='flex items-center justify-center flex-col'>
            <h1 className='font-cormorant text-5xl font-semibold'>Join the LUXE Community</h1>
            <h1 className='font-outfit text-gray-400 text-lg pt-4'>Get early access to new collections, exclusive offers, and style inspiration.</h1>
        </div>
        <div className='flex flex-col lg:flex-row gap-2 pt-8'>
            <input type="email" name="" id=""
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            placeholder='Enter your email address'
            className='bg-white py-2 border border-gray-400 pl-4 pr-12 text-lg font-outfit  rounded-2xl'
            />
            
            <Button onClick={()=>{
                toast.warning("This feature is not available yet");
                setInput("");
            }
                } text={"Subscribe"} classNames={"hover:scale-103 "} />
        </div>
    </div>
            </div>
  )
}

export default NewsLetter