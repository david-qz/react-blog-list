import { useEffect, useState } from 'react';
import { getBlogs } from '../services/blogs';

export default function useBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then((blogs) => {
      setBlogs(blogs);
    });
  }, []);

  return blogs;
}
