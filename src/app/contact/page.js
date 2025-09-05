import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import WhatsAppFloat from '../../components/ui/WhatsAppFloat';
import ContactHero from '../../components/sections/ContactHero';
import ContactInfo from '../../components/sections/ContactInfo';
import OfficeLocation from '../../components/sections/OfficeLocation';
import ContactCTA from '../../components/sections/ContactCTA';

export const metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Contact British Educational Network for admissions, class timings, fees, and any questions about O & A Level coaching. Visit our campus in Multan or reach out via WhatsApp.',
};

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHero />
      <ContactInfo />
      <OfficeLocation />
      <ContactCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
} 