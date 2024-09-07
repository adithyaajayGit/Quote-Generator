import React, { useState } from 'react'
import axiosInstance from '../api/axiosConfig'

const Quote = () => {

    const [quote,setQuote]=useState('')
    const [author,setAuthour]=useState('')


    const fetchrandomQuote=async()=>{
        try{
            const response = await axiosInstance.get('quotes/random')
            const randomquote= response.data
            setQuote(randomquote.quote)
            setAuthour(randomquote.author)
        }
        catch(err){
            console.log("error fetching data",err)
        }

    }
    return (
        <>

            <div className="max-w-xl mx-auto mt-10">
                <button
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-t transition duration-300 ease-in-out"
                    onClick={fetchrandomQuote()}
                > Get Another Quote
                </button>

                <div className="bg-white shadow-lg rounded-b-lg p-6 transition-all duration-300 ease-in-out">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Author name: </h2>
                    <div className='flex'>
                        <p className="text-2xl font-bold text-gray-800 mb-2"> Quote: </p>
                        <p className="text-gray-600 text-sm leading-relaxed px-4 pt-1 "> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ea vitae facilis ab doloribus debitis fugit. Itaque fugit aliquam adipisci amet ipsam beatae quisquam sit, non deserunt. Repellat, necessitatibus eligendi?</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Quote
