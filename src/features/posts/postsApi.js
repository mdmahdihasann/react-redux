export const getPost = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    return res.json();
}