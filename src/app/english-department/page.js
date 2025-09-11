import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import WhatsAppFloat from '../../components/ui/WhatsAppFloat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMicrophone, 
  faGlobe, 
  faCertificate,
  faUsers,
  faClock,
  faLaptop,
  faMapMarkerAlt,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/ui/Button';

export default function EnglishDepartment() {
  const whatsappUrl = `https://wa.me/+923708382215?text=Hello! I'm interested in English language courses at British Educational Network (BEN).`;

  const courseFeatures = [
    {
      icon: faUsers,
      title: "Expert Instructors",
      description: "Native and near-native English speakers with international teaching experience"
    },
    {
      icon: faCertificate,
      title: "Internationally Recognized",
      description: "IELTS and PTE preparation with proven track record of high scores"
    },
    {
      icon: faClock,
      title: "Flexible Scheduling",
      description: "Classes available at convenient times for working professionals and students"
    },
    {
      icon: faCheckCircle,
      title: "Guaranteed Results",
      description: "Structured curriculum designed to achieve your target band scores"
    }
  ];

  const spokenEnglishFeatures = [
    "Daily conversation practice",
    "Pronunciation and accent training",
    "Business communication skills",
    "Public speaking confidence",
    "Interview preparation",
    "Cultural context understanding"
  ];

  const ieltsFeatures = [
    "All four modules: Listening, Reading, Writing, Speaking",
    "Mock tests and practice sessions",
    "Band score improvement strategies",
    "Time management techniques",
    "Academic and General Training options",
    "Personalized feedback and guidance"
  ];

  const pteFeatures = [
    "Speaking and Writing modules",
    "Reading and Listening sections",
    "Computer-based test preparation",
    "Instant score improvement tips",
    "Practice with real test format",
    "Score guarantee programs"
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-16 bg-gradient-to-br from-primary-red to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              English Department
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Master English language skills with our comprehensive programs. 
              Available both online and on-campus for your convenience.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center bg-primary-gold rounded-lg px-4 py-2">
                <FontAwesomeIcon icon={faLaptop} className="mr-2 text-red-900" />
                <span className="text-red-900">Online Classes</span>
              </div>
              <div className="flex items-center justify-center bg-primary-gold rounded-lg px-4 py-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-red-900" />
                <span className="text-red-900">Physical Classes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-4">
              Our English Language Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our three specialized English language tracks, 
              each designed to meet specific learning goals and career objectives.
            </p>
          </div>

          {/* Course Structure Diagram */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-primary-red to-red-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-heading font-bold text-center mb-8">
                English Language (Online + Physical)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Spoken English */}
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon icon={faMicrophone} className="text-2xl text-primary-gold" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Spoken English</h4>
                  <p className="text-red-100 text-sm">Conversation & Communication</p>
                </div>

                {/* IELTS */}
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon icon={faGlobe} className="text-2xl text-primary-gold" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">IELTS</h4>
                  <p className="text-red-100 text-sm">International English Testing</p>
                </div>

                {/* PTE */}
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon icon={faCertificate} className="text-2xl text-primary-gold" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">PTE</h4>
                  <p className="text-red-100 text-sm">Pearson Test of English</p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Spoken English */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-primary-red flex flex-col">
              <div className="text-center mb-6">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faMicrophone} className="text-primary-red text-2xl" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-black mb-2">
                  Spoken English
                </h3>
                <p className="text-gray-600">
                  Build confidence in English conversation and communication
                </p>
              </div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                {spokenEnglishFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mt-auto">
                <Button
                  href={whatsappUrl}
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Enroll in Spoken English
                </Button>
              </div>
            </div>

            {/* IELTS */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-primary-red flex flex-col">
              <div className="text-center mb-6">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faGlobe} className="text-primary-red text-2xl" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-black mb-2">
                  IELTS Preparation
                </h3>
                <p className="text-gray-600">
                  Comprehensive preparation for International English Language Testing System
                </p>
              </div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                {ieltsFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mt-auto">
                <Button
                  href={whatsappUrl}
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Enroll in IELTS
                </Button>
              </div>
            </div>

            {/* PTE */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-primary-red flex flex-col">
              <div className="text-center mb-6">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faCertificate} className="text-primary-red text-2xl" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-black mb-2">
                  PTE Preparation
                </h3>
                <p className="text-gray-600">
                  Expert training for Pearson Test of English Academic
                </p>
              </div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                {pteFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mt-auto">
                <Button
                  href={whatsappUrl}
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Enroll in PTE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our English Department */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
              Why Choose BEN English Department?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our English language programs are designed to help you achieve your goals, 
              whether for academic, professional, or personal development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={feature.icon} className="text-primary-red text-2xl" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Formats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
              Choose Your Learning Format
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer flexible learning options to suit your schedule and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Online Classes */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 text-center">
              <div className="bg-primary-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faLaptop} className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-neutral-dark mb-4">
                Online Classes
              </h3>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Interactive live sessions</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Recorded sessions for review</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Digital study materials</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Flexible scheduling</span>
                </li>
              </ul>
              <Button
                href={whatsappUrl}
                variant="primary"
                size="md"
                className="w-full"
              >
                Join Online Classes
              </Button>
            </div>

            {/* Physical Classes */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 text-center">
              <div className="bg-primary-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-neutral-dark mb-4">
                Physical Classes
              </h3>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Face-to-face interaction</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Modern classroom facilities</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Group practice sessions</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Personalized attention</span>
                </li>
              </ul>
              <Button
                href={whatsappUrl}
                variant="primary"
                size="md"
                className="w-full"
              >
                Visit Our Campus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Improve Your English?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of students who have successfully improved their English skills with BEN. 
            Contact us today to start your journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={whatsappUrl}
              variant="outline"
              size="lg"
              className="bg-white text-primary-red border-white hover:bg-red-50"
            >
              Get Course Information
            </Button>
            <Button
              href="tel:+923708382215"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-red"
            >
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
