import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import sampleImage from '../../sample.jpg';

const GallerySection = styled.section`
  padding: 120px 2rem 6rem;
  background: #ffffff;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageDescription = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 4rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  padding: 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }
`;

const GalleryCard = styled(Link)`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 1;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 1;
    opacity: 0.8;
    transition: opacity 0.4s ease;
  }

  ${GalleryCard}:hover &::before {
    opacity: 0.9;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  ${GalleryCard}:hover img {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  color: white;
  z-index: 2;
  transform: translateY(10px);
  opacity: 0.9;
  transition: all 0.4s ease;

  ${GalleryCard}:hover & {
    transform: translateY(0);
    opacity: 1;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  margin-bottom: 1rem;
`;

const PhotoCount = styled.span`
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(5px);
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

interface GalleryFolder {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  photoCount: number;
}

const Gallery: React.FC = () => {
  const galleryFolders: GalleryFolder[] = [
    {
      id: 'wedding',
      title: 'Wedding Photography',
      description: 'Capturing your special moments with elegance',
      thumbnail: sampleImage,
      photoCount: 50
    },
    {
      id: 'portraits',
      title: 'Portrait Sessions',
      description: 'Professional portraits that tell your story',
      thumbnail: sampleImage,
      photoCount: 30
    },
    {
      id: 'events',
      title: 'Event Coverage',
      description: 'Comprehensive coverage of special events',
      thumbnail: sampleImage,
      photoCount: 40
    },
    {
      id: 'family',
      title: 'Family Portraits',
      description: 'Beautiful family moments frozen in time',
      thumbnail: sampleImage,
      photoCount: 25
    },
    {
      id: 'commercial',
      title: 'Commercial',
      description: 'Professional commercial photography',
      thumbnail: sampleImage,
      photoCount: 35
    },
    {
      id: 'fashion',
      title: 'Fashion',
      description: 'Stylish fashion photography',
      thumbnail: sampleImage,
      photoCount: 45
    }
  ];

  return (
    <GallerySection>
      <Container>
        <PageTitle>Our Photo Galleries</PageTitle>
        <PageDescription>
          Explore our diverse collection of photography work across different genres. 
          Each gallery showcases our commitment to capturing beautiful moments and creating lasting memories.
        </PageDescription>

        <GalleryGrid>
          {galleryFolders.map((folder) => (
            <GalleryCard key={folder.id} to={`/galleries/${folder.id}`}>
              <ImageContainer>
                <img src={folder.thumbnail} alt={folder.title} />
              </ImageContainer>
              <CardContent>
                <CardTitle>{folder.title}</CardTitle>
                <CardDescription>{folder.description}</CardDescription>
                <PhotoCount>{folder.photoCount} Photos</PhotoCount>
              </CardContent>
            </GalleryCard>
          ))}
        </GalleryGrid>
      </Container>
      <MobileQuoteButton to="/contact">Get Quote Now</MobileQuoteButton>
    </GallerySection>
  );
};

export default Gallery; 