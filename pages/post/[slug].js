import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { sanityClient } from '../../sanity'
import { getCurrentPost, getPosts } from '../../utils/queries'
import PortableText from 'react-portable-text'
import { SubmitHandler, useForm } from 'react-hook-form'
import { motion, useScroll } from "framer-motion";

const Post = (props) => {
    const {post} = props;
    const [nav, setNav] = useState(false);
    const { scrollYProgress } = useScroll();
    const [submitted, setSubmitted] = useState(false);
    const {register, handleSubmit, formState : {errors}} = useForm();
    const onSubmit = async data => {
        await fetch('/api/commentapi', {
            method: "POST",
            body: JSON.stringify(data),
        }).then(() => {
            console.log(data)
            setSubmitted(true)
        }).catch((err) => {
            console.log(err)
            setSubmitted(false)
        })
    };
  return (
    <>
        <nav id="header" className="fixed bg-light/80 w-full z-10 top-0 xl:h-20">

<div id="progress" className="h-1 z-20 top-0"></div>

<div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 xl:py-0 lg:py-3">

    <div className="pl-4">
        <a className="text-gray-900 no-underline hover:no-underline font-extrabold text-xl" href="/">
        <div className="block z-50 w-20 h-20">
        <Image
            width="100%"
            height="100%"
            className="w-full h-full"
            src="/logodark.png"
        />
        </div>
        </a>
    </div>

    <div className="block lg:hidden pr-4">
                <button onClick={() => setNav(!nav)} className="md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                        <path className={(!nav)?'block':'hidden'} fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"></path>
                        <path fillRule="evenodd" className={(!nav)?'hidden':'block'}
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"></path>
                    </svg>
                </button>
    </div>

    <div className={(!nav)?"w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20":"grid grid-cols-1 bg-light/80 translate-x-0 w-full z-20"}>
        <ul className="list-reset lg:flex font-semibold lg:justify-end mx-auto lg:mx-0 flex-1 lg:items-center lg:space-x-4">
            <li className="mr-4 lg:mr-0">
                <a className="inline-block dark:text-light hover:dark:text-darko ml-4 lg:ml-0 px-4 py-2 lg:px-0 lg:py-0 hover:border-b-[3px] hover:text-lightb focus-within:border-lightb  dark:hover:border-darko focus-within:border-b-4 dark:focus-within:border-darko" href="/">Home</a>
            </li>
            <li className="mr-4 lg:mr-0">
                <a className="inline-block dark:text-light hover:dark:text-darko px-4 py-2 ml-4 lg:ml-0 lg:px-0 lg:py-0 hover:border-b-[3px] hover:text-lightb focus-within:border-lightb  dark:hover:border-darko focus-within:border-b-4 dark:focus-within:border-darko" href="/blogs">Blogs</a>
            </li>
            <li className="mr-4 lg:mr-0">
                <a className="inline-block text-light bg-lightb/75 lg:bg-light/80 lg:text-[#000] rounded-3xl px-4 py-2  hover:border-b-[3px] focus-within:border-lightb focus-within:border-b-4" href="/contact">Contact Me</a>
            </li>
        </ul>
    </div>
</div>
</nav>

{/* <!--Container--> */}
<motion.div className="fixed top-20 left-0 right-0 h-[6px] bg-lightb/90 translate-x-0" style={{ scaleX: scrollYProgress }} />
<div className="container w-full md:max-w-3xl mx-auto pt-20">

<div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">

    {/* <!--Title--> */}
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">{post?.title}</h1>
            <time
            dateTime={post?.publishedAt}
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
            <h3 className='text-lg mt-4 text-black/90'>Published At <span className='ml-1 text-black/70 text-[1.15rem]'>{post?.date}</span></h3>
            </time>
            <div className="mb-8">
            <PortableText
                        className=''
                        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                        content={post?.content}
                        serializers={{
                            h1: (props) => {
                                return <h1 className='text-5xl font-medium my-5' {...props} />
                            },
                            h2: (props) => {
                                return <h2 className='text-4xl font-medium my-5' {...props} />
                            },
                            h3: (props) => {
                                return <h3 className='text-3xl font-medium my-5' {...props} />
                            },
                            h4: (props) => {
                                return <h4 className='text-2xl font-medium my-5' {...props} />
                            },
                            h5: (props) => {
                                return <h5 className='text-xl font-medium my-5' {...props} />
                            },
                            li: ({ children }) => {
                                return <li className='ml-4 list-disc'>{children}</li>
                            },
                            link: ({ href, children }) => (
                                <a href={href} className='text-black font-semibold hover:underline'>{children}</a>
                            ),
                        }}
                    />
                    </div>
                    <hr className='bg-lightb mb-4' />
                    <div className="mb-10">
                        {submitted? <div className="text-center">
                            <h2 className='text-xl font-bold text-lightb'>Thank You For Submitting !</h2>
                            <p className='font-medium text-lightb/80'>This Changes Will Be Live Soon . . .</p>
                        </div>
                        :
                        <div className="">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize dark:text-white lg:text-5xl">Leave Comment Here</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
                    <div className="-mx-2 md:items-center md:flex">
                    <input {...register("_id")} type="hidden" name="_id" value={post?._id} />
                        <div className="flex-1 px-2">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                            <input {...register("name", { required: true })} type="text" name='name' placeholder="Mustafa azad" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="flex-1 px-2 mt-4 md:mt-0">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input {...register("email", { required: true })} type="email" name='email' placeholder="mustafa@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div className="w-full mt-4">
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Comment</label>
                        <textarea {...register("comment", { required: true })} className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" name="comment" placeholder="Type Your Comment Here . . . ."></textarea>
                    </div>
                    {/* errors if any feild is not proper */}
                    <div className="flex flex-col p-5">
                            {errors.name && (
                                <span className="text-red-500">⚠️ The Name Field is Required</span>
                            )}
                            {errors.comment && (
                                <span className="text-red-500">⚠️ The Comment Field is Required</span>
                            )}
                            {errors.email && (
                                <span className="text-red-500">⚠️ The Email Field is Required</span>
                            )}
                        </div>


                    <input type='submit' className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-lightb rounded-md hover:bg-lightb/90 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"/>
                        
                </form>
            </div>
            }
            </div>

            {/* comments approved  */}
            <div className="flex flex-col py-10 my-10 px-2 font-semibold shadow shadow-lightb/50 space-y-2">
                <h3 className='text-4xl'>Comments</h3>
                <hr className='pb-2' />
                {
                    post?.comments && post?.comments.map((comment,idx) => {
                        return (
                            <div className="" key={idx}>
                                <p><span className='text-lightb/90 font-semibold'>{comment.name}:</span> {comment.comment}</p>
                            </div>
                        )
                    })
                }
            </div>
</div>
</div>
    </>
  )
}

export const getStaticPaths = async () => {
    const query = getPosts

    const posts = await sanityClient.fetch(query);
    const paths = posts.map(post => (
        {
            params: {
                slug: post?.slug.current
            }
        }
    ))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params }) => {
    const query = getCurrentPost

    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    });

    if (!post) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post,
        },
        revalidate: 60, //updates old cache after 60sec
    }
}
    export default Post