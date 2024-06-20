import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ThreeScene from '../components/ThreeScene';

const Container = styled.div`
  padding: 2rem;
`;

const Skills = () => (
  <Container>
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Skills
    </motion.h1>
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <li>Web Development</li>
      <li>Data Science</li>
      <li>Database Management</li>
      <li>Front-end Development</li>
      <li>Back-end Development</li>
    </motion.ul>
    <ThreeScene />
  </Container>
);

export default Skills;
