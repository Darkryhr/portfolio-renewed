'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

import styles from '@/styles/Header.module.scss';
import { FooterLogo, Logo } from './Icons';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  const closeMenu = () => {
    document.body.style.overflow = 'scroll';
    document.body.style.height = '100%';
    mobileMenuRef.current.classList.remove(styles.close);
    mobileMenuRef.current.classList.add(styles.open);

    setMobileMenuOpen(false);
  };

  const openMenu = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    mobileMenuRef.current.classList.remove(styles.open);
    mobileMenuRef.current.classList.add(styles.close);
    setMobileMenuOpen(true);
  };

  useEffect(() => {
    function handleWindowResize() {
      if (window.innerWidth > 767) {
        closeMenu();
      }
    }

    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.sticky__wrapper} ${scrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.header}>
        <Link className={styles.logo} href='/'>
          <Logo />
        </Link>
        <nav className={styles.nav}>
          <LandscapeNavLink href='portfolio'>Portfolio</LandscapeNavLink>
          <LandscapeNavLink href='blog'>Blog</LandscapeNavLink>
          <LandscapeNavLink href='about'>About</LandscapeNavLink>
        </nav>
        <div className={styles.cta__container}>
          <Link href='/contact'>
            <button className={`btn ${styles.cta}`}>Talk to me</button>
          </Link>
        </div>
        <button
          className={`${styles.menu}`}
          ref={mobileMenuRef}
          onClick={() => (mobileMenuOpen ? closeMenu() : openMenu())}
        >
          <div></div>
          <div></div>
        </button>
        <div
          className={`${styles.mobile__menu} ${
            mobileMenuOpen ? styles.opened : styles.closed
          }`}
        >
          <div className={styles.lineUpper}></div>
          <div
            className={`${styles.mobile__linksContainer} ${
              mobileMenuOpen ? styles.opened : styles.closed
            }`}
          >
            <ul className={styles.mobile__social}>
              <li>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://twitter.com/GabrielAintReal'
                >
                  <AiOutlineTwitter size={28} />
                </a>
              </li>
              <li>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://www.linkedin.com/in/gabriel-lellouche'
                >
                  <FaLinkedinIn size={28} />
                </a>
              </li>
              <li>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://instagram.com/crck_dome'
                >
                  <AiOutlineInstagram size={28} />
                </a>
              </li>
              <li>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href='https://github.com/Darkryhr'
                >
                  <AiFillGithub size={28} />
                </a>
              </li>
            </ul>
            <nav className={styles.nav__mobile}>
              <MobileNavLink href='/' closeMenu={closeMenu}>
                Home
              </MobileNavLink>
              <MobileNavLink href='portfolio' closeMenu={closeMenu}>
                Portfolio
              </MobileNavLink>
              <MobileNavLink href='blog' closeMenu={closeMenu}>
                Blog
              </MobileNavLink>
              <MobileNavLink href='about' closeMenu={closeMenu}>
                About
              </MobileNavLink>
              <MobileNavLink href='contact' closeMenu={closeMenu}>
                Contact
              </MobileNavLink>
            </nav>
          </div>
          <div className={styles.mobile__menuEmail}>
            <h6>Email</h6>
            <p>hello@gabriel-lellouche.com</p>
          </div>
          <div className={styles.lineLower}></div>
          <div className={styles.mobile__menuLogo}>
            <FooterLogo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const LandscapeNavLink = ({ children, href }) => {
  const segment = useSelectedLayoutSegment();

  const isActive = href === segment;

  return (
    <Link href={href} className={isActive ? styles.active : ''}>
      {children}
    </Link>
  );
};

const MobileNavLink = ({ children, href, closeMenu }) => {
  const segment = useSelectedLayoutSegment();

  let isActive;

  if (href === '/' && segment === null) isActive = true;
  else isActive = href === segment;

  return (
    <Link
      href={href}
      className={isActive ? styles.active : ''}
      onClick={() => closeMenu()}
    >
      {children}
    </Link>
  );
};
