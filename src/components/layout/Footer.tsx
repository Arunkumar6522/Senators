import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  background: #1a1a1a;
  color: white;
  padding: 4rem 0 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const FooterSection = styled.div`
  h3 {
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }

  p {
    margin-bottom: 1rem;
    opacity: 0.8;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.8rem;
  }

  a {
    color: white;
    opacity: 0.8;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
      color: var(--primary-color);
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    opacity: 0.6;
    font-size: 0.9rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterGrid>
          <FooterSection>
            <h3>Shutters by Senators</h3>
            <p>Capturing your precious moments with elegance and style.</p>
            <SocialLinks>
              <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </SocialIcon>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>Quick Links</h3>
            <FooterLinks>
              <li><Link to="/galleries">Galleries</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="tel:+917448735252">
                  <i className="fas fa-phone"></i> +91 744 873 5252
                </a>
              </li>
              <li>
                <a href="mailto:shuttersbysenators@gmail.com">
                  <i className="fas fa-envelope"></i> shuttersbysenators@gmail.com
                </a>
              </li>
            </ul>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <p>&copy; {new Date().getFullYear()} Shutters by Senators. All rights reserved.</p>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer; 