import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import sampleImage from '../../sample.jpg';

const BlogSection = styled.section`
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

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
`;

const BlogPost = styled(motion.article)`
  background: var(--bg-primary);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const PostContent = styled.div`
  padding: 1.5rem;
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: var(--text-secondary);
  font-size: 0.9rem;

  svg {
    margin-right: 0.5rem;
  }
`;

const PostExcerpt = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ReadMore = styled(Link)`
  color: var(--primary-500);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;

  svg {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--primary-600);
    svg {
      transform: translateX(5px);
    }
  }
`;

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Wedding Photography',
      date: 'March 15, 2024',
      author: 'Jane Doe',
      excerpt: 'Discover the secrets to capturing timeless wedding moments that tell your unique love story...',
      image: sampleImage,
    },
    {
      id: 2,
      title: 'Essential Tips for Portrait Photography',
      date: 'March 10, 2024',
      author: 'John Smith',
      excerpt: 'Learn professional techniques to create stunning portrait photographs that capture personality...',
      image: sampleImage,
    },
    {
      id: 3,
      title: 'Mastering Natural Light Photography',
      date: 'March 5, 2024',
      author: 'Sarah Johnson',
      excerpt: 'Explore how to use natural light to create beautiful, atmospheric photographs in any setting...',
      image: sampleImage,
    },
  ];

  return (
    <BlogSection>
      <Container>
        <BlogHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Title>Our Blog</Title>
            <Subtitle>
              Insights, tips, and stories about photography and visual storytelling
            </Subtitle>
          </motion.div>
        </BlogHeader>

        <BlogGrid>
          {blogPosts.map((post, index) => (
            <BlogPost
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PostImage src={post.image} alt={post.title} />
              <PostContent>
                <PostTitle>{post.title}</PostTitle>
                <PostMeta>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {post.date} by {post.author}
                </PostMeta>
                <PostExcerpt>{post.excerpt}</PostExcerpt>
                <ReadMore to={`/blog/${post.id}`}>
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </ReadMore>
              </PostContent>
            </BlogPost>
          ))}
        </BlogGrid>
      </Container>
    </BlogSection>
  );
};

export default Blog; 