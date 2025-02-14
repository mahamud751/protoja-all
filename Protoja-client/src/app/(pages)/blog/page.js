import BlogCard from '@/components/blogs/BlogCard';
import BlogHeader from '@/components/blogs/BlogHeader';
import Contact from '@/components/home/Contact';

export default function BlogPage() {
  return (
    <div className='container'>
    <BlogHeader/>
    <BlogCard/>
     <Contact />
    </div>
  );
}
