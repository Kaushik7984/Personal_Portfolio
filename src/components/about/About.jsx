import { motion } from 'framer-motion'
import './about.scss'
import Skillbar from './Skillbar'


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
        transition: {
            duration: 0.5,
            yoyo: Infinity
        }
    }
}

const About = () => {
    return (
        <div className='about'>

            <div className="imageContainer">
                <motion.img
                    src="/heroflip.png"
                    alt="Hero"
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                />
            </div>

            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial='initial' animate='animate'>
                    <motion.h1 variants={textVariants}>Hi, I'm</motion.h1>
                    <motion.h1 variants={textVariants}>Kaushik Tapaniya</motion.h1>
                    <motion.h2 variants={textVariants}>Welcome to my portfolio website, Experience a dynamic and visually stunning portfolio built with ReactJS. Enjoy smooth, engaging animations powered by Framer Motion and a modern design crafted with SCSS.</motion.h2>

                    <motion.div variants={textVariants} className="buttons">
                        <a href="/Resume-Kaushik.pdf" download="Resume-Kaushik.pdf"> <motion.button variants={textVariants}>
                            Download my Resume
                        </motion.button></a>
                        <a href="#Contact"><motion.button variants={textVariants}> Contact Me </motion.button></a>
                    </motion.div>
                </motion.div>

                <motion.div className='skill'>
                    < Skillbar />
                </motion.div>
            </div >


        </div >
    )
}

export default About
