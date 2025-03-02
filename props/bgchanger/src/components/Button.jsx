import React, { useState } from 'react'

const Button = (props) => {
  return ( 
    <div className='flex flex-col items-center justify-center '>
    <button className="relative z-0 rounded bg-pink-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-pink-700 after:transition-[all_0.3s_ease]  hover:after:w-full justify-center "
        onClick={props.my}
    >
        Button
    </button>
    <h1>{props.children}{props.cnt}</h1>
    </div>  
  )
}

export default Button