import Image from "next/image";
import Link from "next/link";
import React from "react";
import Newsletter from "./utils/Newsletter";
export const Footer = ({ data }) => {
	const navlink = [
		{ name: "Home", link: "/" },
		{ name: "About", link: "/about" },
		{ name: "Achivement", link: "/achivement" },
		{ name: "Projects", link: "/project" },
		{ name: "Blog", link: "/blogs" },
	];
	const { para, address, phone } = data;
	return (
		<div className="dark:bg-black bg-light">
			<div className="bg-gradient-to-b from-[#fff] dark:from-black dark:to-darko/20 to-lightb/50">
				<div className="grid lg:grid-cols-4 rounded-t-[4rem] sm:grid-cols-2 grid-cols-1  pb-10">
					<div className="">
						<div className="ml-12">
							<div className="block w-20 h-20 dark:hidden">
								<Image
									width="100%"
									height="100%"
									className="w-full h-full"
									src="/logodark.png"
									alt="Logo Dark"
								/>
							</div>
							<div className="hidden w-20 h-20 dark:block">
								<Image
									width="100%"
									height="100%"
									className="w-full h-full "
									src="/logolight.png"
									alt="Logo Light"
								/>
							</div>
							<p className="dark:text-light w-[14rem] leading-7">{para}</p>
						</div>
					</div>
					<div className="ml-12">
						<h3 className="font-semibold text-2xl mt-5 dark:text-light">
							Address
						</h3>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.6178784365798!2d75.80960861494827!3d22.705264685114713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdd7acfafc65%3A0x2844ae94d8305a5d!2sNoorani%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452006!5e0!3m2!1sen!2sin!4v1666870243876!5m2!1sen!2sin"
							width="55%"
							height="30%"
							style={{ border: 0, marginTop: 25 }}
							allowFullScreen={true}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
						<p className="font-medium mt-1 w-[55%] leading-7 dark:text-light">
							{address}
							<br /> 452002
						</p>
					</div>
					<div className="ml-12">
						<h3 className="font-semibold text-2xl mt-5 dark:text-light">
							Links
						</h3>
						<div className="flex flex-col mt-6 space-y-3">
							{navlink.map((value, idx) => {
								return (
									<div
										className="font-medium dark:text-light hover:font-semibold hover:text-lightb dark:hover:text-darko hover:border-b-2 hover:border-lightb dark:hover:border-darko w-1/2"
										key={idx}
									>
										<Link href={value.link}>{value.name}</Link>
									</div>
								);
							})}
						</div>
					</div>
					{/* newslatter form section  */}
					<div className="mt-20 lg:-ml-10 w-full ml-12 sm:ml-0 mx-auto">
						<Newsletter />
					</div>
				</div>
				<hr className="border-lightb  sm:mx-auto dark:border-light" />
				<div className="py-4 lg:py-0">
					<div className="lg:w-11/12 mx-auto lg:py-6 sm:flex sm:justify-between justify-evenly">
						<span className="text-base text-dark sm:text-center dark:text-light text-center">
							© {new Date().getFullYear()}{" "}
							<a href="/" className="hover:underline font-bold">
								Mustafa Azad Portfolio
							</a>
							. All Rights Reserved.
						</span>

						<div className="flex space-x-8 mr-10 justify-center">
							<Link href="https://github.com/mustafaazad03">
								<svg
									className="w-6 h-6 hover:-translate-y-2 dark:fill-[#fff]"
									viewBox="0 0 496 512"
								>
									<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
								</svg>
							</Link>
							<Link href="https://www.instagram.com/mustafaazad03/">
								<svg
									className="w-6 h-6 hover:-translate-y-2 dark:fill-[#fff]"
									viewBox="0 0 448 512"
								>
									<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
								</svg>
							</Link>
							<Link href="https://www.linkedin.com/in/mustafaazad03">
								<svg
									className="w-6 h-6 hover:-translate-y-2 dark:fill-[#fff]"
									viewBox="0 0 448 512"
								>
									<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
