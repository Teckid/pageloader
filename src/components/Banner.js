import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

//VARIANTS
//WE CAN CALL THE INNER VARS HOWEVER WE LIKE. IN THIS CASE: ANIMATE...
const banner = {
  animate: {
    transition: {
      //WAIT 0.4s UNTIL...
      delayChildren: .4,
      //...STAGGERING ALL CHILDREN
      staggerChildren: .1
    },
  },
};

//...IN THIS CASE INITIAL AND ANIMATE
const letterAnimation = {
  initial: {
    y: 400
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1
    }
  }
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);

  return (
    <motion.div className="banner" variants={banner}>
      <BannerRowTop title={"media"} />
      <BannerRowCenter title={"experience"} playMarquee={playMarquee} />
      <BannerRowBottom title={"center"} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span className="row-title"
    variants={disabled ? null : banner}
    /*
      HERE WE PASS OUR ABOVE CREATED INITIAL TO THE ACTUAL INITIAL:
      IN THIS CASE, WE ARE NOT ALLOWED TO CHOOSE THE NAME AS WE WISH,
      AS THE NAME INITIAL, ANIMATE AND EXIT COME FROM FRAMER MOTION FRAMEWORK
    */
    initial='initial'
    animate='animate'>
    {[...title].map((letter) => (
      <motion.span className="row-letter" variants={letterAnimation}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

/*
  IN THE FOLLOWING, WE CREATE OUR BANNER COMPONENTS (IN THIS CASE 3)
  EACH COMPONENT RETURNS A BANNER WITH ANIMATED LETTERS.

  TOP ROW BANNER: CONTAINS AN ADDITIONAL DESCRIPTION MESSAGE TO DISPLAY
  CENTERED BANNER: ADDED MOVEMENT FOR THE DISPLAYED TEXT. EACH ADDED TITLE COMPONENT FASTENS THE ANIMATION
  BOTTOM BANNER: IS DISPLAYED CENTERED AND INVITES THE USER TO SCROLL DOWN
*/

// TOP ROW BANNER
const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row"}>
      <div className="row-col">
        <AnimatedLetters title={title} />
      </div>
      <motion.div className="row-col"
        // WE CAN ALSO SET VALUES FOR INITIAL, ANIMATE AND EXIT DIRECTLY
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.4

        }}>
        <span className="row-message">
          Everything you need is here.<br />
          Join the revolution.
        </span>
      </motion.div>
    </div>
  );
};

//BOTTOM ROW BANNER
const BannerRowBottom = ({ title }) => {
  return (
    <div className={"banner-row center"}>
      <motion.div className="scroll"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1, delay: 1.8 }}>
          scroll
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1, delay: 1.8 }}>
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} />
    </div>
  );
};

//CENTERED ROW BANNER
const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <div className="marquee__inner">
        <AnimatedLetters title={title} disabled={true}/>
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled={true}/>
        <AnimatedLetters title={title} disabled={true}/>
      </div>
    </div>
  );
};

export default Banner;
