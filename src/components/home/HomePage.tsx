import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import sampleImage from '../../sample.jpg';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url(${sampleImage}) no-repeat center center;
  background-size: cover;
  padding: 0 20px;
  text-align: center;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const MainHeading = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  animation: fadeInDown 1s ease;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SubHeading = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 0;
  opacity: 0.9;
  animation: fadeIn 1s ease 0.5s forwards;
  opacity: 0;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.9;
    }
  }
`;

const CTAContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;
    gap: 1rem;
  }
`;

const ButtonBase = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 30px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  min-width: 180px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
`;

const PrimaryButton = styled(ButtonBase)`
  background: #3498db;
  color: #ffffff;

  &:hover, &:focus {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
  }
`;

const SecondaryButton = styled(ButtonBase)`
  background: #ffffff;
  color: #3498db;

  &:hover, &:focus {
    background: #3498db;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
  }
`;

const Section = styled.section<{ $dark?: boolean }>`
  padding: 6rem 2rem;
  background: ${props => props.$dark ? '#000000' : '#ffffff'};
  color: ${props => props.$dark ? '#ffffff' : '#000000'};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const GallerySection = styled(Section)`
  background: #f8f9fa;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const GalleryCard = styled(motion.div)`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  height: 300px;

  &:hover .overlay {
    opacity: 1;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${GalleryCard}:hover & {
    transform: scale(1.1);
  }
`;

const GalleryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const GalleryTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  text-align: center;
`;

const GalleryDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  text-align: center;
  font-size: 1rem;
`;

const MapSection = styled(Section)`
  background: white;
`;

const MapContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ResponsiveMap = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media (max-width: 768px) {
    padding-bottom: 75%;
  }
`;

const BlueText = styled.span`
  color: #3498db;
`;

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const galleries = [
    {
      id: 'wedding',
      title: 'Wedding Photography',
      image: sampleImage,
      description: 'Capturing your special moments with elegance'
    },
    {
      id: 'portraits',
      title: 'Portrait Sessions',
      image: sampleImage,
      description: 'Professional portraits that tell your story'
    },
    {
      id: 'events',
      title: 'Event Coverage',
      image: sampleImage,
      description: 'Comprehensive coverage of special events'
    },
    {
      id: 'family',
      title: 'Family Portraits',
      image: sampleImage,
      description: 'Beautiful family moments frozen in time'
    },
    {
      id: 'commercial',
      title: 'Commercial',
      image: sampleImage,
      description: 'Professional commercial photography'
    },
    {
      id: 'fashion',
      title: 'Fashion',
      image: sampleImage,
      description: 'Stylish fashion photography'
    }
  ];

  return (
    <>
      <HeroSection>
        <HeroContent>
          <MainHeading>
            Crafting Dreams into <BlueText>Pixels</BlueText>
          </MainHeading>
          <SubHeading>
            Capturing life's precious moments with artistic vision and professional excellence
          </SubHeading>
          <CTAContainer>
            <PrimaryButton to="/contact">
              Book Now
            </PrimaryButton>
            <SecondaryButton to="/contact">
              Contact Us
            </SecondaryButton>
          </CTAContainer>
        </HeroContent>
      </HeroSection>

      <GallerySection>
        <SectionTitle>Our Portfolio</SectionTitle>
        <GalleryGrid>
          {galleries.map((gallery) => (
            <GalleryCard
              key={gallery.id}
              onClick={() => navigate(`/gallery/${gallery.id}`)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GalleryImage src={gallery.image} alt={gallery.title} />
              <GalleryOverlay className="overlay">
                <GalleryTitle>{gallery.title}</GalleryTitle>
                <GalleryDescription>{gallery.description}</GalleryDescription>
              </GalleryOverlay>
            </GalleryCard>
          ))}
        </GalleryGrid>
      </GallerySection>

      <MapSection>
        <SectionTitle>Visit Us</SectionTitle>
        <MapContainer>
          <ResponsiveMap>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4279.626102586149!2d80.11842860000002!3d13.159198199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526335bab8f157%3A0x8e9cb7a698760e7!2sKADS%20Enterprises%20pvt%20ltd!5e1!3m2!1sen!2sin!4v1751720756641!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            />
          </ResponsiveMap>
        </MapContainer>
      </MapSection>
    </>
  );
};

export default HomePage; 