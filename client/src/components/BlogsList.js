import React from 'react';
import { Link } from 'react-router-dom';

const sampleBlogs = [
  { id: 1, title: 'First Blog Post', summary: 'This is the summary of the first blog post.' },
  { id: 2, title: 'Second Blog Post', summary: 'This is the summary of the second blog post.' },
  { id: 3, title: 'Third Blog Post', summary: 'This is the summary of the third blog post.' },
];

const BlogsList = () => {
  return (
    <div className="max-w-4xl py-20 mx-auto p-6 bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-white">Blogs</h1>
      <ul>
        {sampleBlogs.map((blog) => (
          <li key={blog.id} className="mb-4 border-b border-gray-700 pb-2">
            <Link to={`/blogs/${blog.id}`} className="text-xl font-semibold text-white hover:underline">
              {blog.title}
            </Link>
            <p className="text-gray-300">{blog.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogsList;
