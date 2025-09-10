import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import WhatsAppFloat from '../../components/ui/WhatsAppFloat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStethoscope, 
  faCogs, 
  faUniversity, 
  faShieldAlt,
  faUsers,
  faClock,
  faLaptop,
  faMapMarkerAlt,
  faCheckCircle,
  faStar,
  faTrophy,
  faBookOpen,
  faChartLine,
  faAward
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/ui/Button';

export default function EntryTestDepartment() {
  const whatsappUrl = `https://wa.me/+923001234567?text=Hello! I'm interested in entry test preparation at British Educational Network (BEN).`;

  const testPrograms = [
    {
      id: 'mdcat',
      name: 'MDCAT',
      fullName: 'Medical and Dental College Admission Test',
      icon: faStethoscope,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-500',
      features: [
        'Biology comprehensive coverage',
        'Chemistry (Organic & Inorganic)',
        'Physics problem-solving',
        'English comprehension',
        'Logical reasoning',
        'Mock tests and practice papers'
      ],
      description: 'Comprehensive preparation for medical and dental college admissions with expert guidance and proven strategies.'
    },
    {
      id: 'ecat',
      name: 'ECAT',
      fullName: 'Engineering College Admission Test',
      icon: faCogs,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-500',
      features: [
        'Mathematics advanced concepts',
        'Physics engineering applications',
        'Chemistry fundamentals',
        'English language skills',
        'Analytical reasoning',
        'Time management strategies'
      ],
      description: 'Specialized engineering entrance test preparation with focus on mathematical and analytical skills.'
    },
    {
      id: 'nums',
      name: 'NUMS',
      fullName: 'National University of Medical Sciences',
      icon: faUniversity,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-500',
      features: [
        'NUMS-specific curriculum',
        'Medical sciences focus',
        'Research methodology',
        'Clinical reasoning',
        'Academic writing',
        'Interview preparation'
      ],
      description: 'Targeted preparation for NUMS admission with emphasis on medical sciences and research aptitude.'
    },
    {
      id: 'amc',
      name: 'AMC',
      fullName: 'Army Medical College',
      icon: faShieldAlt,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-500',
      features: [
        'Military medical training prep',
        'Physical fitness guidance',
        'Leadership skills development',
        'Medical ethics',
        'Defense studies',
        'Interview and SSB preparation'
      ],
      description: 'Comprehensive preparation for Army Medical College including academic and military training aspects.'
    }
  ];

  const successStats = [
    {
      icon: faTrophy,
      number: '95%+',
      label: 'Success Rate',
      color: 'text-yellow-500'
    },
    {
      icon: faUsers,
      number: '500+',
      label: 'Students Trained',
      color: 'text-blue-500'
    },
    {
      icon: faAward,
      number: '4.8/5',
      label: 'Student Rating',
      color: 'text-green-500'
    },
    {
      icon: faChartLine,
      number: '85%+',
      label: 'Merit List',
      color: 'text-purple-500'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary-red to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Entry Test Department
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Master your entrance exams with our 
              <span className="text-yellow-300 font-semibold"> specialized preparation programs</span>. 
              Available both online and on-campus for your convenience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={whatsappUrl}
                variant="outline"
                size="lg"
                className="bg-white text-primary-red border-white hover:bg-red-50 font-bold transform hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </Button>
              <Button
                href="#programs"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-red font-bold transform hover:scale-105 transition-all duration-300"
              >
                View Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-12 bg-white relative -mt-8 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <FontAwesomeIcon icon={stat.icon} className={`text-2xl ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-neutral-dark mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test Programs Structure */}
      <section id="programs" className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-neutral-dark mb-6">
              Our Test Preparation Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose from our four specialized entry test preparation programs, 
              each designed to maximize your chances of success in your chosen field.
            </p>
          </div>

          {/* Program Structure Diagram */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-primary-red to-red-600 text-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
                Entry Test Department (Online + Physical)
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {testPrograms.map((program) => (
                  <div key={program.id} className="text-center relative">
                    <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FontAwesomeIcon icon={program.icon} className="text-2xl" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{program.name}</h4>
                    {program.id === 'mdcat' && (
                      <div className="absolute -top-2 -left-2">
                        <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-xl" />
                      </div>
                    )}
                    <p className="text-red-100 text-xs leading-tight">{program.fullName}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Program Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testPrograms.map((program) => (
              <div key={program.id} className={`${program.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className="flex items-start mb-6">
                  <div className={`${program.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                    <FontAwesomeIcon icon={program.icon} className={`${program.iconColor} text-2xl`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-2xl font-heading font-bold text-neutral-dark mr-2">
                        {program.name}
                      </h3>
                      {program.id === 'mdcat' && (
                        <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{program.fullName}</p>
                    <p className="text-gray-700 leading-relaxed">{program.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-dark mb-3">What You&apos;ll Learn:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    href={whatsappUrl}
                    variant="primary"
                    size="md"
                    className={`flex-1 bg-gradient-to-r ${program.color} border-0 hover:shadow-lg`}
                  >
                    Enroll in {program.name}
                  </Button>
                  <Button
                    href="#contact"
                    variant="outline"
                    size="md"
                    className={`flex-1 ${program.borderColor} ${program.iconColor} hover:bg-opacity-10`}
                  >
                    Get Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Entry Test Department */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
              Why Choose BEN Entry Test Department?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our specialized approach and expert faculty ensure your success in competitive entrance examinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faBookOpen} className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-3">
                Comprehensive Study Material
              </h3>
              <p className="text-gray-600">
                Updated study materials, practice tests, and mock exams designed specifically for each test format.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-3">
                Expert Faculty
              </h3>
              <p className="text-gray-600">
                Experienced instructors who have successfully guided hundreds of students to their dream institutions.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faClock} className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-3">
                Flexible Scheduling
              </h3>
              <p className="text-gray-600">
                Choose between online and physical classes with flexible timings to fit your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Formats */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
              Choose Your Learning Style
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer both online and physical learning options to suit your preferences and schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Online Learning */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faLaptop} className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-neutral-dark">Online Learning</h3>
                  <p className="text-gray-600">Study from anywhere, anytime</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Live interactive sessions</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Recorded lectures for review</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Digital study materials</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Online practice tests</span>
                </li>
              </ul>
              
              <Button
                href={whatsappUrl}
                variant="outline"
                size="md"
                className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              >
                Start Online Learning
              </Button>
            </div>

            {/* Physical Learning */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-primary-red">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary-red text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-neutral-dark">Physical Classes</h3>
                  <p className="text-gray-600">Traditional classroom experience</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
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
                  <span className="text-gray-700">Group study sessions</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Personalized attention</span>
                </li>
              </ul>
              
              <Button
                href={whatsappUrl}
                variant="outline"
                size="md"
                className="w-full border-primary-red text-primary-red hover:bg-primary-red hover:text-white"
              >
                Visit Our Campus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-16 bg-gradient-to-r from-primary-red via-red-600 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 right-10 w-40 h-40 bg-white bg-opacity-10 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Ready to Ace Your Entry Test?
          </h2>
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join hundreds of successful students who have achieved their dreams with BEN&apos;s entry test preparation. 
            Start your journey to success today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={whatsappUrl}
              variant="outline"
              size="lg"
              className="bg-white text-primary-red border-white hover:bg-red-50 font-bold"
            >
              Get Free Consultation
            </Button>
            <Button
              href="tel:+923001234567"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-red font-bold"
            >
              Call Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
