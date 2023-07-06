import React from "react";
import Image from "next/image";
import { urlFor } from "../../sanity";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const Card = ({ card }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<>
			<div className="grid grid-cols-3 sm:grid-cols-4 w-[90%] mx-auto h-[55vh] overflow-y-scroll">
				{card.map((value, idx) => {
					return (
						<motion.div
							ref={ref}
							animate={{
								opacity: isInView ? [0, 1] : [0, 0],
								y: isInView ? [50, 0] : [50, 50],
							}}
							transition={{ duration: 1.2, delay: 0.2 }}
							className="w-20 h-20 my-2 mx-auto"
							key={idx}
						>
							<div
								className="flex p-3 rounded-full"
								style={{ backgroundColor: value.color }}
							>
								<Image
									width={60}
									height={60}
									loading="lazy"
									src={urlFor(value?.skillimg).url()}
									alt={value.name}
								/>
							</div>
							<h3 className="text-center text-sm relative mt-[-1rem] dark:bg-black bg-white dark:text-white  rounded-3xl">
								{value.name}
							</h3>
						</motion.div>
					);
				})}
			</div>
		</>
	);
};

export default Card;
