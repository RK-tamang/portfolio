import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching blog post data from an API or external source
    const fetchBlog = async () => {
      try {
        // Simulated delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Sample blog data
        const sampleBlogs = [
          { id: 1, title: 'First Blog Post', content: 'This is the full content of the first blog post.' },
          { id: 2, title: 'Second Blog Post', content: 'This is the full content of the second blog post.' },
          { id: 3, title: 'Third Blog Post', content: 'This is the full content of the third blog post.' },
        ];

        const foundBlog = sampleBlogs.find((b) => b.id === parseInt(id));
        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          setError('Blog not found');
        }
      } catch (err) {
        setError('Failed to load blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl py-10 mx-auto p-6 bg-black min-h-screen text-white">
        <p>Loading blog...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl py-10 mx-auto p-6 bg-black min-h-screen text-white">
        <h1 className="text-3xl font-bold mb-6">Blog Not Found</h1>
        <Link to="/blogs" className="text-gray-400 hover:underline">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl py-10 mx-auto p-6 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="mb-6">{blog.content}</p>
      <Link to="/blogs" className="text-gray-400 hover:underline">Back to Blogs</Link>
    </div>
  );
};

export default BlogPost;
