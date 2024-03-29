import { NextSeo } from 'next-seo'
import React from 'react'
const thanks = () => {
  return (
    <>
    <NextSeo 
      title="Thank You"
      description="This is my portfolio thankyou page and I am a Full-Stack Web Developer & Technology Enthausiast."
      canonical="https://www.mustafaazad.me/thanks"
      openGraph={{
        siteName : "mustafaazad",
        url : "https://www.mustafaazad.me/thanks",
        releaseDate: '2022-11-09T22:04:11Z',
        tags: ['mustafaazad', 'mustafa', 'azad','thank','thankyou','all','subscribe', 'nextjs', 'collage', 'ietdavv','indore', 'madhyapardesh', 'india', 'sanity', 'sanityio','skill','portfolio', 'website','dev', 'developer','amazing','wow','tailwind','css','react','javascript', 'experience', 'working'],
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: 'https://www.mustafaazad.me/favicon.ico',
        },
      ]}
      />
      <div className="flex items-center justify-center h-screen fontd">
      <div>
        <div className="flex flex-col items-center space-y-2">
          <svg  className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-4xl font-bold">Thank You !</h1>
          <p>Thank you for Contacting! I Will Catch You Soon. . .</p>
          <a href='/'
            className="inline-flex items-center px-4 py-2 text-white bg-lightb border border-indigo-600 rounded-full hover:bg-lightb/90 focus:outline-none focus:ring">
            <svg  className="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span className="text-sm font-medium">
              Home
            </span>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default thanks
