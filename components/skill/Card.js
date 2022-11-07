import React from 'react'
import Image from 'next/image'
import { urlFor } from '../../sanity'
const Card = ({card}) => {
  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 w-[90%] mx-auto">
        {card.map((value,idx) => {
          return(
          <div className="w-20 h-20 my-2 mx-auto" key={idx} >
          <div className="flex p-3 rounded-full" style={{backgroundColor : value.color}} ><Image width={60} height={60} loading="lazy" src={urlFor(value?.skillimg).url()} alt={value.name}/></div>
          <h3 className='text-center text-sm relative mt-[-1rem] dark:bg-black bg-white dark:text-white  rounded-3xl'>{value.name}</h3>
          </div>
          )
        })}
      </div>
    </>
  )
}

export default Card
