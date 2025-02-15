
import Branding from '@/components/branding/Branding';
import BrandingGallery from '@/components/branding/BrandingGallery';
import Contact from '@/components/home/Contact';
export const metadata = {
  title: "Branding",
  description: "Our Branding",
};
export default function BrandingPage() {
  return (
    <div className='container'>
    <Branding/>
    <BrandingGallery/>

    </div>
  );
}
