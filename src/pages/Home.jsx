import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faReact, faPython, faPhp } from '@fortawesome/free-brands-svg-icons';
import ThreeScene from '../components/ThreeScene';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const Home = () => (
  <Container>
    <motion.h1
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      Jefri Marbun
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Programmer with expertise in Laravel, MySQL, React.js, and Python.
    </motion.p>
    <IconsContainer>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faLaravel} size="5x" />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faReact} size="5x" />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faPython} size="5x" />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faPhp} size="5x" />
      </motion.div>
    </IconsContainer>
    <ThreeScene />
  </Container>
);

export default Home;
