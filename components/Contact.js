import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const Contact = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<>
			<div className="bg-[#fff] dark:bg-black">
				<div className="flex justify-center h-screen">
					<motion.div ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0]}} transition={{duration : 1}} className="hidden bg-cover lg:block lg:w-2/3 cont">
						<div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
							<div>
								<motion.h2 ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1.2,delay : 0.3}} className="text-5xl font-bold text-white">Contact Us</motion.h2>

								<motion.p ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1.2, delay : 0.4}} className="max-w-xl mt-3 text-light text-base">
									Have a question or want to ask Something? I'm always available
									for you! Fill in the form and I will come back to you shortly.
								</motion.p>
							</div>
						</div>
					</motion.div>

					<div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
						<div className="flex-1">
							<div className="text-center">
								<motion.h2 ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1.2, delay : 0.4}} className="text-4xl font-bold text-center text-gray-700 dark:text-white">
									Let's Catch Up
								</motion.h2>

								<motion.p ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1.2, delay : 0.45}} className="mt-3 text-gray-500 dark:text-gray-300">
									Make Sure You've Filled Form Properly
								</motion.p>
							</div>

							<div className="mt-8">
								<form action="https://formsubmit.co/mustafaazad533@gmail.com" method="POST">
									<motion.div ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1.2, delay : 0.5}}>
                                    <input type="hidden" name="_subject" value="New Message From Website . . .!"/>
										<label
											htmlFor="email"
											className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
										>
											Email Address
										</label>
										<input
											type="email"
											name="email"
											id="email"
                                            required
											placeholder="Your Email Please . . ."
											className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
										/>
									</motion.div>

									<motion.div ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1.2, delay : 0.55}} className="mt-4">
										<label
											htmlFor="Name"
											className="text-sm text-gray-600 dark:text-gray-200"
										>
											Name
										</label>
										<input
											type="text"
											name="name"
											placeholder="Your Name"
                                            required
											className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
										/>
									</motion.div>

									<motion.div ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1.2, delay : 0.6}} className="mt-4">
										<label
											htmlFor="message"
											className="text-sm text-gray-600 dark:text-gray-200"
										>
											Message
										</label>
										<textarea
											type="text"
											name="message"
											placeholder="Message . . . ."
                                            required
											className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
										/>
									</motion.div>
                                    <input type="text" name="_honey" className="hidden"/>
                                    {/* <input type="hidden" name="_captcha" value="true"/> */}
                                    <input type="hidden" name="_autoresponse" value={`Hi! You Have Succesfully Message Me, I Will Contact You Soon`}/>
                                    <input type="hidden" name="_template" value="table"/>
									<input type="hidden" name="_next" value="http://localhost:3000/thanks"/>

									<motion.div ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1.2, delay : 0.7}} className="mt-6">
										<button
											className="w-full font-semibold text-lg px-4 py-2 tracking-wide text-white dark:text-black transition-colors duration-200 transform bg-lightb/75 dark:bg-darko/75 rounded-3xl hover:bg-lightb/90 dark:hover:bg-darko/90  focus:outline-none focus:bg-lightb/80 focus:ring focus:ring-lightb focus:ring-opacity-50"
											type="submit"
										>
											Submit
										</button>
									</motion.div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
