import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import WhatsAppFloat from '../../components/ui/WhatsAppFloat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStethoscope, 
  faHeartbeat, 
  faUserMd, 
  faUsers,
  faLaptop,
  faMapMarkerAlt,
  faCheckCircle,
  faTrophy,
  faChartLine,
  faAward,
  faCertificate,
  faHandsHelping,
  faMagic
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/ui/Button';

export default function MedicalDepartment() {
  const whatsappUrl = `https://wa.me/+923708382215?text=Hello! I'm interested in medical courses at British Educational Network (BEN).`;

  const medicalCourses = [
    {
      id: 'dha',
      name: 'DHA Exam Test',
      fullName: 'Dubai Health Authority Exam Preparation',
      icon: faCertificate,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-500',
      formats: ['Online', 'Physical'],
      features: [
        'DHA exam syllabus coverage',
        'Mock tests and practice papers',
        'Medical terminology training',
        'Clinical scenario questions',
        'Time management strategies',
        'Licensing process guidance'
      ],
      description: 'Comprehensive preparation for Dubai Health Authority licensing exam with expert guidance and proven strategies.'
    },
    {
      id: 'cupping',
      name: 'Cupping Therapy',
      fullName: 'Traditional Cupping Therapy Training',
      icon: faHandsHelping,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      borderColor: 'border-amber-500',
      formats: ['Physical Only'],
      features: [
        'Traditional cupping techniques',
        'Modern cupping methods',
        'Safety protocols and hygiene',
        'Patient assessment skills',
        'Treatment planning',
        'Practical hands-on training'
      ],
      description: 'Professional cupping therapy training with hands-on practice and certification for traditional healing methods.'
    },
    {
      id: 'aesthetics',
      name: 'Aesthetics',
      fullName: 'Medical Aesthetics and Cosmetic Procedures',
      icon: faMagic,
      color: 'from-pink-500 to-rose-600',
      bgColor: 'bg-pink-50',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      borderColor: 'border-pink-500',
      formats: ['Physical Only'],
      features: [
        'Cosmetic dermatology basics',
        'Non-invasive procedures',
        'Skin analysis techniques',
        'Treatment protocols',
        'Safety and ethics',
        'Client consultation skills'
      ],
      description: 'Comprehensive medical aesthetics training covering modern cosmetic procedures and skin care treatments.'
    }
  ];

  const successStats = [
    {
      icon: faTrophy,
      number: '98%+',
      label: 'Pass Rate',
      color: 'text-yellow-500'
    },
    {
      icon: faUsers,
      number: '100+',
      label: 'Medical Professionals',
      color: 'text-blue-500'
    },
    {
      icon: faAward,
      number: '4.9/5',
      label: 'Course Rating',
      color: 'text-green-500'
    },
    {
      icon: faChartLine,
      number: '95%+',
      label: 'Job Placement',
      color: 'text-purple-500'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-red to-red-800 text-white relative overflow-hidden">
        {/* Medical Background Elements */}
        <div className="absolute inset-0">
          {/* Medical Icons Floating */}
          <div className="absolute top-1/3 left-1/4 opacity-20">
            <FontAwesomeIcon icon={faStethoscope} className="text-4xl animate-pulse" />
          </div>
          <div className="absolute top-1/2 right-1/3 opacity-20">
            <FontAwesomeIcon icon={faHeartbeat} className="text-3xl animate-bounce" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 opacity-20">
            <FontAwesomeIcon icon={faUserMd} className="text-3xl animate-pulse" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Medical Department
            </h1>
            <p className="text-lg md:text-xl text-red-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Advance your medical career with our 
              <span className="text-yellow-300 font-semibold"> specialized medical programs</span>. 
              Professional training for healthcare excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={whatsappUrl}
                variant="outline"
                size="md"
                className="border-white text-white hover:bg-white hover:text-primary-red font-bold transform hover:scale-105 transition-all duration-300"
              >
                Get Medical Consultation
              </Button>
              <Button
                href="#courses"
                variant="outline"
                size="md"
                className="border-white text-white hover:bg-white hover:text-primary-red font-bold transform hover:scale-105 transition-all duration-300"
              >
                View Medical Courses
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

      {/* Medical Courses Structure */}
      <section id="courses" className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-neutral-dark mb-6">
              Our Medical Training Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose from our three specialized medical programs, 
              each designed to enhance your healthcare skills and career prospects.
            </p>
          </div>

          {/* Course Structure Diagram */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-primary-red to-red-600 text-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
                Medical Department Programs
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {medicalCourses.map((course) => (
                  <div key={course.id} className="text-center relative">
                    <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FontAwesomeIcon icon={course.icon} className="text-2xl text-primary-red" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{course.name}</h4>
                    <p className="text-red-100 text-xs leading-tight mb-2">{course.fullName}</p>
                    <div className="flex justify-center gap-2">
                      {course.formats.map((format, formatIndex) => (
                        <span key={formatIndex} className="bg-white bg-opacity-20 text-xs px-2 py-1 rounded text-primary-red">
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Course Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {medicalCourses.map((course) => (
              <div key={course.id} className={`${course.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className="flex items-start mb-6">
                  <div className={`${course.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}>
                    <FontAwesomeIcon icon={course.icon} className={`${course.iconColor} text-2xl`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold text-neutral-dark mb-2">
                      {course.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{course.fullName}</p>
                    <div className="flex gap-2 mb-3">
                      {course.formats.map((format, formatIndex) => (
                        <span key={formatIndex} className={`${course.iconBg} ${course.iconColor} text-xs px-3 py-1 rounded-full font-semibold`}>
                          {format}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">{course.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-dark mb-3">What You&apos;ll Learn:</h4>
                  <div className="space-y-2">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button
                    href={whatsappUrl}
                    variant="primary"
                    size="md"
                    className={`w-full bg-gradient-to-r ${course.color} border-0 hover:shadow-lg`}
                  >
                    Enroll in {course.name}
                  </Button>
                  <Button
                    href="#contact"
                    variant="outline"
                    size="md"
                    className="w-full border-red-900 text-red-900 hover:bg-red-900 hover:text-white focus:text-red-900 active:text-red-900"
                  >
                    Get Course Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Medical Department */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
              Why Choose BEN Medical Department?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our medical programs are designed by healthcare professionals to provide practical, 
              industry-relevant training that advances your medical career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faUserMd} className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-3">
                Expert Medical Faculty
              </h3>
              <p className="text-gray-600">
                Learn from experienced healthcare professionals and certified medical practitioners.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faCertificate} className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-3">
                Industry Recognition
              </h3>
              <p className="text-gray-600">
                Our courses are recognized by medical authorities and healthcare institutions.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faHandsHelping} className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-3">
                Hands-on Training
              </h3>
              <p className="text-gray-600">
                Practical training with real equipment and clinical scenarios for better learning.
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
              Flexible Learning Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the learning format that best fits your schedule and learning preferences.
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
                  <span className="text-gray-700">Live medical lectures</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Interactive case studies</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Digital medical resources</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Online assessments</span>
                </li>
              </ul>
              
              <Button
                href={whatsappUrl}
                variant="primary"
                size="md"
                className="w-full bg-blue-500 text-white border-blue-500 hover:bg-blue-600 hover:text-white"
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
                  <p className="text-gray-600">Hands-on medical training</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Medical equipment training</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Clinical practice sessions</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">One-on-one guidance</span>
                </li>
                <li className="flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Certification exams</span>
                </li>
              </ul>
              
              <Button
                href={whatsappUrl}
                variant="primary"
                size="md"
                className="w-full bg-primary-red text-white border-primary-red hover:bg-red-700 hover:text-white"
              >
                Visit Medical Campus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-16 bg-gradient-to-r from-primary-red via-red-600 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Medical Icons */}
            <div className="absolute top-1/4 left-1/4 opacity-20">
              <FontAwesomeIcon icon={faStethoscope} className="text-5xl animate-pulse" />
            </div>
            <div className="absolute bottom-1/4 right-1/4 opacity-20">
              <FontAwesomeIcon icon={faHeartbeat} className="text-4xl animate-bounce" />
            </div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Ready to Advance Your Medical Career?
          </h2>
            <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join hundreds of healthcare professionals who have enhanced their skills with BEN&apos;s medical training programs. 
            Start your journey to medical excellence today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={whatsappUrl}
              variant="outline"
              size="md"
              className="border-white text-white hover:bg-white hover:text-red-900 focus:text-white active:text-white font-bold"
            >
              Get Medical Consultation
            </Button>
            <Button
              href="tel:+923708382215"
              variant="outline"
              size="md"
              className="border-white text-white hover:bg-white hover:text-red-900 font-bold"
            >
              Call Medical Department
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
