import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ThreeScene from '../components/ThreeScene';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Home = () => (
  <Container>
    <motion.h1
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      Welcome to My Portfolio
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Discover my work and experience.
    </motion.p>
    <ThreeScene />
  </Container>
);

export default Home;
