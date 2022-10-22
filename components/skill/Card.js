import React from 'react'
import Image from 'next/image'
const Card = () => {
  const icon = [
    {name : "React", img : "/mongodb.png",color : "#889"},
    {name : "React", img : "/mongodb.png",color : "#849"},
    {name : "React", img : "/mongodb.png",color : "#589"},
    {name : "React", img : "/mongodb.png",color : "#669"},
  ]
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {icon.map((value,idx) => {
          return(
          <div className="w-20 h-20 my-2 mx-auto" >
          <div className="flex p-3 rounded-full" style={{backgroundColor : value.color}} key={idx}><Image width={60} height={60} loading="lazy" src={value.img} alt={value.name}/></div>
          <h3 className='text-center text-sm relative mt-[-1rem] bg-black text-white rounded-3xl invisible hover:visible focus-within:visible'>{value.name}</h3>
          </div>
          )
        })}
      </div>
    </>
  )
}

export default Card
