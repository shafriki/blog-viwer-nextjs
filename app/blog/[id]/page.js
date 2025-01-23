import Link from "next/link";

export default async function BlogDetails({ params }) {
    const { id } = params;
  
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
  
    return (
      <div className="my-52 p-4 bg-white text-black max-w-screen-sm mx-auto">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700">{post.body}</p>
        <Link href="/" className="text-white btn bg-gradient-to-r from-[#1B1B1D] via-[#272730] to-[#6E2B4E] my-5 w-full">Back to Home</Link>
      </div>
    );
  }
  