import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import sampleImage from '../../sample.jpg';

const DetailSection = styled.section`
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

const BackButton = styled.button`
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  padding: 0;

  &:hover {
    color: var(--primary-500);
  }
`;

const VideoSection = styled.div`
  margin-bottom: 4rem;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const PhotoCard = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 3/4;

  &:hover img {
    transform: scale(1.1);
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const QuoteButton = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: var(--primary-500);
  color: var(--text-light);
  border: none;
  border-radius: 30px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 100;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-600);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

const QuoteForm = styled(motion.form)`
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  position: relative;
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const FormSubtitle = styled.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid var(--border-medium);
  border-radius: 8px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: var(--primary-500);
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: var(--primary-500);
  color: var(--text-light);
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-600);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: var(--primary-500);
  }
`;

const GalleryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Generate an array of sample images
  const images = Array(12).fill(sampleImage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsQuoteModalOpen(false);
  };

  return (
    <DetailSection>
      <Container>
        <BackButton onClick={() => navigate('/galleries')}>
          ← Back to Galleries
        </BackButton>

        <VideoSection>
          <VideoWrapper>
            <iframe
              src="https://www.youtube.com/embed/your-video-id"
              title={`Gallery Video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoWrapper>
        </VideoSection>

        <PhotoGrid>
          {images.map((image, index) => (
            <PhotoCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Photo src={image} alt={`Gallery item ${index + 1}`} />
            </PhotoCard>
          ))}
        </PhotoGrid>

        <QuoteButton
          onClick={() => setIsQuoteModalOpen(true)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          Get Quote Now
        </QuoteButton>

        <AnimatePresence>
          {isQuoteModalOpen && (
            <Modal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuoteModalOpen(false)}
            >
              <QuoteForm
                onClick={e => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onSubmit={handleSubmit}
              >
                <CloseButton onClick={() => setIsQuoteModalOpen(false)}>×</CloseButton>
                <FormTitle>Request a Quote</FormTitle>
                <FormSubtitle>
                  Get a custom quote for your photography needs
                </FormSubtitle>

                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    required
                    placeholder="Enter your name"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    required
                    placeholder="Enter your email"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    id="phone"
                    required
                    placeholder="Enter your phone number"
                  />
                </FormGroup>

                <SubmitButton type="submit">
                  Submit Request
                </SubmitButton>
              </QuoteForm>
            </Modal>
          )}
        </AnimatePresence>
      </Container>
    </DetailSection>
  );
};

export default GalleryDetail; 