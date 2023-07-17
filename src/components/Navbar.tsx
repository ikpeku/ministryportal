import akslogos  from "../assets/ministryLogoHeader.png"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
  <nav className="shadow">

  <div className="flex justify-between items-center py-6 px-10 container mx-auto">

    <div className="flex gap-2 items-center">
    <a href="#" className="">
                <img className="w-12 h-12" src={akslogos} alt="logo" />
            </a>
      <h1 className="text-sm uppercase font-bold bg-gradient-to-tr from-orange-600 to-green-600 bg-clip-text text-transparent hover:cursor-pointer">Ministry of power and petroleum</h1>
    </div>

    <div>
      
      <div className="hover:cursor-pointer sm:hidden">
        <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
        <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
        <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-indigo-600 to-green-600"></span>
      </div>
      <div className="flex items-center">

        <ul className="sm:flex space-x-4 hidden items-center">
          <li><Link to="/" className="text-gray-700 hover:text-orange-600 text-md ">Home</Link></li>
          <li><a href="#" className="text-gray-700 hover:text-orange-600 text-md ">About</a></li>
          <li><a href="#" className="text-gray-700 hover:text-orange-600 text-md ">Services</a></li>
          <li><a href="#" className="text-gray-700 hover:text-orange-600 text-md ">Products</a></li>
          <li><a href="#" className="text-gray-700 hover:text-orange-600 text-md ">Contact</a></li>
        </ul>

        <div className="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
          <Link to="/login">
          <h1 className="text-text-gray-600  py-2 hover:cursor-pointer hover:text-orange-600">LOGIN</h1>
          </Link>
          <Link to="/register">
          <h1 className="text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded text-white bg-green-600 hover:shadow-lg">SIGNUP</h1>
          </Link>
        </div>
      </div>
    </div>
  </div>
  </nav>
</div>
  )



};

export default Header
