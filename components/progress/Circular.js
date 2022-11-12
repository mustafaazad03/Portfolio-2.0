import React from "react";

const Circular = () => {
	return (
		<>
            <div className="space-y-10">
                <div className="">
            <svg
				width="150"
				height="150"
				viewBox="0 0 250 250"
				fill="none"
                className="mx-auto"
				
			>
				<circle cx="125" cy="125" r="125" className="fill-lightb dark:fill-darko" />
				<circle cx="125" cy="125" r="100" className="dark:fill-black fill-[#fff]" />
				<path
					d="M86.0142 110.909V140H79.8636V116.747H79.6932L73.0312 120.923V115.469L80.233 110.909H86.0142ZM104.335 140.639C101.891 140.63 99.7891 140.028 98.0277 138.835C96.2758 137.642 94.9264 135.914 93.9794 133.651C93.0419 131.387 92.5779 128.665 92.5874 125.483C92.5874 122.311 93.0561 119.607 93.9936 117.372C94.9406 115.137 96.29 113.437 98.0419 112.273C99.8033 111.098 101.901 110.511 104.335 110.511C106.768 110.511 108.861 111.098 110.613 112.273C112.374 113.447 113.728 115.152 114.675 117.386C115.622 119.612 116.091 122.311 116.082 125.483C116.082 128.674 115.608 131.402 114.661 133.665C113.724 135.928 112.379 137.656 110.627 138.849C108.875 140.043 106.778 140.639 104.335 140.639ZM104.335 135.54C106.001 135.54 107.332 134.702 108.326 133.026C109.32 131.349 109.813 128.835 109.803 125.483C109.803 123.277 109.576 121.439 109.121 119.972C108.676 118.504 108.042 117.401 107.218 116.662C106.404 115.923 105.442 115.554 104.335 115.554C102.677 115.554 101.352 116.383 100.357 118.04C99.3629 119.697 98.861 122.178 98.8516 125.483C98.8516 127.718 99.0741 129.583 99.5192 131.08C99.9737 132.566 100.613 133.684 101.437 134.432C102.261 135.17 103.227 135.54 104.335 135.54ZM131.874 140.639C129.43 140.63 127.328 140.028 125.567 138.835C123.815 137.642 122.465 135.914 121.518 133.651C120.581 131.387 120.117 128.665 120.126 125.483C120.126 122.311 120.595 119.607 121.533 117.372C122.48 115.137 123.829 113.437 125.581 112.273C127.342 111.098 129.44 110.511 131.874 110.511C134.307 110.511 136.4 111.098 138.152 112.273C139.913 113.447 141.268 115.152 142.214 117.386C143.161 119.612 143.63 122.311 143.621 125.483C143.621 128.674 143.147 131.402 142.2 133.665C141.263 135.928 139.918 137.656 138.166 138.849C136.414 140.043 134.317 140.639 131.874 140.639ZM131.874 135.54C133.54 135.54 134.871 134.702 135.865 133.026C136.859 131.349 137.352 128.835 137.342 125.483C137.342 123.277 137.115 121.439 136.661 119.972C136.215 118.504 135.581 117.401 134.757 116.662C133.943 115.923 132.982 115.554 131.874 115.554C130.216 115.554 128.891 116.383 127.896 118.04C126.902 119.697 126.4 122.178 126.391 125.483C126.391 127.718 126.613 129.583 127.058 131.08C127.513 132.566 128.152 133.684 128.976 134.432C129.8 135.17 130.766 135.54 131.874 135.54ZM163.93 134.545V133.011C163.93 131.847 164.176 130.777 164.668 129.801C165.17 128.816 165.895 128.03 166.842 127.443C167.798 126.847 168.963 126.548 170.336 126.548C171.728 126.548 172.897 126.842 173.844 127.429C174.801 128.016 175.521 128.802 176.004 129.787C176.496 130.762 176.742 131.837 176.742 133.011V134.545C176.742 135.71 176.496 136.785 176.004 137.77C175.511 138.745 174.787 139.527 173.83 140.114C172.874 140.71 171.709 141.009 170.336 141.009C168.944 141.009 167.774 140.71 166.827 140.114C165.88 139.527 165.161 138.745 164.668 137.77C164.176 136.785 163.93 135.71 163.93 134.545ZM168.063 133.011V134.545C168.063 135.218 168.224 135.852 168.546 136.449C168.878 137.045 169.474 137.344 170.336 137.344C171.198 137.344 171.785 137.05 172.097 136.463C172.419 135.876 172.58 135.237 172.58 134.545V133.011C172.58 132.32 172.429 131.676 172.126 131.08C171.823 130.483 171.226 130.185 170.336 130.185C169.484 130.185 168.892 130.483 168.56 131.08C168.229 131.676 168.063 132.32 168.063 133.011ZM149.001 117.898V116.364C149.001 115.189 149.252 114.115 149.754 113.139C150.255 112.154 150.98 111.368 151.927 110.781C152.883 110.194 154.039 109.901 155.393 109.901C156.794 109.901 157.969 110.194 158.915 110.781C159.862 111.368 160.582 112.154 161.075 113.139C161.567 114.115 161.813 115.189 161.813 116.364V117.898C161.813 119.072 161.562 120.147 161.06 121.122C160.568 122.098 159.844 122.879 158.887 123.466C157.94 124.044 156.775 124.332 155.393 124.332C154.01 124.332 152.841 124.039 151.884 123.452C150.937 122.855 150.218 122.074 149.725 121.108C149.242 120.133 149.001 119.062 149.001 117.898ZM153.163 116.364V117.898C153.163 118.589 153.324 119.228 153.646 119.815C153.977 120.402 154.559 120.696 155.393 120.696C156.264 120.696 156.856 120.402 157.168 119.815C157.49 119.228 157.651 118.589 157.651 117.898V116.364C157.651 115.672 157.5 115.028 157.197 114.432C156.894 113.835 156.292 113.537 155.393 113.537C154.55 113.537 153.968 113.84 153.646 114.446C153.324 115.052 153.163 115.691 153.163 116.364ZM150.876 140L170.876 110.909H174.597L154.597 140H150.876Z"
					className="fill-black dark:fill-[#fff]"
				/>
			</svg>
                    <h3 className="font-semibold mt-2 text-lg text-center">Growth Mindset</h3>
                </div>
            <div className="lg:pt-8 xl:pt-0">
			<svg
				width="150"
				height="150"
				viewBox="0 0 250 250"
				fill="none"
                className="mx-auto"
				
			>
				<circle cx="125" cy="125" r="125" className="fill-lightb"  fillOpacity="0.5" />
				<path
					d="M51.5269 23.8729C27.4482 41.367 10.4018 66.8788 3.45376 95.8193C-3.49425 124.76 0.112122 155.23 13.6242 181.749C27.1363 208.268 49.6673 229.095 77.1647 240.485C104.662 251.875 135.321 253.079 163.627 243.882C191.933 234.685 216.029 215.689 231.58 190.312C247.131 164.935 253.117 134.842 248.461 105.445C243.805 76.049 228.813 49.2785 206.181 29.9491C183.549 10.6197 154.763 -7.58089e-05 125 4.05478e-10L125 125L51.5269 23.8729Z"
					className="fill-lightb dark:fill-darko"
				/>
				<circle cx="125" cy="125" r="100" className="dark:fill-black fill-[#fff]" />
				<path
					d="M94.8835 110.511C96.3797 110.511 97.8191 110.762 99.2017 111.264C100.594 111.766 101.834 112.566 102.923 113.665C104.022 114.763 104.888 116.222 105.523 118.04C106.167 119.848 106.493 122.069 106.503 124.702C106.503 127.173 106.223 129.38 105.665 131.321C105.116 133.253 104.325 134.896 103.293 136.25C102.26 137.604 101.015 138.636 99.5568 139.347C98.0985 140.047 96.4697 140.398 94.6705 140.398C92.7292 140.398 91.0152 140.024 89.5284 139.276C88.0417 138.518 86.8438 137.491 85.9347 136.193C85.035 134.886 84.4905 133.419 84.3011 131.79H90.3665C90.6032 132.85 91.1004 133.674 91.858 134.261C92.6155 134.839 93.553 135.128 94.6705 135.128C96.5644 135.128 98.0038 134.304 98.9886 132.656C99.9735 130.999 100.471 128.731 100.48 125.852H100.281C99.8456 126.705 99.2585 127.438 98.5199 128.054C97.7813 128.66 96.9337 129.129 95.9773 129.46C95.0303 129.792 94.0218 129.957 92.9517 129.957C91.2377 129.957 89.7083 129.555 88.3636 128.75C87.0189 127.945 85.9583 126.837 85.1818 125.426C84.4053 124.015 84.017 122.405 84.017 120.597C84.0076 118.646 84.4574 116.908 85.3665 115.384C86.2756 113.859 87.5445 112.666 89.1733 111.804C90.8116 110.933 92.715 110.502 94.8835 110.511ZM94.9261 115.341C93.9697 115.341 93.1174 115.568 92.3693 116.023C91.6307 116.477 91.0436 117.088 90.608 117.855C90.1818 118.622 89.9735 119.479 89.983 120.426C89.983 121.383 90.1913 122.244 90.608 123.011C91.0341 123.769 91.6117 124.375 92.3409 124.83C93.0795 125.275 93.9223 125.497 94.8693 125.497C95.5795 125.497 96.2377 125.365 96.8438 125.099C97.4498 124.834 97.9754 124.47 98.4205 124.006C98.875 123.532 99.2301 122.988 99.4858 122.372C99.7415 121.757 99.8693 121.103 99.8693 120.412C99.8598 119.493 99.642 118.651 99.2159 117.884C98.7898 117.116 98.2027 116.501 97.4545 116.037C96.7064 115.573 95.8636 115.341 94.9261 115.341ZM122.17 140.639C119.727 140.63 117.625 140.028 115.864 138.835C114.112 137.642 112.762 135.914 111.815 133.651C110.878 131.387 110.414 128.665 110.423 125.483C110.423 122.311 110.892 119.607 111.83 117.372C112.777 115.137 114.126 113.437 115.878 112.273C117.639 111.098 119.737 110.511 122.17 110.511C124.604 110.511 126.697 111.098 128.449 112.273C130.21 113.447 131.564 115.152 132.511 117.386C133.458 119.612 133.927 122.311 133.918 125.483C133.918 128.674 133.444 131.402 132.497 133.665C131.56 135.928 130.215 137.656 128.463 138.849C126.711 140.043 124.614 140.639 122.17 140.639ZM122.17 135.54C123.837 135.54 125.168 134.702 126.162 133.026C127.156 131.349 127.649 128.835 127.639 125.483C127.639 123.277 127.412 121.439 126.957 119.972C126.512 118.504 125.878 117.401 125.054 116.662C124.24 115.923 123.278 115.554 122.17 115.554C120.513 115.554 119.188 116.383 118.193 118.04C117.199 119.697 116.697 122.178 116.688 125.483C116.688 127.718 116.91 129.583 117.355 131.08C117.81 132.566 118.449 133.684 119.273 134.432C120.097 135.17 121.062 135.54 122.17 135.54ZM154.227 134.545V133.011C154.227 131.847 154.473 130.777 154.965 129.801C155.467 128.816 156.192 128.03 157.138 127.443C158.095 126.847 159.26 126.548 160.633 126.548C162.025 126.548 163.194 126.842 164.141 127.429C165.098 128.016 165.817 128.802 166.3 129.787C166.793 130.762 167.039 131.837 167.039 133.011V134.545C167.039 135.71 166.793 136.785 166.3 137.77C165.808 138.745 165.084 139.527 164.127 140.114C163.171 140.71 162.006 141.009 160.633 141.009C159.241 141.009 158.071 140.71 157.124 140.114C156.177 139.527 155.458 138.745 154.965 137.77C154.473 136.785 154.227 135.71 154.227 134.545ZM158.36 133.011V134.545C158.36 135.218 158.521 135.852 158.843 136.449C159.174 137.045 159.771 137.344 160.633 137.344C161.495 137.344 162.082 137.05 162.394 136.463C162.716 135.876 162.877 135.237 162.877 134.545V133.011C162.877 132.32 162.726 131.676 162.423 131.08C162.12 130.483 161.523 130.185 160.633 130.185C159.781 130.185 159.189 130.483 158.857 131.08C158.526 131.676 158.36 132.32 158.36 133.011ZM139.298 117.898V116.364C139.298 115.189 139.549 114.115 140.05 113.139C140.552 112.154 141.277 111.368 142.224 110.781C143.18 110.194 144.335 109.901 145.69 109.901C147.091 109.901 148.265 110.194 149.212 110.781C150.159 111.368 150.879 112.154 151.371 113.139C151.864 114.115 152.11 115.189 152.11 116.364V117.898C152.11 119.072 151.859 120.147 151.357 121.122C150.865 122.098 150.14 122.879 149.184 123.466C148.237 124.044 147.072 124.332 145.69 124.332C144.307 124.332 143.138 124.039 142.181 123.452C141.234 122.855 140.514 122.074 140.022 121.108C139.539 120.133 139.298 119.062 139.298 117.898ZM143.46 116.364V117.898C143.46 118.589 143.621 119.228 143.942 119.815C144.274 120.402 144.856 120.696 145.69 120.696C146.561 120.696 147.153 120.402 147.465 119.815C147.787 119.228 147.948 118.589 147.948 117.898V116.364C147.948 115.672 147.797 115.028 147.494 114.432C147.191 113.835 146.589 113.537 145.69 113.537C144.847 113.537 144.264 113.84 143.942 114.446C143.621 115.052 143.46 115.691 143.46 116.364ZM141.173 140L161.173 110.909H164.894L144.894 140H141.173Z"
					className="fill-black dark:fill-[#fff]"
				/>
			</svg>
            <h3 className="font-semibold mt-2 text-lg text-center">Problem Solving</h3>
            </div>
            </div>
            <div className="space-y-10">
            <div className="">
			<svg
				width="150"
				height="150"
				viewBox="0 0 250 250"
				fill="none"
                className="mx-auto"
				
			>
				<circle cx="125" cy="125" r="125" className="fill-lightb dark:fill-darko" />
				<circle cx="125" cy="125" r="100" className="dark:fill-black fill-[#fff]" />
				<path
					d="M86.0142 110.909V140H79.8636V116.747H79.6932L73.0312 120.923V115.469L80.233 110.909H86.0142ZM104.335 140.639C101.891 140.63 99.7891 140.028 98.0277 138.835C96.2758 137.642 94.9264 135.914 93.9794 133.651C93.0419 131.387 92.5779 128.665 92.5874 125.483C92.5874 122.311 93.0561 119.607 93.9936 117.372C94.9406 115.137 96.29 113.437 98.0419 112.273C99.8033 111.098 101.901 110.511 104.335 110.511C106.768 110.511 108.861 111.098 110.613 112.273C112.374 113.447 113.728 115.152 114.675 117.386C115.622 119.612 116.091 122.311 116.082 125.483C116.082 128.674 115.608 131.402 114.661 133.665C113.724 135.928 112.379 137.656 110.627 138.849C108.875 140.043 106.778 140.639 104.335 140.639ZM104.335 135.54C106.001 135.54 107.332 134.702 108.326 133.026C109.32 131.349 109.813 128.835 109.803 125.483C109.803 123.277 109.576 121.439 109.121 119.972C108.676 118.504 108.042 117.401 107.218 116.662C106.404 115.923 105.442 115.554 104.335 115.554C102.677 115.554 101.352 116.383 100.357 118.04C99.3629 119.697 98.861 122.178 98.8516 125.483C98.8516 127.718 99.0741 129.583 99.5192 131.08C99.9737 132.566 100.613 133.684 101.437 134.432C102.261 135.17 103.227 135.54 104.335 135.54ZM131.874 140.639C129.43 140.63 127.328 140.028 125.567 138.835C123.815 137.642 122.465 135.914 121.518 133.651C120.581 131.387 120.117 128.665 120.126 125.483C120.126 122.311 120.595 119.607 121.533 117.372C122.48 115.137 123.829 113.437 125.581 112.273C127.342 111.098 129.44 110.511 131.874 110.511C134.307 110.511 136.4 111.098 138.152 112.273C139.913 113.447 141.268 115.152 142.214 117.386C143.161 119.612 143.63 122.311 143.621 125.483C143.621 128.674 143.147 131.402 142.2 133.665C141.263 135.928 139.918 137.656 138.166 138.849C136.414 140.043 134.317 140.639 131.874 140.639ZM131.874 135.54C133.54 135.54 134.871 134.702 135.865 133.026C136.859 131.349 137.352 128.835 137.342 125.483C137.342 123.277 137.115 121.439 136.661 119.972C136.215 118.504 135.581 117.401 134.757 116.662C133.943 115.923 132.982 115.554 131.874 115.554C130.216 115.554 128.891 116.383 127.896 118.04C126.902 119.697 126.4 122.178 126.391 125.483C126.391 127.718 126.613 129.583 127.058 131.08C127.513 132.566 128.152 133.684 128.976 134.432C129.8 135.17 130.766 135.54 131.874 135.54ZM163.93 134.545V133.011C163.93 131.847 164.176 130.777 164.668 129.801C165.17 128.816 165.895 128.03 166.842 127.443C167.798 126.847 168.963 126.548 170.336 126.548C171.728 126.548 172.897 126.842 173.844 127.429C174.801 128.016 175.521 128.802 176.004 129.787C176.496 130.762 176.742 131.837 176.742 133.011V134.545C176.742 135.71 176.496 136.785 176.004 137.77C175.511 138.745 174.787 139.527 173.83 140.114C172.874 140.71 171.709 141.009 170.336 141.009C168.944 141.009 167.774 140.71 166.827 140.114C165.88 139.527 165.161 138.745 164.668 137.77C164.176 136.785 163.93 135.71 163.93 134.545ZM168.063 133.011V134.545C168.063 135.218 168.224 135.852 168.546 136.449C168.878 137.045 169.474 137.344 170.336 137.344C171.198 137.344 171.785 137.05 172.097 136.463C172.419 135.876 172.58 135.237 172.58 134.545V133.011C172.58 132.32 172.429 131.676 172.126 131.08C171.823 130.483 171.226 130.185 170.336 130.185C169.484 130.185 168.892 130.483 168.56 131.08C168.229 131.676 168.063 132.32 168.063 133.011ZM149.001 117.898V116.364C149.001 115.189 149.252 114.115 149.754 113.139C150.255 112.154 150.98 111.368 151.927 110.781C152.883 110.194 154.039 109.901 155.393 109.901C156.794 109.901 157.969 110.194 158.915 110.781C159.862 111.368 160.582 112.154 161.075 113.139C161.567 114.115 161.813 115.189 161.813 116.364V117.898C161.813 119.072 161.562 120.147 161.06 121.122C160.568 122.098 159.844 122.879 158.887 123.466C157.94 124.044 156.775 124.332 155.393 124.332C154.01 124.332 152.841 124.039 151.884 123.452C150.937 122.855 150.218 122.074 149.725 121.108C149.242 120.133 149.001 119.062 149.001 117.898ZM153.163 116.364V117.898C153.163 118.589 153.324 119.228 153.646 119.815C153.977 120.402 154.559 120.696 155.393 120.696C156.264 120.696 156.856 120.402 157.168 119.815C157.49 119.228 157.651 118.589 157.651 117.898V116.364C157.651 115.672 157.5 115.028 157.197 114.432C156.894 113.835 156.292 113.537 155.393 113.537C154.55 113.537 153.968 113.84 153.646 114.446C153.324 115.052 153.163 115.691 153.163 116.364ZM150.876 140L170.876 110.909H174.597L154.597 140H150.876Z"
					className="fill-black dark:fill-[#fff]"
				/>
			</svg>
                    <h3 className="font-semibold mt-2 text-lg text-center">Open For Feedback</h3>
                </div>
                <div className="">
			<svg
				width="150"
				height="150"
				viewBox="0 0 250 250"
				fill="none"
                className="mx-auto"
				
			>
				<circle cx="125" cy="125" r="125" className="fill-lightb" fillOpacity="0.5" />
				<path
					d="M125 0C151.397 3.14786e-07 177.117 8.35686 198.473 23.8729C219.829 39.3889 235.725 61.2674 243.882 86.3728C252.039 111.478 252.039 138.522 243.882 163.627C235.725 188.732 219.829 210.611 198.473 226.127C177.117 241.643 151.398 250 125 250C98.6027 250 72.8829 241.643 51.527 226.127C30.171 210.611 14.2753 188.733 6.11799 163.627C-2.03929 138.522 -2.03933 111.479 6.11787 86.3731L125 125L125 0Z"
					className="fill-lightb dark:fill-darko"
				/>
				<circle cx="125" cy="125" r="100" className="dark:fill-black fill-[#fff]" />
				<path
					d="M95.2102 140.398C93.0227 140.398 91.0767 140.043 89.3722 139.332C87.6771 138.613 86.3466 137.633 85.3807 136.392C84.4148 135.152 83.9318 133.745 83.9318 132.173C83.9318 130.961 84.2064 129.848 84.7557 128.835C85.3144 127.812 86.072 126.965 87.0284 126.293C87.9848 125.611 89.0549 125.175 90.2386 124.986V124.787C88.6856 124.474 87.4261 123.722 86.4602 122.528C85.4943 121.326 85.0114 119.929 85.0114 118.338C85.0114 116.832 85.4517 115.492 86.3324 114.318C87.2131 113.134 88.4205 112.206 89.9545 111.534C91.4981 110.852 93.25 110.511 95.2102 110.511C97.1705 110.511 98.9176 110.852 100.452 111.534C101.995 112.216 103.207 113.149 104.088 114.332C104.969 115.507 105.414 116.842 105.423 118.338C105.414 119.938 104.921 121.335 103.946 122.528C102.971 123.722 101.721 124.474 100.196 124.787V124.986C101.361 125.175 102.417 125.611 103.364 126.293C104.32 126.965 105.078 127.812 105.636 128.835C106.205 129.848 106.493 130.961 106.503 132.173C106.493 133.745 106.006 135.152 105.04 136.392C104.074 137.633 102.739 138.613 101.034 139.332C99.339 140.043 97.3977 140.398 95.2102 140.398ZM95.2102 135.881C96.1856 135.881 97.0379 135.705 97.767 135.355C98.4962 134.995 99.0644 134.503 99.4716 133.878C99.8883 133.243 100.097 132.514 100.097 131.69C100.097 130.848 99.8835 130.104 99.4574 129.46C99.0313 128.807 98.4536 128.295 97.7244 127.926C96.9953 127.547 96.1572 127.358 95.2102 127.358C94.2727 127.358 93.4347 127.547 92.696 127.926C91.9574 128.295 91.375 128.807 90.9489 129.46C90.5322 130.104 90.3239 130.848 90.3239 131.69C90.3239 132.514 90.5275 133.243 90.9347 133.878C91.3419 134.503 91.9148 134.995 92.6534 135.355C93.392 135.705 94.2443 135.881 95.2102 135.881ZM95.2102 122.884C96.0246 122.884 96.7491 122.718 97.3835 122.386C98.018 122.055 98.5152 121.596 98.875 121.009C99.2348 120.421 99.4148 119.744 99.4148 118.977C99.4148 118.22 99.2348 117.557 98.875 116.989C98.5152 116.411 98.0227 115.961 97.3977 115.639C96.7727 115.308 96.0436 115.142 95.2102 115.142C94.3864 115.142 93.6572 115.308 93.0227 115.639C92.3883 115.961 91.8911 116.411 91.5312 116.989C91.1809 117.557 91.0057 118.22 91.0057 118.977C91.0057 119.744 91.1856 120.421 91.5455 121.009C91.9053 121.596 92.4025 122.055 93.0369 122.386C93.6714 122.718 94.3958 122.884 95.2102 122.884ZM122.21 140.639C119.766 140.63 117.664 140.028 115.903 138.835C114.151 137.642 112.801 135.914 111.854 133.651C110.917 131.387 110.453 128.665 110.462 125.483C110.462 122.311 110.931 119.607 111.869 117.372C112.816 115.137 114.165 113.437 115.917 112.273C117.678 111.098 119.776 110.511 122.21 110.511C124.643 110.511 126.736 111.098 128.488 112.273C130.249 113.447 131.603 115.152 132.55 117.386C133.497 119.612 133.966 122.311 133.957 125.483C133.957 128.674 133.483 131.402 132.536 133.665C131.599 135.928 130.254 137.656 128.502 138.849C126.75 140.043 124.653 140.639 122.21 140.639ZM122.21 135.54C123.876 135.54 125.207 134.702 126.201 133.026C127.195 131.349 127.688 128.835 127.678 125.483C127.678 123.277 127.451 121.439 126.996 119.972C126.551 118.504 125.917 117.401 125.093 116.662C124.279 115.923 123.317 115.554 122.21 115.554C120.552 115.554 119.227 116.383 118.232 118.04C117.238 119.697 116.736 122.178 116.727 125.483C116.727 127.718 116.949 129.583 117.394 131.08C117.849 132.566 118.488 133.684 119.312 134.432C120.136 135.17 121.102 135.54 122.21 135.54ZM154.266 134.545V133.011C154.266 131.847 154.512 130.777 155.004 129.801C155.506 128.816 156.231 128.03 157.178 127.443C158.134 126.847 159.299 126.548 160.672 126.548C162.064 126.548 163.233 126.842 164.18 127.429C165.137 128.016 165.857 128.802 166.339 129.787C166.832 130.762 167.078 131.837 167.078 133.011V134.545C167.078 135.71 166.832 136.785 166.339 137.77C165.847 138.745 165.123 139.527 164.166 140.114C163.21 140.71 162.045 141.009 160.672 141.009C159.28 141.009 158.11 140.71 157.163 140.114C156.216 139.527 155.497 138.745 155.004 137.77C154.512 136.785 154.266 135.71 154.266 134.545ZM158.399 133.011V134.545C158.399 135.218 158.56 135.852 158.882 136.449C159.214 137.045 159.81 137.344 160.672 137.344C161.534 137.344 162.121 137.05 162.433 136.463C162.755 135.876 162.916 135.237 162.916 134.545V133.011C162.916 132.32 162.765 131.676 162.462 131.08C162.159 130.483 161.562 130.185 160.672 130.185C159.82 130.185 159.228 130.483 158.896 131.08C158.565 131.676 158.399 132.32 158.399 133.011ZM139.337 117.898V116.364C139.337 115.189 139.588 114.115 140.089 113.139C140.591 112.154 141.316 111.368 142.263 110.781C143.219 110.194 144.375 109.901 145.729 109.901C147.13 109.901 148.304 110.194 149.251 110.781C150.198 111.368 150.918 112.154 151.411 113.139C151.903 114.115 152.149 115.189 152.149 116.364V117.898C152.149 119.072 151.898 120.147 151.396 121.122C150.904 122.098 150.179 122.879 149.223 123.466C148.276 124.044 147.111 124.332 145.729 124.332C144.346 124.332 143.177 124.039 142.22 123.452C141.273 122.855 140.554 122.074 140.061 121.108C139.578 120.133 139.337 119.062 139.337 117.898ZM143.499 116.364V117.898C143.499 118.589 143.66 119.228 143.982 119.815C144.313 120.402 144.895 120.696 145.729 120.696C146.6 120.696 147.192 120.402 147.504 119.815C147.826 119.228 147.987 118.589 147.987 117.898V116.364C147.987 115.672 147.836 115.028 147.533 114.432C147.23 113.835 146.628 113.537 145.729 113.537C144.886 113.537 144.304 113.84 143.982 114.446C143.66 115.052 143.499 115.691 143.499 116.364ZM141.212 140L161.212 110.909H164.933L144.933 140H141.212Z"
					className="fill-black dark:fill-[#fff]"
				/>
			</svg>
                    <h3 className="font-semibold mt-2 text-lg text-center">Time Management</h3>
                </div>
            </div>
            <div className="space-y-10 sm:space-y-0 lg:space-y-16 xl:space-y-10 sm:w-[100vw] lg:w-auto sm:grid lg:block sm:grid-cols-2">

            <div className="">
            <svg width="150" height="150" viewBox="0 0 250 250" fill="none" className="mx-auto">
            <circle cx="125" cy="125" r="125" className="fill-lightb" fillOpacity="0.5"/>
            <path d="M125 0C153.077 3.34819e-07 180.337 9.45285 202.387 26.8354C224.436 44.2179 239.992 68.5177 246.546 95.8193C253.101 123.121 250.273 151.834 238.518 177.332C226.763 202.831 206.766 223.629 181.749 236.376C156.732 249.123 128.152 253.076 100.614 247.598C73.076 242.121 48.1842 227.531 29.9494 206.181C11.7145 184.831 1.19873 157.963 0.0963775 129.908C-1.00597 101.852 7.36934 74.2421 23.8728 51.527L125 125L125 0Z" className="fill-lightb dark:fill-darko"/>
            <circle cx="125" cy="125" r="100" className="dark:fill-black fill-[#fff]"/>
            <path d="M95.2102 140.398C93.0227 140.398 91.0767 140.043 89.3722 139.332C87.6771 138.613 86.3466 137.633 85.3807 136.392C84.4148 135.152 83.9318 133.745 83.9318 132.173C83.9318 130.961 84.2064 129.848 84.7557 128.835C85.3144 127.812 86.072 126.965 87.0284 126.293C87.9848 125.611 89.0549 125.175 90.2386 124.986V124.787C88.6856 124.474 87.4261 123.722 86.4602 122.528C85.4943 121.326 85.0114 119.929 85.0114 118.338C85.0114 116.832 85.4517 115.492 86.3324 114.318C87.2131 113.134 88.4205 112.206 89.9545 111.534C91.4981 110.852 93.25 110.511 95.2102 110.511C97.1705 110.511 98.9176 110.852 100.452 111.534C101.995 112.216 103.207 113.149 104.088 114.332C104.969 115.507 105.414 116.842 105.423 118.338C105.414 119.938 104.921 121.335 103.946 122.528C102.971 123.722 101.721 124.474 100.196 124.787V124.986C101.361 125.175 102.417 125.611 103.364 126.293C104.32 126.965 105.078 127.812 105.636 128.835C106.205 129.848 106.493 130.961 106.503 132.173C106.493 133.745 106.006 135.152 105.04 136.392C104.074 137.633 102.739 138.613 101.034 139.332C99.339 140.043 97.3977 140.398 95.2102 140.398ZM95.2102 135.881C96.1856 135.881 97.0379 135.705 97.767 135.355C98.4962 134.995 99.0644 134.503 99.4716 133.878C99.8883 133.243 100.097 132.514 100.097 131.69C100.097 130.848 99.8835 130.104 99.4574 129.46C99.0313 128.807 98.4536 128.295 97.7244 127.926C96.9953 127.547 96.1572 127.358 95.2102 127.358C94.2727 127.358 93.4347 127.547 92.696 127.926C91.9574 128.295 91.375 128.807 90.9489 129.46C90.5322 130.104 90.3239 130.848 90.3239 131.69C90.3239 132.514 90.5275 133.243 90.9347 133.878C91.3419 134.503 91.9148 134.995 92.6534 135.355C93.392 135.705 94.2443 135.881 95.2102 135.881ZM95.2102 122.884C96.0246 122.884 96.7491 122.718 97.3835 122.386C98.018 122.055 98.5152 121.596 98.875 121.009C99.2348 120.421 99.4148 119.744 99.4148 118.977C99.4148 118.22 99.2348 117.557 98.875 116.989C98.5152 116.411 98.0227 115.961 97.3977 115.639C96.7727 115.308 96.0436 115.142 95.2102 115.142C94.3864 115.142 93.6572 115.308 93.0227 115.639C92.3883 115.961 91.8911 116.411 91.5312 116.989C91.1809 117.557 91.0057 118.22 91.0057 118.977C91.0057 119.744 91.1856 120.421 91.5455 121.009C91.9053 121.596 92.4025 122.055 93.0369 122.386C93.6714 122.718 94.3958 122.884 95.2102 122.884ZM121.428 140.398C119.421 140.398 117.631 140.028 116.059 139.29C114.496 138.551 113.256 137.533 112.337 136.236C111.419 134.938 110.941 133.452 110.903 131.776H116.869C116.935 132.902 117.408 133.816 118.289 134.517C119.17 135.218 120.216 135.568 121.428 135.568C122.394 135.568 123.246 135.355 123.985 134.929C124.733 134.493 125.316 133.892 125.732 133.125C126.158 132.348 126.371 131.458 126.371 130.455C126.371 129.432 126.154 128.532 125.718 127.756C125.292 126.979 124.7 126.373 123.942 125.938C123.185 125.502 122.318 125.279 121.343 125.27C120.491 125.27 119.662 125.445 118.857 125.795C118.062 126.146 117.442 126.624 116.996 127.23L111.528 126.25L112.906 110.909H130.69V115.938H117.977L117.224 123.224H117.394C117.906 122.505 118.677 121.908 119.71 121.435C120.742 120.961 121.897 120.724 123.175 120.724C124.927 120.724 126.49 121.136 127.863 121.96C129.236 122.784 130.32 123.916 131.116 125.355C131.911 126.785 132.304 128.433 132.295 130.298C132.304 132.259 131.85 134.001 130.931 135.526C130.022 137.041 128.748 138.234 127.11 139.105C125.481 139.967 123.587 140.398 121.428 140.398ZM152.508 134.545V133.011C152.508 131.847 152.754 130.777 153.246 129.801C153.748 128.816 154.473 128.03 155.42 127.443C156.376 126.847 157.541 126.548 158.914 126.548C160.306 126.548 161.476 126.842 162.423 127.429C163.379 128.016 164.099 128.802 164.582 129.787C165.074 130.762 165.32 131.837 165.32 133.011V134.545C165.32 135.71 165.074 136.785 164.582 137.77C164.089 138.745 163.365 139.527 162.408 140.114C161.452 140.71 160.287 141.009 158.914 141.009C157.522 141.009 156.353 140.71 155.406 140.114C154.459 139.527 153.739 138.745 153.246 137.77C152.754 136.785 152.508 135.71 152.508 134.545ZM156.641 133.011V134.545C156.641 135.218 156.802 135.852 157.124 136.449C157.456 137.045 158.052 137.344 158.914 137.344C159.776 137.344 160.363 137.05 160.675 136.463C160.997 135.876 161.158 135.237 161.158 134.545V133.011C161.158 132.32 161.007 131.676 160.704 131.08C160.401 130.483 159.804 130.185 158.914 130.185C158.062 130.185 157.47 130.483 157.138 131.08C156.807 131.676 156.641 132.32 156.641 133.011ZM137.579 117.898V116.364C137.579 115.189 137.83 114.115 138.332 113.139C138.834 112.154 139.558 111.368 140.505 110.781C141.461 110.194 142.617 109.901 143.971 109.901C145.372 109.901 146.547 110.194 147.494 110.781C148.441 111.368 149.16 112.154 149.653 113.139C150.145 114.115 150.391 115.189 150.391 116.364V117.898C150.391 119.072 150.14 120.147 149.638 121.122C149.146 122.098 148.422 122.879 147.465 123.466C146.518 124.044 145.353 124.332 143.971 124.332C142.588 124.332 141.419 124.039 140.462 123.452C139.515 122.855 138.796 122.074 138.303 121.108C137.82 120.133 137.579 119.062 137.579 117.898ZM141.741 116.364V117.898C141.741 118.589 141.902 119.228 142.224 119.815C142.555 120.402 143.138 120.696 143.971 120.696C144.842 120.696 145.434 120.402 145.746 119.815C146.068 119.228 146.229 118.589 146.229 117.898V116.364C146.229 115.672 146.078 115.028 145.775 114.432C145.472 113.835 144.871 113.537 143.971 113.537C143.128 113.537 142.546 113.84 142.224 114.446C141.902 115.052 141.741 115.691 141.741 116.364ZM139.454 140L159.454 110.909H163.175L143.175 140H139.454Z" className="fill-black dark:fill-[#fff]"/>
            </svg>
                    <h3 className="font-semibold mt-2 text-lg text-center">Adaptability</h3>
                </div>

                <div className="sm:ml-7 lg:ml-0">
            <svg width="150" height="150" viewBox="0 0 250 250" fill="none" className="mx-auto">
				<circle cx="125" cy="125" r="125" className="fill-lightb" fillOpacity="0.5" />
				<path
					d="M5.4619 161.546C12.2019 183.592 24.907 203.344 42.1725 218.619C59.438 233.895 80.5914 244.098 103.294 248.101C125.997 252.104 149.364 249.751 170.813 241.302C192.261 232.853 210.956 218.638 224.829 200.227C238.703 181.816 247.215 159.927 249.425 136.981C251.634 114.034 247.455 90.9233 237.349 70.2036C227.244 49.4839 211.605 31.9623 192.162 19.5761C172.72 7.18982 150.231 0.42137 127.182 0.0190386L125 125L5.4619 161.546Z"
					className="fill-lightb dark:fill-darko"
				/>
				<circle cx="125" cy="125" r="100" className="dark:fill-black fill-[#fff]" />
				<path
					d="M85.5085 140L97.5682 116.136V115.938H83.5199V110.909H103.932V116.009L91.858 140H85.5085ZM118.928 140.639C116.485 140.63 114.383 140.028 112.621 138.835C110.87 137.642 109.52 135.914 108.573 133.651C107.636 131.387 107.172 128.665 107.181 125.483C107.181 122.311 107.65 119.607 108.587 117.372C109.534 115.137 110.884 113.437 112.636 112.273C114.397 111.098 116.495 110.511 118.928 110.511C121.362 110.511 123.455 111.098 125.207 112.273C126.968 113.447 128.322 115.152 129.269 117.386C130.216 119.612 130.685 122.311 130.675 125.483C130.675 128.674 130.202 131.402 129.255 133.665C128.317 135.928 126.973 137.656 125.221 138.849C123.469 140.043 121.371 140.639 118.928 140.639ZM118.928 135.54C120.595 135.54 121.925 134.702 122.92 133.026C123.914 131.349 124.406 128.835 124.397 125.483C124.397 123.277 124.17 121.439 123.715 119.972C123.27 118.504 122.636 117.401 121.812 116.662C120.997 115.923 120.036 115.554 118.928 115.554C117.271 115.554 115.945 116.383 114.951 118.04C113.957 119.697 113.455 122.178 113.445 125.483C113.445 127.718 113.668 129.583 114.113 131.08C114.567 132.566 115.207 133.684 116.031 134.432C116.854 135.17 117.82 135.54 118.928 135.54ZM150.984 134.545V133.011C150.984 131.847 151.231 130.777 151.723 129.801C152.225 128.816 152.949 128.03 153.896 127.443C154.853 126.847 156.018 126.548 157.391 126.548C158.783 126.548 159.952 126.842 160.899 127.429C161.856 128.016 162.575 128.802 163.058 129.787C163.551 130.762 163.797 131.837 163.797 133.011V134.545C163.797 135.71 163.551 136.785 163.058 137.77C162.566 138.745 161.841 139.527 160.885 140.114C159.929 140.71 158.764 141.009 157.391 141.009C155.999 141.009 154.829 140.71 153.882 140.114C152.935 139.527 152.215 138.745 151.723 137.77C151.231 136.785 150.984 135.71 150.984 134.545ZM155.118 133.011V134.545C155.118 135.218 155.279 135.852 155.601 136.449C155.932 137.045 156.529 137.344 157.391 137.344C158.252 137.344 158.839 137.05 159.152 136.463C159.474 135.876 159.635 135.237 159.635 134.545V133.011C159.635 132.32 159.483 131.676 159.18 131.08C158.877 130.483 158.281 130.185 157.391 130.185C156.538 130.185 155.946 130.483 155.615 131.08C155.284 131.676 155.118 132.32 155.118 133.011ZM136.055 117.898V116.364C136.055 115.189 136.306 114.115 136.808 113.139C137.31 112.154 138.035 111.368 138.982 110.781C139.938 110.194 141.093 109.901 142.447 109.901C143.849 109.901 145.023 110.194 145.97 110.781C146.917 111.368 147.637 112.154 148.129 113.139C148.622 114.115 148.868 115.189 148.868 116.364V117.898C148.868 119.072 148.617 120.147 148.115 121.122C147.623 122.098 146.898 122.879 145.942 123.466C144.995 124.044 143.83 124.332 142.447 124.332C141.065 124.332 139.895 124.039 138.939 123.452C137.992 122.855 137.272 122.074 136.78 121.108C136.297 120.133 136.055 119.062 136.055 117.898ZM140.217 116.364V117.898C140.217 118.589 140.378 119.228 140.7 119.815C141.032 120.402 141.614 120.696 142.447 120.696C143.319 120.696 143.911 120.402 144.223 119.815C144.545 119.228 144.706 118.589 144.706 117.898V116.364C144.706 115.672 144.554 115.028 144.251 114.432C143.948 113.835 143.347 113.537 142.447 113.537C141.605 113.537 141.022 113.84 140.7 114.446C140.378 115.052 140.217 115.691 140.217 116.364ZM137.93 140L157.93 110.909H161.652L141.652 140H137.93Z"
					className="fill-black dark:fill-[#fff]"
				/>
			</svg>
                    <h3 className="font-semibold mt-2 text-lg text-center">Communication</h3>
                </div>

            
            </div>
		</>
	);
};

export default Circular;
