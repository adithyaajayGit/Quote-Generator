import React from 'react'

const Quote = () => {
  return (
    <div>
       <div className="flex flex-col items-center p-4">
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Click to display Quote
      </button>
      <div className="w-full max-w-md">
        <div className="bg-white shadow-lg rounded-lg px-8 py-6 mb-4 transition duration-300 ease-in-out hover:shadow-xl">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">Description</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla necessitatibus maxime est doloremque blanditiis libero modi hic? Aliquid quis ipsam nemo, eveniet quos saepe dolorum doloribus quasi sapiente eligendi ex.
          Itaque, alias? Error facere maxime architecto autem, facilis mollitia quam accusamus repudiandae delectus tenetur temporibus odio at ducimus id, optio aperiam maiores tempora veritatis nam sit perspiciatis numquam et ratione.
          Quia illum quidem nemo iusto amet obcaecati dignissimos distinctio? Dignissimos rem placeat amet, exercitationem eligendi repellat aperiam perspiciatis totam quisquam quidem unde animi cupiditate expedita vero ea at. Repellendus, tempora?
          Explicabo eos omnis officia nihil, aut, repellat sapiente voluptatem non itaque, temporibus provident ullam repellendus modi dolorum eveniet unde excepturi quidem id magnam ex illum magni? Molestias delectus voluptatibus maxime?
          Sunt nemo porro id ipsum impedit illo repellat dolorum sint vero et officia mollitia, maxime possimus alias ab, nulla, voluptates qui? Quis officiis ab unde fugiat dolor doloremque vel nemo?</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Quote
