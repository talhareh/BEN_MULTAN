import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalculator, 
  faAtom, 
  faFlask, 
  faDna, 
  faBookOpen, 
  faLaptopCode,
  faChartLine,
  faBriefcase,
  faReceipt
} from '@fortawesome/free-solid-svg-icons';
import Card from '../ui/Card';
import { oLevelSubjects, aLevelSubjects } from '../../data/subjects';

const SubjectsDetailed = () => {
  const iconMap = {
    calculator: faCalculator,
    atom: faAtom,
    flask: faFlask,
    dna: faDna,
    'book-open': faBookOpen,
    'laptop-code': faLaptopCode,
    'chart-line': faChartLine,
    briefcase: faBriefcase,
    receipt: faReceipt
  };

  const SubjectDetailCard = ({ subject, level }) => (
    <Card hover={true} className="h-full">
      <div className="flex items-start space-x-4">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
          level === 'O' ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600'
        }`}>
          <FontAwesomeIcon 
            icon={iconMap[subject.icon] || faBookOpen} 
            className="text-xl" 
          />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-2">
            {subject.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 leading-relaxed">
            {subject.description}
          </p>
          
          {/* Additional Details */}
          <div className="space-y-2 text-xs text-gray-500">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Cambridge & Edexcel Curriculum</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Past Papers Practice</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>Regular Assessments</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Subjects We Teach
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We offer specialized coaching for Cambridge (CAIE) and Edexcel exams with 
            comprehensive coverage of all subjects and detailed curriculum planning.
          </p>
        </div>

        {/* O Levels Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-blue-600 mb-2">
              O Level Subjects
            </h3>
            <p className="text-gray-600">
              Foundation courses for secondary education with comprehensive coverage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {oLevelSubjects.map((subject) => (
              <SubjectDetailCard key={subject.id} subject={subject} level="O" />
            ))}
          </div>
        </div>

        {/* A Levels Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-red-600 mb-2">
              A Level Subjects
            </h3>
            <p className="text-gray-600">
              Advanced courses for university preparation with in-depth subject knowledge
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aLevelSubjects.map((subject) => (
              <SubjectDetailCard key={subject.id} subject={subject} level="A" />
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-neutral-light rounded-2xl p-8">
          <div className="text-center mb-8">
            <h4 className="text-xl font-heading font-semibold text-neutral-dark mb-4">
              Curriculum Coverage
            </h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faBookOpen} />
              </div>
              <h5 className="font-semibold text-neutral-dark mb-2">Complete Syllabus</h5>
              <p className="text-gray-600 text-sm">
                Full coverage of Cambridge CAIE and Edexcel examination syllabi
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h5 className="font-semibold text-neutral-dark mb-2">Progress Tracking</h5>
              <p className="text-gray-600 text-sm">
                Regular assessments and performance monitoring for each subject
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <FontAwesomeIcon icon={faReceipt} />
              </div>
              <h5 className="font-semibold text-neutral-dark mb-2">Exam Preparation</h5>
              <p className="text-gray-600 text-sm">
                Extensive past paper practice and exam technique training
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectsDetailed; 