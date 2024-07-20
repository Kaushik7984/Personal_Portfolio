import { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "Simple React Website",
        img: "/reactWeb1.png",
        desc: "Built a website using ReactJS, integrating both React Router for seamless navigation and API fetching for dynamic data display.",
        link:"https://reactwebkt.netlify.app/"
    },
    {
        id: 2,
        title: "Food Odering App.",
        img: "/foodOrder1.png",
        desc: "Built a React project where users can browse yummy food items, add them to their cart, and easily check out.Showcased integration of frontend with backend server using HTTP POST requests.",
        link:"https://food-odering-app-react.vercel.app/"
    },
    {
        id: 3,
        title: "Quiz App",
        img: "/quizApp1.png",
        desc: "Designed a Quiz app using React to practice important concepts like Side Effects, Reducers, and Context API.",
        link:"https://quiz-app-livid-rho.vercel.app/"
    },
    {
        id: 4,
        title: "Next App",
        img: "/nextApp1.png",
        desc: "This Food Ordering App is a modern web application built with React.js and Next.js, designed to provide a seamless and intuitive food ordering experience.",
        link:"https://food-odering-next-app.vercel.app/"
    },
]

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ 
        target: ref, 
        // offset: ["start start", "end start"] 
    })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    
                    <motion.div className="textContainer" style={{y}}>
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                        <button><a href={item.link} target='_blank'>See Demo</a> </button>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });


    return (
        <div className="portfolio" ref={ref}>
          <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
          </div>
          {items.map((item) => (
            <Single item={item} key={item.id} />
          ))}
        </div>
      );
    };

export default Portfolio;