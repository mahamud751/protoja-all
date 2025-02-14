import BlogDetails from "@/components/blogDetails/BlogDetails";
import BlogDetailsHero from "@/components/blogDetails/BlogDetailsHero";


export default function BlogDetailsPage() {
  return (
    <div className='container'>
    <BlogDetailsHero/>
    <BlogDetails/>
  
    </div>
  );
}
