import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Person, Event, CheckCircle } from '@mui/icons-material';

const ServicesContainer = styled.div`
  min-height: 100vh;
  padding: 40px 20px;
  background: linear-gradient(to bottom, #f8f9fa, #ffffff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const ServiceGridContainer = styled(motion.div)`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const ServiceGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  padding: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    gap: 2rem;
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: left;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: all 0.3s ease;
  min-height: 450px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    padding: 2rem;
    min-height: auto;
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: #f0f7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;

  svg {
    width: 40px;
    height: 40px;
    color: #3498db;
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;

    svg {
      width: 35px;
      height: 35px;
    }
  }
`;

const Title = styled.h3`
  font-size: 1.8rem;
  color: #2c3e50;
  margin: 0;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Description = styled.p`
  color: #505965;
  line-height: 1.7;
  margin: 0;
  font-size: 1.1rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  color: #2c3e50;
  margin: 0 0 2rem 0;
  font-weight: 700;
  width: 100%;
  max-width: 800px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin: 1rem 0 1.5rem 0;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #505965;
  font-size: 1rem;

  svg {
    color: #27ae60;
    font-size: 1.2rem;
  }
`;

const MobileQuoteButton = styled(Link)`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #3498db;
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover, &:focus {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(52, 152, 219, 0.4);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const services = [
  {
    icon: <Camera />,
    title: "Wedding Photography",
    description: "Capture every precious moment of your special day with our professional wedding photography services. We blend artistic vision with technical excellence to create timeless memories.",
    features: [
      "Full-day coverage available",
      "Engagement photo sessions",
      "High-resolution digital images",
      "Online gallery sharing",
      "Premium photo albums",
      "Multiple photographer options"
    ]
  },
  {
    icon: <Person />,
    title: "Portrait Sessions",
    description: "Professional portrait photography that captures your unique personality and style. Perfect for individuals, families, and professional headshots.",
    features: [
      "Indoor and outdoor sessions",
      "Multiple outfit changes",
      "Professional retouching",
      "Digital and print options",
      "Family portrait packages",
      "Corporate headshots"
    ]
  },
  {
    icon: <Event />,
    title: "Event Coverage",
    description: "Comprehensive event photography services for all your special occasions. From corporate events to milestone celebrations, we'll document every meaningful moment.",
    features: [
      "Corporate events & conferences",
      "Birthday celebrations",
      "Anniversary parties",
      "Product launches",
      "Real estate photography",
      "Same-day photo delivery"
    ]
  }
];

const Services: React.FC = () => {
  return (
    <ServicesContainer>
      <SectionTitle>Professional Photography Services</SectionTitle>
      <ServiceGridContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ServiceGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <IconWrapper>
                {service.icon}
              </IconWrapper>
              <Title>{service.title}</Title>
              <Description>{service.description}</Description>
              <FeatureList>
                {service.features.map((feature, idx) => (
                  <FeatureItem key={idx}>
                    <CheckCircle />
                    {feature}
                  </FeatureItem>
                ))}
              </FeatureList>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </ServiceGridContainer>
      <MobileQuoteButton to="/contact">Get Quote Now</MobileQuoteButton>
    </ServicesContainer>
  );
};

export default Services; 