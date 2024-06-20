import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
  color: #fff;

  a {
    color: #fff;
    margin: 0 1rem;
    text-decoration: none;
    position: relative;
    
    &:hover {
      text-decoration: underline;
      &::after {
        width: 100%;
      }
    }

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -2px;
      left: 0;
      background-color: #fff;
      transition: width 0.3s;
    }
  }
`;

const Header = () => (
  <Nav>
    <h1>My Portfolio</h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/interest">Interest</Link>
      <Link to="/awards">Awards</Link>
    </div>
  </Nav>
);

export default Header;
