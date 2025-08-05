import { useGetPostQuery } from "../features/api/apiSlice";

export default function Post({id, handleEdit }){
    const {
    data: post,
    isLoading,
    isError,
    error,
    } = useGetPostQuery(id); 
    let content;
  if (isLoading) {
    content = <h1>Loading posts...</h1>;
  } 
  if(!isLoading && isError){
    content = <h1>Something went wrong: {error.message}</h1>;
  }
  
  if(!isLoading && !isError){
    if (post.id) {
        content = <p>{post.body} <button onClick={() => handleEdit(post)} className="py-1 px-4 bg-orange-400 rounded font-bold text-white">Edit</button></p>
    } else{
         content =  <h1>Post Not Found</h1>;
    }
  }
  

    return(
        <div className="p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            {content}
        </div>
    );
} 