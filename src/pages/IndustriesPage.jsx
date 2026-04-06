import React from 'react';
import IndustriesHero from '../components/IndustriesHero';
import MoodleServices from '../components/MoodleServices';
import IndustriesServe from '../components/IndustriesServe';
import MoodleDevelopmentGrid from '../components/MoodleDevelopmentGrid';
import WorkWithPeople from '../components/WorkWithPeople';

const IndustriesPage = () => {
  return (
    <div className="page pt-20">
      <IndustriesHero />
      <MoodleServices />
      <IndustriesServe />
      <MoodleDevelopmentGrid />
      <WorkWithPeople />
    </div>
  );
};

export default IndustriesPage;
