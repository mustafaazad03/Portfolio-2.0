import React from "react";
import { urlFor } from "../../sanity";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const Acard = ({cdata}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
	return (
		<>
			<motion.h3 ref={ref} animate={{ opacity :isInView ? [0,1]: [0,0], y: isInView ? [50,0]: [50,50]}} transition={{duration : 1}} className="font-semibold text-[2.5rem] dark:text-light text-center mt-4">
				<span className="text-5xl text-lightb dark:text-darko font-bold">Work</span> With ...
			</motion.h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:w-[90vw] dark:text-light xl:mx-auto w-[95vw] md:w-[90vw] mx-auto dark:space-x-2 sm:w-full sm:mx-auto h-[60vh] md:h-[40vh] overflow-scroll overflow-x-hidden dark:smain main dark:pr-6 pr-8">
				{cdata.map((value,idx) => (
                    <div className="max-w-md py-4 px-8 bg-white dark:bg-black dark:shadow-light dark:shadow shadow-lg rounded-lg my-20 mx-auto" key={idx}>
                        <motion.div animate={{ opacity : [0,1], scale:[0,1]}} transition={{duration : 1.2, delay : 0.1}} className="flex justify-center md:justify-end -mt-16">
                            <img
                                className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                                src={urlFor(value?.logo).url()}
                            />
                        </motion.div>
                        <div>
                            <motion.h2 animate={{ opacity :[0,1], y: [50,0]}} transition={{duration : 1.2, delay : 0.2}} className="text-gray-800 dark:text-light/95 text-3xl font-semibold">{value.name}</motion.h2>
                            <motion.p animate={{ opacity :[0,1], y: [50,0]}} transition={{duration : 1.2, delay : 0.26}} className="mt-2 text-gray-600">
                                {value.desc}
                            </motion.p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <motion.h3 animate={{ opacity :[0,1], scale:[0,1]}} transition={{duration : 1.2, delay : 0.35}} className="w-fit -mr-8 pr-8 rounded-l-3xl pl-3 py-[2px] bg-lightb text-[#fff]">
                                {value.year}
                            </motion.h3>
                        </div>
				</div>
                ))}
			</div>

		</>
	);
};

export default Acard;
