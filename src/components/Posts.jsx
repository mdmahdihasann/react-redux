import { useGetPostsQuery } from "../features/api/apiSlice";

export default function Posts() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useGetPostsQuery(5);   

  let content;

  if (isLoading) {
    content = <h1>Loading posts...</h1>;
  } else if (isError) {
    content = <h1>Something went wrong: {error.message}</h1>;
  } else if (posts?.length > 0) {
    content = (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  } else {
    content = <h1>No Posts Found</h1>;
  }

  return (
    <div className="p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      {content}
    </div>
  );
}
