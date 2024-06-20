import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ThreeScene from '../components/ThreeScene';

const Container = styled.div`
  padding: 2rem;
`;

const Experience = () => (
  <Container>
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Experience
    </motion.h1>
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <li>Laravel: Extensive experience in building robust web applications.</li>
      <li>MySQL: Proficient in database design and management.</li>
      <li>React.js: Skilled in building interactive and dynamic user interfaces.</li>
      <li>Python: Experienced in scripting and data analysis.</li>
    </motion.ul>
    <ThreeScene />
  </Container>
);

export default Experience;
