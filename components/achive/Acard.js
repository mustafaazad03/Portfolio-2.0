import React from "react";
import { urlFor } from "../../sanity";
const Acard = ({cdata}) => {
	return (
		<>
			<h3 className="font-semibold text-[2.5rem] dark:text-light text-center mt-4">
				<span className="text-5xl text-lightb dark:text-darko font-bold">Work</span> With ...
			</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:w-[90vw] dark:text-light xl:mx-auto w-[90vw] mx-auto dark:space-x-2 sm:w-full sm:mx-auto h-[50vh] overflow-scroll overflow-x-hidden dark:smain main dark:pr-6 pr-8">
				{cdata.map((value,idx) => (
                    <div className="max-w-md py-4 px-8 bg-white dark:bg-black dark:shadow-light dark:shadow shadow-lg rounded-lg my-20 mx-auto" key={idx}>
                        <div className="flex justify-center md:justify-end -mt-16">
                            <img
                                className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                                src={urlFor(value?.logo).url()}
                            />
                        </div>
                        <div>
                            <h2 className="text-gray-800 dark:text-light/95 text-3xl font-semibold">{value.name}</h2>
                            <p className="mt-2 text-gray-600">
                                {value.desc}
                            </p>
                        </div>
                        <div className="flex justify-end mt-4">
                            <h3 className="w-fit -mr-8 pr-8 rounded-l-3xl pl-3 py-[2px] bg-lightb text-[#fff]">
                                {value.year}
                            </h3>
                        </div>
				</div>
                ))}
			</div>

		</>
	);
};

export default Acard;
