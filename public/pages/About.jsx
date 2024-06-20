import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ThreeScene from '../components/ThreeScene';

const Container = styled.div`
  padding: 2rem;
`;

const About = () => (
  <Container>
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      About Me
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Information about me.
    </motion.p>
    <ThreeScene />
  </Container>
);

export default About;
