

const Stat = () => {
  return (
  <div>

<section className="bg-white ">
  <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 md:py-2 lg:px-8 flex justify-center">

    <div className="w-full border">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-1">

        <div className="bg-white">
            <div className="h-5 aspect-square bg-green-800 " />
        <div className="flex items-center gap-3 rounded-lg  px-4 py-2 text-center">
        <div className="w-full">
        <dd className="text-4xl font-extrabold text-orange-300 md:text-5xl">
            12,345
        </dd>
          <dt className="order-last text-lg font-medium text-green-500">
            Registered Bussiness
          </dt>
        </div>
        </div>
        </div>

        

      </dl>
    </div>

    <div className="w-full border">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-1">

        <div className="bg-white">
            <div className="h-5 aspect-square bg-green-800 " />
        <div className="flex items-center gap-3 rounded-lg  px-4 py-2 text-center">
        <div className="w-full">
        <dd className="text-4xl font-extrabold text-orange-300 md:text-5xl">
            2,456
        </dd>
          <dt className="order-last text-lg font-medium text-green-500">
            Active  Bussiness
          </dt>
        </div>
        </div>
        </div>

        

      </dl>
    </div>
    <div className="w-full border">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-1">

        <div className="bg-white">
            <div className="h-5 aspect-square bg-green-800 " />
        <div className="flex items-center gap-3 rounded-lg  px-4 py-2 text-center">

<div className="w-full">
        <dd className="text-4xl font-extrabold text-orange-300 md:text-5xl">
            1,124
        </dd>
          <dt className="order-last text-lg font-medium text-green-500">
            Register Consultant
          </dt>
        </div>
        </div>
        </div>

        

      </dl>
    </div>
    <div className="w-full border ">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-1">

        <div className="bg-white">
            <div className="h-5 aspect-square bg-green-800 " />
        <div className="flex items-center gap-3 rounded-lg  px-4 py-2 text-center">
          
        <div className="w-full">
        <dd className="text-4xl font-extrabold text-orange-300 md:text-5xl">
            24,456
        </dd>
          <dt className="order-last text-lg font-medium text-green-500">
            Total Users
          </dt>
        </div>

        </div>
        </div>

        

      </dl>
    </div>



  </div>
</section> 


  </div>);
};

export default Stat;


{/* <section className="bg-white p-2  rounded">
      <div className="flex flex-col lg:flex-row items-center gap-5 mt-2">

        <div
          className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="text-green-400 w-20 h-20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg> *
          <div className="h-7 aspect-square bg-green-950"/>

          <div className="text-center">
            <h2 className="text-4xl font-bold pb-2">0</h2>
            <h4 className="inline text-gray-500 text-md">gas user</h4>
          </div>
        </div>

        
        <div
          className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="text-gray-400 w-20 h-20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 15.182a25.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg> 
          <div className="text-center">
            <h2 className="text-4xl font-bold pb-2">0%</h2>
            {/* <h4 className="inline text-gray-500 text-md">Neutral</h4> 
          </div>
        </div>
        <div
          className="flex justify-evenly items-center w-96 lg:w-1/3 p-3 m-3 border border-gray-300 rounded"
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="text-red-300 w-20 h-20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg> 
          <div className="text-center">
            <h2 className="text-4xl font-bold pb-2">0%</h2>
            {/* <h4 className="inline text-gray-500 text-md">Very Unsatisfied</h4> 
          </div>
        </div>
      </div>
    </section> */}
