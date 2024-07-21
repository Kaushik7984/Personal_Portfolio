import React from 'react';
import { motion } from 'framer-motion';
import './skillbar.scss';

const skills = [
  { name: 'HTML', percentage: '90%' },
  { name: 'CSS', percentage: '80%' },
  { name: 'JavaScript', percentage: '80%' },
  { name: 'ReactJS', percentage: '78%' },
  { name: 'ReduxJS', percentage: '50%' },
  { name: 'NextJS', percentage: '50%' },
];

const Skillbar = () => {
  return (
    <section className="skills" id="skills">
      <h3 className="skills-header">My Skills</h3>
      <div className="skills-container">
        {skills.map((skill) => (
          <motion.div
            className="skill-container"
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>{skill.name}</p>
            <div className="bar">
              <motion.span
                className={skill.name.toLowerCase()}
                initial={{ width: 0 }}
                animate={{ width: skill.percentage }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              ></motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skillbar;
