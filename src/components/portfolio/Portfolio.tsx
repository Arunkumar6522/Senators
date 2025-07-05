import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Isotope from 'isotope-layout';
import { motion, AnimatePresence } from 'framer-motion';
import sampleImage from '../../sample.jpg';

const PortfolioSection = styled.section`
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

const SectionTitle = styled(motion.h1)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const FilterContainer = styled(motion.ul)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  margin-bottom: 3rem;
  padding: 0;
`;

const FilterItem = styled.li<{ isActive: boolean }>`
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  color: ${props => props.isActive ? 'var(--text-light)' : 'var(--text-secondary)'};
  background: ${props => props.isActive ? 'var(--primary-500)' : 'transparent'};
  border: 2px solid ${props => props.isActive ? 'var(--primary-500)' : 'var(--border-medium)'};
  border-radius: 25px;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    border-color: var(--primary-500);
    color: ${props => props.isActive ? 'var(--text-light)' : 'var(--primary-500)'};
    transform: translateY(-2px);
  }
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  opacity: 0;

  &.is-ready {
    opacity: 1;
    transition: opacity 0.5s ease;
  }
`;

const PortfolioItem = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  cursor: pointer;
  transform-style: preserve-3d;
  perspective: 1000px;
  background: var(--bg-primary);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }

  &::before {
    content: '';
    display: block;
    padding-top: 75%;
  }
`;

const ItemImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ItemOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    var(--bg-overlay) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  color: var(--text-light);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${PortfolioItem}:hover & {
    opacity: 1;
  }
`;

const ItemTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  font-weight: 600;
  color: var(--text-light);
  transform: translateY(20px);
  transition: transform 0.3s ease;

  ${PortfolioItem}:hover & {
    transform: translateY(0);
  }
`;

const ItemCategory = styled.p`
  color: var(--primary-300);
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transform: translateY(20px);
  transition: transform 0.3s ease 0.1s;

  ${PortfolioItem}:hover & {
    transform: translateY(0);
  }
`;

interface PortfolioItemType {
  id: number;
  title: string;
  category: string;
  image: string;
}

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('*');
  const [items] = useState<PortfolioItemType[]>([
    {
      id: 1,
      title: 'Tracy & Aaron',
      category: 'wedding',
      image: sampleImage
    },
    {
      id: 2,
      title: 'Urban Life',
      category: 'lifestyle',
      image: sampleImage
    },
    {
      id: 3,
      title: 'Summer Portraits',
      category: 'portrait',
      image: sampleImage
    },
    {
      id: 4,
      title: 'Nature Wedding',
      category: 'wedding',
      image: sampleImage
    },
    {
      id: 5,
      title: 'City Life',
      category: 'lifestyle',
      image: sampleImage
    },
    {
      id: 6,
      title: 'Family Portraits',
      category: 'portrait',
      image: sampleImage
    }
  ]);

  const isotope = useRef<Isotope | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      isotope.current = new Isotope(gridRef.current, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows',
        transitionDuration: '0.6s'
      });

      // Add ready class after initialization
      setTimeout(() => {
        if (gridRef.current) {
          gridRef.current.classList.add('is-ready');
        }
      }, 100);
    }
    return () => isotope.current?.destroy();
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filter === '*'
        ? isotope.current.arrange({ filter: '*' })
        : isotope.current.arrange({ filter: `.${filter}` });
    }
  }, [filter]);

  const handleFilterClick = (category: string) => {
    setFilter(category);
  };

  return (
    <PortfolioSection>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Portfolio
        </SectionTitle>
        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore our diverse collection of photographic artistry
        </SectionSubtitle>

        <FilterContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FilterItem
            isActive={filter === '*'}
            onClick={() => handleFilterClick('*')}
          >
            All
          </FilterItem>
          <FilterItem
            isActive={filter === 'wedding'}
            onClick={() => handleFilterClick('wedding')}
          >
            Wedding
          </FilterItem>
          <FilterItem
            isActive={filter === 'lifestyle'}
            onClick={() => handleFilterClick('lifestyle')}
          >
            Lifestyle
          </FilterItem>
          <FilterItem
            isActive={filter === 'portrait'}
            onClick={() => handleFilterClick('portrait')}
          >
            Portrait
          </FilterItem>
        </FilterContainer>

        <Grid ref={gridRef}>
          <AnimatePresence>
            {items.map(item => (
              <PortfolioItem
                key={item.id}
                className={`portfolio-item ${item.category}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                layout
              >
                <ItemImage src={item.image} alt={item.title} />
                <ItemOverlay>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemCategory>{item.category}</ItemCategory>
                </ItemOverlay>
              </PortfolioItem>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>
    </PortfolioSection>
  );
};

export default Portfolio; 