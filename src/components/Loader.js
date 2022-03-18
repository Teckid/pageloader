import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Image from "./Image";

//Variants
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.6, .01, -.05, .96],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8
    }
  }
}

const itemMain = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [.6, .01, -.05, .95],
      duration: 1.6,
    },
    //HERE WE DON´T NEED AN EXIT PROPERTY
  }
}

const Loader = ({ setLoading }) => {

  const location = useLocation();

  return (
    <div className='loader'>
      { location.pathname === '/' &&
        <motion.div className='loader-inner'
          variants={container}
          //INITAL VALUE BEFORE COMPONENT MOUNTS
          initial='hidden'
          //COMPONENT MOUNTED
          animate='show'
          //COMPONENT UNMOUNTED
          exit='exit'
          //SET STATE OF LOADING TO FALSE AS SOON AS ALL ANIMATIONS COMPLETE
          onAnimationComplete={() => setLoading(false)}>
          <ImageBlock variants={item} id='image-3' />
          <motion.div className='transition-image' variants={itemMain}>
            <motion.img
              src={process.env.PUBLIC_URL + `/images/login-img.jpg`}
              alt='random alt' layoutId='main-image-1'
            />
          </motion.div>
          <ImageBlock variants={item} id='image-1' />
          <ImageBlock variants={item} id='image-4' />
          <ImageBlock variants={item} id='image-2' />
        </motion.div>
      }
    </div>
  );
};

export const ImageBlock = ({ id, variants }) => {
  return (
    <motion.div className={`image-block ${id}`}
      variants={variants}>
      <Image
        src={process.env.PUBLIC_URL + `/images/${id}.png`}
        fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};
export default Loader;
