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

const SubjectsOffered = () => {
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

  const SubjectCard = ({ subject, level }) => (
    <Card hover={true} className="text-center h-full">
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
        level === 'O' ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600'
      }`}>
        <FontAwesomeIcon 
          icon={iconMap[subject.icon] || faBookOpen} 
          className="text-2xl" 
        />
      </div>
      <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-2">
        {subject.name}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {subject.description}
      </p>
    </Card>
  );

  return (
    <section className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Subjects Offered
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We offer specialized coaching for Cambridge (CAIE) and Edexcel exams with 
            comprehensive coverage of all subjects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* O Levels */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-blue-600 mb-2">
                O Levels
              </h3>
              <p className="text-gray-600">
                Foundation courses for secondary education
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {oLevelSubjects.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} level="O" />
              ))}
            </div>
          </div>

          {/* A Levels */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-red-600 mb-2">
                A Levels
              </h3>
              <p className="text-gray-600">
                Advanced courses for university preparation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aLevelSubjects.map((subject) => (
                <SubjectCard key={subject.id} subject={subject} level="A" />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-md max-w-4xl mx-auto">
            <h4 className="text-xl font-heading font-semibold text-neutral-dark mb-4">
              Our Teaching Approach
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h5 className="font-semibold text-primary-red mb-2">Concept Clarity</h5>
                <p className="text-gray-600">Building strong foundations with clear explanations</p>
              </div>
              <div>
                <h5 className="font-semibold text-primary-red mb-2">Exam Techniques</h5>
                <p className="text-gray-600">Past paper drills and mark scheme strategies</p>
              </div>
              <div>
                <h5 className="font-semibold text-primary-red mb-2">Regular Assessments</h5>
                <p className="text-gray-600">Weekly & monthly tests for progress tracking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectsOffered; 