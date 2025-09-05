import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import WhatsAppFloat from '../../components/ui/WhatsAppFloat';
import AcademicsHero from '../../components/sections/AcademicsHero';
import SubjectsDetailed from '../../components/sections/SubjectsDetailed';
import TeachingMethod from '../../components/sections/TeachingMethod';
import ClassOptions from '../../components/sections/ClassOptions';
import ResourcesProvided from '../../components/sections/ResourcesProvided';
import ExamPrepPrograms from '../../components/sections/ExamPrepPrograms';

export const metadata = {
  title: 'Academics - O & A Level Programs',
  description: 'Comprehensive O & A Level coaching programs with Cambridge and Edexcel curriculum. Expert teaching methods, flexible class options, and complete exam preparation.',
};

export default function Academics() {
  return (
    <main className="min-h-screen">
      <Header />
      <AcademicsHero />
      <SubjectsDetailed />
      <TeachingMethod />
      <ClassOptions />
      <ResourcesProvided />
      <ExamPrepPrograms />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
} 