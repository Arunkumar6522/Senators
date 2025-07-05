import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
    height: 50px;
  }
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  z-index: 1001;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    padding: 1rem;
    gap: 0;
    transform: translateY(${props => props.isOpen ? '0' : '-100%'});
    opacity: ${props => props.isOpen ? '1' : '0'};
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    height: calc(100vh - 50px);
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${props => props.$isActive ? '#3498db' : '#333'};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    color: #3498db;
    background: ${props => props.$isActive ? 'none' : 'rgba(52, 152, 219, 0.1)'};
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1rem;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #eee;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background: rgba(52, 152, 219, 0.1);
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #333;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuIcon = styled.div<{ isOpen: boolean }>`
  width: 24px;
  height: 2px;
  background: ${props => props.isOpen ? 'transparent' : '#333'};
  position: relative;
  transition: all 0.3s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: #333;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${props => props.isOpen ? '0' : '-6px'};
    transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
  }

  &::after {
    bottom: ${props => props.isOpen ? '0' : '-6px'};
    transform: ${props => props.isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    opacity: ${props => props.isOpen ? 1 : 0};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
    z-index: 999;
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <HeaderContainer>
        <Logo to="/">
          Shutters by Senators
        </Logo>
        <MenuButton onClick={toggleMenu} aria-label="Toggle menu">
          <MenuIcon isOpen={isMenuOpen} />
        </MenuButton>
        <Nav isOpen={isMenuOpen}>
          <NavLink 
            to="/" 
            $isActive={location.pathname === '/'}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/galleries" 
            $isActive={location.pathname.includes('/galleries')}
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/services" 
            $isActive={location.pathname === '/services'}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink 
            to="/contact" 
            $isActive={location.pathname === '/contact'}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </NavLink>
        </Nav>
      </HeaderContainer>
      <Overlay isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header; 