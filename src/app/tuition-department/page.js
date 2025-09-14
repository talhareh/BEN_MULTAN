import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import WhatsAppFloat from '../../components/ui/WhatsAppFloat';

export default function TuitionDepartment() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-red to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Tuition Department
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Comprehensive educational programs from playgroup to intermediate level, 
              covering all major boards and streams.
            </p>
          </div>
        </div>
      </section>

      {/* Department Structure */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-black mb-4">
              Our Educational Structure
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              We offer comprehensive educational programs across all levels, 
              from early childhood to intermediate studies.
            </p>
          </div>

          {/* Main Structure */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary-red to-red-600 text-white rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold text-center mb-8">
                Tuition Department
              </h3>
              
              {/* Main Branches */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Playgroup - Matric */}
                <div className="bg-white bg-opacity-20 rounded-lg p-6">
                  <h4 className="text-xl font-heading font-bold mb-4 text-left text-red-900">
                    Playgroup - Matric
                  </h4>
                  <div className="space-y-2 text-red-900 text-left">
                    <p>• Early Childhood Education</p>
                    <p>• Primary School Programs</p>
                    <p>• Middle School Studies</p>
                    <p>• Matriculation Preparation</p>
                  </div>
                </div>

                {/* Intermediate */}
                <div className="bg-white bg-opacity-20 rounded-lg p-6">
                  <h4 className="text-xl font-heading font-bold mb-4 text-left text-red-900">
                    Intermediate
                  </h4>
                  <div className="space-y-2 text-red-900 text-left">
                    <p>• FSC (Medical & Engineering)</p>
                    <p>• ICS (Computer Science)</p>
                    <p>• ICOM (Commerce)</p>
                    <p>• FA (Faculty of Arts)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Boards Section */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-heading font-bold text-center mb-6 text-neutral-dark">
                Affiliated Boards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center shadow-md">
                  <h4 className="text-lg font-heading font-semibold text-primary-red mb-2">
                    Punjab Board
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Board of Intermediate and Secondary Education Punjab
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-md">
                  <h4 className="text-lg font-heading font-semibold text-primary-red mb-2">
                    Federal Board
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Federal Board of Intermediate and Secondary Education
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow-md">
                  <h4 className="text-lg font-heading font-semibold text-primary-red mb-2">
                    Cambridge
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Cambridge Assessment International Education
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
              Additional Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond our core educational programs, we offer specialized courses 
              to enhance your academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="bg-primary-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">O</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">O Level</h3>
              <p className="text-gray-600 text-sm">Cambridge O Level preparation</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="bg-primary-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">A</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">A Level</h3>
              <p className="text-gray-600 text-sm">Cambridge A Level preparation</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="bg-primary-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">E</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">English Language</h3>
              <p className="text-gray-600 text-sm">English language courses</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="bg-primary-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">M</span>
              </div>
              <h3 className="text-lg font-heading font-semibold mb-2">Medical Courses</h3>
              <p className="text-gray-600 text-sm">Medical entry test preparation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Start Your Educational Journey?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Contact us today to learn more about our programs and find the perfect 
            educational path for you or your child.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+923708382215"
              className="bg-white text-primary-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now: +92 37 08382215
            </a>
            <a
              href="mailto:benmultan@gmail.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-red transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
