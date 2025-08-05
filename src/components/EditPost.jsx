// import { useState } from "react"
// import {useEditPostMutation } from "../features/api/apiSlice";


// export default function AddPost(){

//      const [ title, setTitle ]= useState("");
//      const [ content, setContent ]= useState("");

//      const [AddPost, {data: post, isLoading, isError, isSuccess} ] = useEditPostMutation()

//      const handleSumit =(e)=>{
//         e.preventDefault();
//         AddPost({
//             title,
//             body: content
//         });
//         setTitle('')
//         setContent('')
//      }
     

//     return(
//         <>
//         <form onSubmit={handleSumit} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-6">
//             <div>
//                 <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//                 Title:
//                 </label>
//                 <input
//                 type="text"
//                 id="title"
//                 name="title"
//                 onChange={(e)=>setTitle(e.target.value)}
//                 value={title}
//                 required
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//             </div>

//             <div>
//                 <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//                 Description:
//                 </label>
//                 <textarea
//                 id="description"
//                 name="description"
//                 required
//                 rows="4"
//                 onChange={(e)=>setContent(e.target.value)}
//                 value={content}
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//             </div>

//             <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
//                 disabled={isLoading}
//             >
//                 Save Post
//             </button>
//             </form>

//             {isSuccess && <h1 className="text-green-700">Post Id {post.id} was created Successfully</h1>}
//             {isError && <h1 className="text-red-700">An error occured!</h1>}

//         </>
//     )
// }