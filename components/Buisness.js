import React from "react";
import Image from "next/image";

const Buisness = () => {
	// const mentor = [
	// 	{name : "Mentor Name" , desc : "Lorem ipsum dolor sit amet consectetur elit. Teneturdeserunt ducimus quidem itaque." , img : "/aboutdark.png"},
	// 	{name : "Mentor Name" , desc : "Lorem ipsum dolor sit amet consectetur elit. Teneturdeserunt ducimus quidem itaque." , img : "/aboutdark.png"},
	// 	{name : "Mentor Name" , desc : "Lorem ipsum dolor sit amet consectetur elit. Teneturdeserunt ducimus quidem itaque." , img : "/aboutdark.png"},
	// 	{name : "Mentor Name" , desc : "Lorem ipsum dolor sit amet consectetur elit. Teneturdeserunt ducimus quidem itaque." , img : "/aboutdark.png"},
	// ]
	const tutor = [
		{
			name: "Testimonial",
			desc: "Lorem ipsum dolor sit amet consectetur elit. Teneturdeserunt ducimus quidem itaque.",
			img: "/aboutdark.png",
		},
	];
	return (
		<>
			<div className="max-w-7xl flex flex-col justify-center space-y-5">
				<h3 className="text-3xl sm:text-4xl bg-brand-500 w-full text-center font-bold">
					Testimonial
				</h3>
				<p className="sm:text-base w-5/6 text-sm sm:w-4/6 text-center mx-auto">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
					repellendus est blanditiis consequuntur iusto nostrum consectetur
					voluptate ratione, exercitationem sint maxime nisi incidunt? A
					voluptate deleniti eligendi odit fugit nemo tempore atque nisi ab!
				</p>
			</div>
			{tutor.map((value,idx) => {
				return(
					<>
					<div className="grid grid-col-1 rounded-2xl h-[50vh] bg-black/10 lg:w-[25vw] sm:w-[40vw] w-[80%] snap-center mx-auto my-6" key={idx}>
				<div className="mt-[5%] ml-[5%]">
				<svg width={30} height={30} viewBox="0 0 448 512">
						<path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/>
					</svg>
				</div>
				<h3 className="w-[83%] font-medium my-2 mx-auto pb-[5vh]">
					{value.desc}
				</h3>
				<div className="mx-auto relative bg-[#fff] rounded-full px-2 py-1">
					<Image src={value.img} width={60} height={60} alt="comma" />
				</div>
				<div className="mb-10">
				<svg viewBox="0 0 1440 320" width={"100%"}>
				<path fill="#0099ff" fill-opacity="1" d="M0,32L60,80C120,128,240,224,360,240C480,256,600,192,720,144C840,96,960,64,1080,74.7C1200,85,1320,139,1380,165.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
				</svg>
				<div className="bg-[#0099ff] w-full h-[60%]">
					<h3 className="text-center text-[#fff] font-semibold text-xl">{value.name}</h3>
					<div className="flex space-x-4 justify-center my-2">
					<svg fill="#fff" viewBox="0 0 512 512" width={20} height={20}>
					<path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
					</svg>
					<svg fill="#fff" width={20} height={20} viewBox="0 0 512 512">
						<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
					</svg>
					<svg fill="#fff" width={20} height={20} viewBox="0 0 448 512">
						<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
					</svg>
					</div>
				</div>
				</div>
			</div>
					</>
				)
			})}
			
			{/* <div id="indicators-carousel" class="relative" data-carousel="static">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="/aboutdark.png" class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/aboutdark.png" class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full bg-black" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-black" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-black" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-black" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-black" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black dark:bg-black/50 group-hover:bg-black/20 dark:group-hover:bg-black/30 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-black/50 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black dark:bg-black/50 group-hover:bg-black/20 dark:group-hover:bg-black/30 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-black/50 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div> */}
			{/* <h3 className="text-3xl sm:text-4xl bg-brand-500 w-full text-center font-bold py-8 bg-lightb">
				Our Mentors
				</h3>
			<div className="grid lg:grid-cols-2 grid-cols-1 mx-[8%]">
					{mentor.map((value,idx) => {
						return(
						<>
							<div className="bg-grey-300 flex flex-col-reverse md:flex-row my-[5%] mx-auto md:mx-[5%]">
							<div className="bg-lightb w-[75vw] md:rounded-none lg:h-[25vh] h-[30vh] overflow-hidden text-light" key={idx}>
								<h3 className="font-semibold text-left mx-4 my-3 text-light">{value.name}</h3>
								<h4 className="font-normal mx-4">{value.desc}</h4>
							</div>
							<div className="md:w-[70vw] hover:scale-110 ease-in-out w-[75vw] lg:h-[25vh] h-[30vh] bg-purple md:rounded-r-3xl"><Image loading="lazy" src={value.img} width={200} height={180} /></div>
							</div>
						</>
						)
					})}
			</div> */}
		</>
	);
};

export default Buisness;
