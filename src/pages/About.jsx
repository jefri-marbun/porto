import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  flex: 1;
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
      Hello, I am Jefri Marbun, a passionate programmer with expertise in Laravel, MySQL, React.js, and Python. I have a strong interest in web development and data science.
    </motion.p>
    <motion.a
      href="https://www.linkedin.com/in/jefri-marbun/"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      LinkedIn Profile
    </motion.a>
  </Container>
);

export default About;
