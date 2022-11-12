import React, { useEffect, useState } from 'react'
import { useForm} from 'react-hook-form'
import { toast } from 'react-toastify';

function Newsletter() {
    const { register, handleSubmit, formState: { errors }, reset, formState: { isSubmitSuccessful }, formState } = useForm();

    const [filled, setFilled] = useState(false)

    const onSubmit = async data => {
        await fetch('/api/newsletter', {
            method: "POST",
            body: JSON.stringify(data),
        }).then(() => {
            toast.success("Thank you for subscribing our newsletters!")
            setFilled(true)
        }).catch((err) => {
            toast.error("Sorry, some error occured while subscribing!")
        })
    };

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ email: "" });
        }
    }, [formState, reset]);

    return (
        <>
            {
                !filled ?
                    <form onSubmit={handleSubmit(onSubmit)} className="lg:w-4/5 w-3/4 sm:w-11/12">
							<div className="mb-4">
								<label className="block mb-2 text-xl font-bold text-gray-700 dark:text-light" htmlFor="email">
									Newsletter
								</label>
								<input
									className="w-full p-3 text-sm leading-tight text-[#4242e9] border rounded-3xl shadow appearance-none focus:outline-none focus:shadow-outline"
									id="email"
                                    {...register("email", { required: true })}
									type="email"
									placeholder="Enter Email Address..."
                                    name="email"
                                    required
								/>
							</div>
							<div className="text-center">
								<button
									className="w-full px-4 py-2 font-bold text-white dark:text-black bg-lightb dark:bg-darko rounded-full hover:bg-lightb/80 dark:hover:bg-darko/80 focus:outline-none focus:shadow-outline"
									type="Submit"
								>
									Submit
								</button>
							</div>
						</form>
                        :
                        <div className="md:-ml-32 dark:text-light">
                        <h3 className='font-semibold md:text-3xl text-xl text-center '>Thank You For Subscribing!!</h3>
                        <p className='text-center font-medium md:text-lg text-base mt-2'>Check Out My Profile Below</p>
                        </div>
            }
        </>
    )
}

export default Newsletter