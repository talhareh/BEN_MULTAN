import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFlask, 
  faBookOpen, 
  faChartLine,
  faUsers,
  faLightbulb,
  faClipboardCheck,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';

const SubjectsOffered = () => {

  return (
    <section className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BEN Departments - 4 White Columns */}
        <div className="bg-gray-50 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
              BEN DEPARTMENTS
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our specialized departments provide comprehensive support across all academic areas 
              with expert instructors and proven methodologies.
          </p>
        </div>

          {/* BEN Departments Grid - 4 White Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tuition Department */}
            <a href="/tuition-department" className="block">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-red rounded-xl mb-6">
                  <FontAwesomeIcon icon={faUsers} className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-heading font-bold text-neutral-dark mb-4">
                  Tuition Department
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Comprehensive O & A Level coaching with personalized attention and expert guidance for academic excellence.
                </p>
              </div>
            </a>
            
            {/* English Language Department */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-red rounded-xl mb-6">
                <FontAwesomeIcon icon={faBookOpen} className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral-dark mb-4">
                English Language
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Advanced English language skills, literature, and communication excellence for global opportunities.
              </p>
            </div>

            {/* Entry Test Department */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-red rounded-xl mb-6">
                <FontAwesomeIcon icon={faChartLine} className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral-dark mb-4">
                Entry Test Department
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Specialized coaching for university entrance exams and competitive tests with proven success rates.
              </p>
          </div>

            {/* Medical Courses */}
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-red rounded-xl mb-6">
                <FontAwesomeIcon icon={faFlask} className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral-dark mb-4">
                Medical Courses
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Pre-medical and medical entrance preparation with biology and chemistry focus for medical careers.
              </p>
            </div>
          </div>
        </div>


        {/* Our Teaching Approach - Simple */}
        <div className="mt-16">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            {/* Section Header */}
            <div className="text-center mb-8">
              <h4 className="text-2xl font-heading font-bold text-neutral-dark mb-3">
              Our Teaching Approach
            </h4>
              <p className="text-gray-600">
                We focus on a comprehensive methodology that ensures student success
              </p>
            </div>

            {/* Teaching Methods - Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faLightbulb} className="text-white text-lg" />
                </div>
                <h5 className="text-lg font-heading font-semibold text-neutral-dark mb-2">
                  Concept Clarity
                </h5>
                <p className="text-gray-600 text-sm">
                  Building strong foundations with clear explanations and real-world examples
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faClipboardCheck} className="text-white text-lg" />
                </div>
                <h5 className="text-lg font-heading font-semibold text-neutral-dark mb-2">
                  Exam Techniques
                </h5>
                <p className="text-gray-600 text-sm">
                  Past paper drills and mark scheme strategies for maximum scores
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={faChartBar} className="text-white text-lg" />
                </div>
                <h5 className="text-lg font-heading font-semibold text-neutral-dark mb-2">
                  Regular Assessments
                </h5>
                <p className="text-gray-600 text-sm">
                  Weekly & monthly tests for continuous progress tracking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectsOffered; 