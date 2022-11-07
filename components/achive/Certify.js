import React from 'react'
import { urlFor } from '../../sanity'
const Certify = ({certifi}) => {
  return (
    <>
        <h3 className="font-semibold dark:text-light text-[2.5rem] text-center mt-4">
            Some <span className="text-5xl text-lightb dark:text-darko font-bold">Certificates</span>
        </h3>
        <div className="h-[100vh] overflow-scroll rounded main overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 space-y-4" >
        {certifi?.map((value,idx) => (
                
                <div className="max-w-lg p-4 shadow-md rounded dark:bg-gray-900 dark:text-gray-100 mx-auto" key={idx}>
            <div className="space-y-4 overflow-hidden">
            <div className="space-y-2 hover:scale-125 rounded-t-xl overflow-hidden">
                <img src={urlFor(value?.logo).url()} alt={value.name} className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            </div>
            <div className="space-y-2 text-center">
                    <h3 className="text-xl font-semibold dark:text-violet-400">{value.name}</h3>
                <p className="leading-snug dark:text-gray-400">{value.desc}</p>
            </div>
        </div>
    </div>

        ))}
        </div>
        </div>
    </>
  )
}

export default Certify;
