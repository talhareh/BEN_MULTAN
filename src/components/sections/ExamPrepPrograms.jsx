import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faBook, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ExamPrepPrograms = () => {
  const programs = [
    {
      icon: faRocket,
      title: 'Crash Courses',
      description: 'Intensive revision programs for quick exam preparation',
      duration: '4-6 Weeks',
      features: [
        'Complete syllabus coverage',
        'High-yield topics focus',
        'Daily practice sessions',
        'Expert tips and shortcuts'
      ],
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: faBook,
      title: 'Revision Sessions',
      description: 'Comprehensive review of all topics before exams',
      duration: '2-3 Weeks',
      features: [
        'Topic-wise revision',
        'Doubt clearing sessions',
        'Key concept reinforcement',
        'Last-minute preparation'
      ],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: faClipboardCheck,
      title: 'Test Series',
      description: 'Regular mock tests to evaluate exam readiness',
      duration: 'Ongoing',
      features: [
        'Weekly mock tests',
        'Performance analysis',
        'Rank tracking',
        'Improvement strategies'
      ],
      color: 'bg-blue-100 text-blue-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-dark mb-4">
            Exam Prep Programs
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Specialized programs designed to maximize your exam performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} hover={true} className="h-full text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${program.color}`}>
                <FontAwesomeIcon icon={program.icon} className="text-2xl" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-neutral-dark mb-2">
                {program.title}
              </h3>
              
              <div className="bg-primary-gold text-primary-red px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                {program.duration}
              </div>
              
              <p className="text-gray-600 mb-6">
                {program.description}
              </p>
              
              <div className="space-y-3 mb-8 text-left">
                {program.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-primary-red rounded-full mr-3"></span>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button
                href={`https://wa.me/+923001234567?text=Hello! I'm interested in ${program.title} at BEN.`}
                variant="secondary"
                size="sm"
                className="w-full"
              >
                Enroll Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamPrepPrograms; 