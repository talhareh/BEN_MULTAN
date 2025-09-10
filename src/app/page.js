import Header from '../components/layout/Header';
import NotificationSlideBar from '../components/ui/NotificationSlideBar';
import Hero from '../components/sections/Hero';
import AboutUs from '../components/sections/AboutUs';
import SubjectsOffered from '../components/sections/SubjectsOffered';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import AdmissionsOpen from '../components/sections/AdmissionsOpen';
import Footer from '../components/layout/Footer';
import WhatsAppFloat from '../components/ui/WhatsAppFloat';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <NotificationSlideBar />
      <Hero />
      <AboutUs />
      <SubjectsOffered />
      <WhyChooseUs />
      <Testimonials />
      <AdmissionsOpen />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
} 