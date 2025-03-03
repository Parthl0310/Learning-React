import React from 'react'

const Card = ({name}) => {
  return (
    <div className="p-1 shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl mb-10">
          <div className=" bg-black sm:p-10 p-6 rounded-xl">
            <div className="">
              <h5 className="text-xl font-bold text-gray-200">Science of Chemistry {name || "Nevil"}</h5>
    
              <p className="mt-2 text-sm text-gray-400 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci.
              </p>
            </div>
      </div>
    </div>
  )
}

export default Card