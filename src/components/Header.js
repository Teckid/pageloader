import React from "react";
import { motion } from 'framer-motion';
import { useAuth0 } from "@auth0/auth0-react";

const Header = ({ onMouseOver, onMouseLeave }) => {

  const { user } = useAuth0();
  const userPicture = user === undefined ? user : user.picture;

  const onLinkHover = () => {
    document.getElementById('cursor').classList.add('link-grow');
  }

  const onLinkLeave = () => {
    document.getElementById('cursor').classList.remove('link-grow');
  }
  return (
    <motion.div className="header"
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.6
      }}>
      <div className="header-inner">
        <div className="logo">Hub</div>
        <nav className="nav">
          <li>
            <a
              href="/games"
              onMouseOver={onLinkHover}
              onMouseLeave={onLinkLeave}>
              Games
            </a>
          </li>
          <li>
            <a
              href="/movies"
              onMouseOver={onLinkHover}
              onMouseLeave={onLinkLeave}>
              Movies
            </a>
          </li>
          <li>
            <a
              href="/about"
              onMouseOver={onLinkHover}
              onMouseLeave={onLinkLeave}>
              About
            </a>
          </li>
        </nav>
        <button id="profile-button" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
          <img className='user-img' src={ user === undefined ? '/images/userImage_default.png' : userPicture }/>
        </button>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
