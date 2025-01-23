import Link from 'next/link';

export default async function Home() {
  // Fetch data inside the function
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div className="p-4 bg-white text-black">
      <h1 className="text-2xl font-bold mb-4">Blog Viewer</h1>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className='bg-teal-400 mb-3 text-xl p-3 max-w-screen-sm mx-auto'>
            <Link href={`/blog/${post.id}`} className="text-white">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
