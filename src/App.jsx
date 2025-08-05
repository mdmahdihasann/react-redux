
import { useState } from "react";
import Posts from "./components/Posts";



export default function App() {
    const [showPosts, setShowposts] = useState();
   

    return (
        <div className="w-screen h-full p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Simple RTK Query Application
            </h1>

            <div onClick={()=>setShowposts((prevState) => !prevState )} className="max-w-md mx-auto mt-10 space-y-5">
                <button className="text-white bg-red-900 py-2 px-4 rounded font-bold">Toggole</button>
            </div>
            <div className="max-w-md mx-auto mt-10 space-y-5">
              
                { showPosts && <Posts/>}
            </div>
        </div>
    );
}
