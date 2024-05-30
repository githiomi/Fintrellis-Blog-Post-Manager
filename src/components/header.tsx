import { useState } from "react"
import { FaSun, FaUser } from 'react-icons/fa'


const HeaderComponent = () => {

   const [authState, setAuthState] = useState(false);
   const logo = "/fintrellis_logo.png"

   return (
      <div className="w-full px-8 flex justify-between">

         <div className="flex py-4 items-center gap-4 cursor-pointer hover:scale-[1.01] ease-in-out duration-300">
            <img src={logo} alt='This is the Application Logo' className="w-[50px]" />

            <h1 className="text-2xl uppercase tracking-wide" onClick={() => setAuthState((current) => !current)}>Blog Post Manager</h1>
         </div>

         <div className="flex items-center">

            <FaSun className="text-blue-300 text-2xl hover:text-blue-400 cursor-pointer duration-200 ease-in-out hover:ease-in" />

            {authState && <div className="flex items-center justify-end ml-4 bg-gray-800 py-2 px-4 rounded-lg">

               <p className="text-xl">Daniel Githiomi</p>
               <FaUser className="bg-white text-black rounded-full text-2xl mx-4 p-1" />

            </div>
            }

         </div>

      </div>
   )
}

export default HeaderComponent
