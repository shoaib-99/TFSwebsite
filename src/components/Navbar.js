import festivelogo from '../img/festive.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useState, useEffect } from 'react';

function Navbar() {
  const [showGoTop, setShowGoTop] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [isBarOpened, setIsBarOpened] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenWidth = window.screen.width;

      if (screenWidth < 768 && scrollPosition > 690) {
        setShowGoTop(true);
        setShowNav(true);
      } else if (screenWidth > 768 && scrollPosition > 220) {
        setShowGoTop(true);
        setShowNav(true);
      } else {
        setShowGoTop(false);
        setShowNav(false);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openBar = () => {
    setIsBarOpened(!isBarOpened);
  };

  const handleLinkClick = () => {
    if (isBarOpened) {
      setIsBarOpened(false);
    }
  };

  const handleGoTopClick = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: true,
    });
  };

  return (
    <nav className={`navbar ${showNav ? 'navopened' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="logo-container">
            <h1 className="logo">
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="headerbg"
                style={{ cursor: 'pointer' }}
                onClick={handleLinkClick}
              >
                <img alt="hi" src={festivelogo} className="img-fluid" />
              </Link>
            </h1>
          </div>
          <ul className={`bar ${isBarOpened ? 'opened' : ''}`}>
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="headerbg"
                offset={-100}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-100}
                onClick={handleLinkClick}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="about-scroll"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
                offset={-200}
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
          </ul>
          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
          <li>
              <Link
                activeClass="active"
                to="bookings"
                spy={true}
                smooth={true}
                duration={1000}
                className="book-now-button"
                onClick={handleLinkClick}
                offset={-200}
              >
                Book Now!
              </Link>
            </li>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;