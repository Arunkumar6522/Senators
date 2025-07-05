import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: var(--bg-secondary);

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: clamp(2rem, 4vw, 2.5rem);
    margin-bottom: 2rem;
    color: var(--text-primary);
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  svg {
    margin-right: 1rem;
    color: var(--primary-500);
    flex-shrink: 0;
  }

  p {
    margin-bottom: 0;
  }

  a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-500);
    }
  }
`;

const ContactForm = styled(motion.form)`
  background: var(--bg-primary);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-medium);
  border-radius: 4px;
  font-size: 1rem;
  background: var(--bg-input);
  color: var(--text-primary);

  &:focus {
    outline: none;
    border-color: var(--primary-500);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-medium);
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  background: var(--bg-input);
  color: var(--text-primary);

  &:focus {
    outline: none;
    border-color: var(--primary-500);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

const SubmitButton = styled(motion.button)`
  background: var(--primary-500);
  color: var(--text-light);
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-md);

  &:hover {
    background: var(--primary-600);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <ContactSection>
      <Container>
        <ContactGrid>
          <ContactInfo>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let's create something beautiful together. Whether you're planning a special event,
              need professional portraits, or want to capture a memorable moment, we're here to help.
            </motion.p>
            <InfoItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <p>
                <a href="mailto:shuttersbysenators@gmail.com">
                  shuttersbysenators@gmail.com
                </a>
              </p>
            </InfoItem>
            <InfoItem>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <p>Available for photoshoots in your location</p>
            </InfoItem>
          </ContactInfo>

          <ContactForm
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 