import BlogDetails from "@/components/blogDetails/BlogDetails";
import BlogDetailsHero from "@/components/blogDetails/BlogDetailsHero";
import LatestBlogs from "@/components/blogDetails/LatestBlogs";
import Contact from "@/components/home/Contact";
export const metadata = {
  title: "Blogs Details",
  description: "Blog Details Description",
};

export default function BlogDetailsPage() {
  return (
    <div className='container mb-4'>
    <BlogDetailsHero/>
    <BlogDetails/>
    <LatestBlogs/>
    <Contact />
    </div>
  );
}
