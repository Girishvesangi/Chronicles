import { Link } from "react-router-dom"



export const Appbar=()=>{
   
    return <div className="border-b px-10 py-2 flex justify-between">
       <Link to={'/Blogs'} className="text-2xl font-bold pt-1">
       medium
       </Link>
        
     
      <div>
        <Link to={'/publish'}>
        <button type="button" className="mr-4  text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2">
            New
        </button>
        </Link>
      </div>
    </div>
}