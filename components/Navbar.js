import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Navbar = () => {
	const [dark, setDark] = useState(false);
	const route = useRouter();

	useEffect(() => {
		try {
			const savedTheme = localStorage.getItem("theme");
			if (
				savedTheme === "dark" ||
				(!savedTheme &&
					window.matchMedia("(prefers-color-scheme: dark)").matches)
			) {
				setDark(true);
				document.documentElement.classList.add("dark");
			} else {
				setDark(false);
				document.documentElement.classList.remove("dark");
			}
		} catch (error) {
			console.error("Error accessing localStorage:", error);
		}
	}, []);

	const toggleDarkMode = () => {
		try {
			const newTheme = dark ? "light" : "dark";
			localStorage.setItem("theme", newTheme);
			setDark(!dark);

			if (newTheme === "dark") {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
		} catch (error) {
			console.error("Error accessing localStorage:", error);
		}
	};

	const navLinks = [
		{ label: "Home", path: "/" },
		{ label: "About", path: "/about" },
		{ label: "Achievement", path: "/achivement" },
		{ label: "Projects", path: "/project" },
		{ label: "Blogs", path: "/blogs" },
	];

	return (
		<nav className={`dark:bg-black bg-[#fff] px-4`}>
			<div className="flex justify-between items-center">
				{/* Logo Image */}
				<motion.div
					animate={{ opacity: [0, 1], x: [-50, 0] }}
					transition={{ duration: 0.8, bounce: 1, delay: 0.1 }}
					className="my-[0.1rem] cursor-pointer"
				>
					<Link href="/">
						<Image
							src={dark ? "/logolight.png" : "/logodark.png"}
							loading="eager"
							width={80}
							height={80}
							alt="Logo"
						/>
					</Link>
				</motion.div>
				{/* Links In Navbar */}
				<motion.ul
					animate={{ opacity: [0, 1], x: [-200, 0] }}
					transition={{ duration: 1, bounce: 1, delay: 0.2 }}
					className="lg:flex hidden space-x-6 font-semibold my-7"
				>
					{navLinks.map((link, idx) => (
						<li
							className={`dark:text-light hover:dark:text-darko hover:border-b-[3px] hover:text-lightb focus-within:border-lightb dark:hover:border-darko focus-within:border-b-4 dark:focus-within:border-darko h-6`}
							key={idx}
						>
							<Link href={link.path}>
								<a>{link.label}</a>
							</Link>
						</li>
					))}
				</motion.ul>
				{/* Contact Button and Dark/Light Mode Toggle */}
				<motion.div
					animate={{ opacity: [0, 1], x: [-500, 0] }}
					transition={{ duration: 1, bounce: 1, delay: 0.3 }}
					className="flex space-x-5 items-center"
				>
					<button
						name="dark-mode-toggle"
						className={`w-6 h-6 cursor-pointer dark:bg-black rounded-full bg-[#fff] dark:shadow-8xl shadow-9xl my-7`}
						onClick={toggleDarkMode}
					>
						<div className="mt-[4px]">
							<Image
								src={dark ? "/sun.png" : "/moon.png"}
								width={20.96}
								height={19.96}
								alt={dark ? "Sun" : "Moon"}
							/>
						</div>
					</button>
					<div className="font-bold hidden lg:block bg-lightb dark:bg-darko hover:text-lightb hover:bg-[#fff] dark:hover:bg-black text-light hover:dark:text-darko dark:text-black cursor-pointer rounded-full p-2 hover:border-[3px] border-[3px] border-[#fff] dark:border-darko hover:border-lightb dark:hover:border-darko focus-within:border-[3px] focus-within:border-lightb dark:focus-within:border-darko transition ease-in-out my-auto delay-200">
						<Link href="/contact">Contact Me</Link>
					</div>
					<button
						name="drawer-button"
						className="block lg:hidden"
						data-drawer-target="drawer-navigation"
						data-drawer-show="drawer-navigation"
						aria-controls="drawer-navigation"
					>
						<svg width="25" height="25" viewBox="0 0 96 82" fill="none">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0 6.82796C0 3.05702 3.05702 0 6.82796 0H88.7635C92.5346 0 95.5915 3.05702 95.5915 6.82796C95.5915 10.5989 92.5346 13.6559 88.7635 13.6559H6.82796C3.05702 13.6559 0 10.5989 0 6.82796Z"
								fill={dark ? "#F1F3CE" : "#000"}
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M0 40.9678C0 37.1968 3.05702 34.1398 6.82796 34.1398H88.7635C92.5346 34.1398 95.5915 37.1968 95.5915 40.9678C95.5915 44.7389 92.5346 47.7957 88.7635 47.7957H6.82796C3.05702 47.7957 0 44.7389 0 40.9678Z"
								fill={dark ? "#F1F3CE" : "#000"}
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M40.9678 75.1076C40.9678 71.3365 44.0248 68.2796 47.7957 68.2796H88.7635C92.5346 68.2796 95.5915 71.3365 95.5915 75.1076C95.5915 78.8787 92.5346 81.9356 88.7635 81.9356H47.7957C44.0248 81.9356 40.9678 78.8787 40.9678 75.1076Z"
								fill={dark ? "#F1F3CE" : "#000"}
							/>
						</svg>
					</button>
				</motion.div>
			</div>
		</nav>
	);
};

export default Navbar;
