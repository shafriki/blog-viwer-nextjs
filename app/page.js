import Link from 'next/link';

export default async function Home() {

  // fetch data from link
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div className="p-4 bg-white text-black">
      <h1 className="text-4xl font-bold mb-4 text-center">Blog Viewer</h1>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className='bg-teal-400 mb-3 text-xl p-3 max-w-screen-sm mx-auto'>
            <Link href={`/blog/${post.id}`} className="text-white hover:text-amber-100">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
