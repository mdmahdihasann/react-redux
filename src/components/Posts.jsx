import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchPosts} from "../features/posts/postSlice"

export default function Posts(){
    const { isLoading, isError, posts, error } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPosts())
    },[dispatch])

    let content;
    if(isLoading){
        content= <h1>loading posts....</h1>
    }else if(!isLoading && isError){
        content = <h1>somting wrong error - {error}</h1>
    }else if(!isError && !isLoading){
        if(posts.length > 0){
            content = (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{ post.title }</li>
                    ))}
                    
                </ul>
            )
        }else{
            content= <h1>No Post Found</h1>
        }
    }

    return (
        <div className="p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">{content}</div>
    )
}