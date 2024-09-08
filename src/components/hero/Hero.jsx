import { motion } from 'framer-motion'
import './hero.scss'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
        
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    },
    hover: {
        scale: 1.03,
        y:20 ,
        
        transition: {
            duration: 0.5,
            yoyo: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        opacity: 1,
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
    
}

const imageVariants = {
    initial: {
        opacity: 0,
        scale: 0.8,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    },
    hover: {
        scale: 1.05,
        x:200,
        transition: {
            duration: 0.5,
            yoyo: Infinity
        }
    }
}



const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial='initial' animate='animate'>
                    <motion.h2 className='im' variants={textVariants}>I'm</motion.h2>
                    <motion.h2 className='name' variants={textVariants} whileHover="hover">Kaushik Tapaniya</motion.h2>
                    <motion.h1 variants={textVariants}>a Web Developer</motion.h1>
                    <motion.h3 variants={textVariants}>As a full-stack developer specializing in the MERN stack, I create dynamic, scalable applications that blend functionality with intuitive design for optimal user engagement.</motion.h3>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="scroll" />
                </motion.div>
            </div >
            <motion.div variants={sliderVariants} initial='initial' animate='animate' className="slidingTextContainer">
                Javascript ReactJs
            </motion.div>
            <div className="imageContainer">
                <motion.img 
                    src="/hero1.png" 
                    alt="Hero" 
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    // whileHover="hover"
                />
            </div>
        </div >
    )
}

export default Hero
