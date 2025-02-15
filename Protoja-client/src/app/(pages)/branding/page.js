
import AdvanceHydration from '@/components/branding/AdvanceHydration';
import Branding from '@/components/branding/Branding';
import BrandingGallery from '@/components/branding/BrandingGallery';
import ImpactOfProject from '@/components/branding/ImpactOfProject';
import KeyFeature from '@/components/branding/KeyFeature';
import ProjectCaseStudy from '@/components/branding/ProjectCaseStudy';
import SampleDesign from '@/components/branding/SampleDesign';
import SocialMediaSection from '@/components/branding/SocialMedia';
import TypographySection from '@/components/branding/TypographySection';
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
    <KeyFeature/>
    <TypographySection/>
    <SampleDesign/>
    <AdvanceHydration/>
    <SocialMediaSection/>
    <ImpactOfProject/>
    <ProjectCaseStudy/>
    <Contact/>

    </div>
  );
}
