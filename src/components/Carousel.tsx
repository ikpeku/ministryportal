// import Caromain from "./admin/Caro";

import Caromain from "./Caro";


const CarouselCard = () => {
    return (
        <div>
        <section>
            <div className="bg-gray-100  px-4 py-6 space-y-6 sm:space-y-0 sm:gap-4 flex">

                {/* slider start */}
                <div className="w-3/4">
                    {/* <Carousel autoplay pauseOnHover withoutControls wrapAround adaptiveHeight>
                    <img src="https://pluspng.com/img-png/png-user-icon-icons-logos-emojis-users-2400.png"  />
      <img src="https://pluspng.com/img-png/png-user-icon-icons-logos-emojis-users-2400.png"  className='w-full h-full '  />
      <img src="https://pluspng.com/img-png/png-user-icon-icons-logos-emojis-users-2400.png"  className='w-full h-full '  />
      <img src="https://pluspng.com/img-png/png-user-icon-icons-logos-emojis-users-2400.png"  className='w-full h-full '  />
      <img src="https://pluspng.com/img-png/png-user-icon-icons-logos-emojis-users-2400.png"  className='w-full h-full '  />
    </Carousel> */}
                <Caromain />
                </div>
                {/* slider end */}


                <div className="">
                    <div className="bg-white py-3 px-4 rounded-lg flex justify-around items-center ">
                        <input type="text" placeholder="seach"
                            className=" bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2" />
                        <span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor " >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                    </div>
                    <div className="bg-white  rounded-md">

                        <h1 className="text-center text-xl my-4  bg-white py-2 rounded-md border-b-2   text-gray-600">Service</h1>
                        <div className="bg-white rounded-md list-none  text-center gap-2 cursor-pointer" >
                            <li className="p-3 border-b-2"><a href="#" className="list-none  hover:text-orange-600">Oil</a></li>
                            <li className="p-3 border-b-2"><a href="#" className="list-none  hover:text-orange-600">Gas</a></li>
                            <li className="p-3 border-b-2"><a href="#" className="list-none  hover:text-orange-600">Power</a></li>
                            <li className="p-3 border-b-2"><a href="#" className="list-none  hover:text-orange-600">Consultant</a></li>
                            <li className="p-3 "><a href="#" className="list-none border-b-2 hover:text-orange-600">Renewable Energy</a></li>
                        </div>
                    </div>
                </div>
            </div>

            {/* kkksksk */}

        </section>
    </div>

    );
};

export default CarouselCard;
