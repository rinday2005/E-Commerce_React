import React from 'react';
import Story from './Story';
import ButtonSection from './ButtonSection';
import ExpertSection from './ExpertSection';
import QualitySection from './QualitySection';

const About = () => {
  return (
    <div className="main">
      <div className="home flex gap-4 mt-16 pl-36">
        <a href="/" className="text-black opacity-50 hover:opacity-100">Home</a>
        <p>/</p>
        <a href="/about" className="text-black opacity-50 hover:opacity-100">About</a>
      </div>
      <Story />
      <ButtonSection />
      <ExpertSection />
      <QualitySection />
    </div>
  );
};

export default About;