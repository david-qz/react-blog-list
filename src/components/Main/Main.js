import BlogCard from '../BlogCard/BlogCard';
import useBlogs from '../../hooks/useBlog';

export default function Main() {
  const blogs = useBlogs();

  return <>
    {blogs.map((blog) => {
      return <BlogCard key={blog.id} {...blog} />;
    })}
  </>;
}
