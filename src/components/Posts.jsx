import { useState } from "react";
import { useGetPostsQuery } from "../features/api/apiSlice";
import Post from "./Post";
import AddPost from "./AddPost";

export default function Posts() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useGetPostsQuery(5);   
  const [currentPostId, setCurrentPostId] = useState(null)

  let content;

  if (isLoading) {
    content = <h1>Loading posts...</h1>;
  } else if (isError) {
    content = <h1>Something went wrong: {error.message}</h1>;
  } else if (posts?.length > 0) {
    content = (
      <ul>
        {posts.map((post) => (
          <li key={post.id}> <a href="#" onClick={()=> setCurrentPostId(post.id)}>{post.title}</a>  </li>
        ))}
      </ul>
    );
  } else {
    content = <h1>No Posts Found</h1>;
  }

  return (
    <>
    
    <div className="p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      {content}

      
      
    </div>
    {currentPostId && 
        <div className="max-w-md mx-auto mt-10 space-y-5">
          <Post  id={currentPostId}/>
        </div>
      }
    <AddPost />
    </>
  );
}
