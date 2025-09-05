import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import WhatsAppFloat from '../../components/ui/WhatsAppFloat';
import InstructorsHero from '../../components/sections/InstructorsHero';
import FacultyGrid from '../../components/sections/FacultyGrid';
import FacultyStandout from '../../components/sections/FacultyStandout';
import DemoClassBooking from '../../components/sections/DemoClassBooking';

export const metadata = {
  title: 'Our Expert Instructors - Faculty Team',
  description: 'Meet our highly qualified instructors with international teaching experience. Book a free demo class and experience our expert teaching methodology.',
};

export default function Instructors() {
  return (
    <main className="min-h-screen">
      <Header />
      <InstructorsHero />
      <FacultyGrid />
      <FacultyStandout />
      <DemoClassBooking />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
} 