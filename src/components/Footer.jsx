import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 1rem;
  background: #333;
  color: #fff;
  text-align: center;

  a {
    color: #fff;
    margin: 0 0.5rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <p>© Jefri All rights reserved. | My Portfolio</p>
    <div>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="mailto:example@example.com">Email</a>
    </div>
  </FooterWrapper>
);

export default Footer;
