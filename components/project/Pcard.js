import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../sanity'

const Pcard = ({pcard}) => {
  return (
    <>
        {pcard.map((value,idx) => (   
            <Link href={value.link} className='cursor-pointer'>
            <article className="group mx-4" key={idx}>
        <img
            alt="Project"
            src={urlFor(value?.img).url()}
            loading='lazy'
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />

        <div className="p-4">
            <a href="#">
            <h3 className="text-lg font-medium text-gray-900">
                {value.name}
            </h3>
            </a>

            <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            {value.desc}
            </p>
        </div>
        </article>
        </Link>
        ))}
    </>
  )
}

export default Pcard