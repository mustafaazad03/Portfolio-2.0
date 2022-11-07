import React from 'react'
import { useState } from 'react';
const Line = ({percent}) => {
    const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${percent}%`
		}
		
		setStyle(newStyle);
	}, 1000);
    return (
    <>
        <div className="bg-lightb/50 rounded-3xl relative h-4 mx-auto md:mx-0 md:w-3/4 w-[80vw]">
            <div className="bg-gradient-to-r from-lightb/60 dark:from-darko/60 to-lightb dark:to-darko dark:shadow-darko shadow-lightb rounded-3xl dark:text-black text-light text-sm flex items-center justify-center h-full w-0 opacity-0 transition font-bold duration-1000 ease-linear" style={style}>{percent}%</div>
        </div>
    </>
    )
}

export default Line
