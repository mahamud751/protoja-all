import BlogCard from '@/components/blogs/BlogCard';
import BlogHeader from '@/components/blogs/BlogHeader';
import CategoryTabs from '@/components/blogs/CategoryTabs';
import Pagination from '@/components/blogs/Pagination';
import Contact from '@/components/home/Contact';
export const metadata = {
  title: "Blogs",
  description: "Blog Description",
};
export default function BlogPage() {
  return (
    <div className='container'>
    <BlogHeader/>
    <CategoryTabs/>
    <BlogCard/>
    <Pagination/>
     <Contact />
    </div>
  );
}
