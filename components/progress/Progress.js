import React from 'react'
import Circular from './Circular'
import Line from './line'
const Progress = () => {
    const prog = [
        {
            name : 'MERN Development', percent : '70'
        },
        {
            name : 'C++ Programming', percent : '60'
        },
        {
            name : 'Java Programming', percent : '50'
        },
        {
            name : 'Blockchain Development', percent : '25'
        },
    ]
    
    return (
        <div className='dark:bg-black dark:text-light h-auto'>
            <div className="w-full h-16 py-1 text-center mx-auto">
                <div className="flex justify-center my-3">
                    {/* About Us Heading */}
                    <h3 className='font-semibold text-4xl -mt-1 mr-1'>|</h3>
                    <h3 className='text-4xl font-bold'><span className='text-[38px] text-lightb dark:text-darko'>P</span>rogress</h3>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse lg:py-20 py-10">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:-mt-6 mt-10 xl:gap-12 lg:gap-10 gap-12 xl:ml-12 lg:ml-4">
                    <Circular/>
                </div>
                <div className="md:ml-16">
                    <div className="space-y-10 mt-2">
                        {prog.map((value,idx) => {
                            return (
                                <div key={idx} className="space-y-2">
                                    <h3 className='font-semibold text-lg ml-8 md:ml-0'>{value.name}</h3>
                                    <Line percent={value.percent}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Progress
