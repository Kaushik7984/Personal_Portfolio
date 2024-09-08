import { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "Event Management",
        img: "/event.png",
        desc: "Created Event Management App using ReactJS and React Router. Easily add, edit, and delete events with seamless navigation and a user-friendly interface.",
        link:"https://event-management-react-app-nu.vercel.app/"
    },
    {
        id: 2,
        title: "Expense Tracker",
        img: "/expense.png",
        desc: "The Expense Tracker app is a user-friendly tool built with ReactJS for managing personal finances. It allows users to add, edit, and delete expenses, categorize spending, and visualize data through dynamic charts. With a clean, responsive design, it offers an intuitive way to track and optimize expenses across different devices",
        link:"https://expense-tracker-brown-omega.vercel.app/"
    },
    {
        id: 3,
        title: "Food Odering App.",
        img: "/foodOrder1.png",
        desc: "Built a React project where users can browse yummy food items, add them to their cart, and easily check out.Showcased integration of frontend with backend server using HTTP POST requests.",
        link:"https://food-odering-app-react.vercel.app/"
    },
    {
        id: 4,
        title: "Quiz App",
        img: "/quizApp1.png",
        desc: "Designed a Quiz app using React to practice important concepts like Side Effects, Reducers, and Context API.",
        link:"https://quiz-app-livid-rho.vercel.app/"
    },
    {
        id: 5,
        title: "Next App",
        img: "/nextApp1.png",
        desc: "This Food Ordering App is a modern web application built with React.js and Next.js, designed to provide a seamless and intuitive food ordering experience.",
        link:"https://food-odering-next-app.vercel.app/"
    },
    {
        id: 6,
        title: "Personal Portfolio",
        img: "/portfolio.png",
        desc: "Developed a personal portfolio website using ReactJS for structure, SCSS for styling, and Framer Motion for animations.",
        link:"https://kaushik-portfolio-eta.vercel.app/"
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
                        <a href={item.link} target='_blank'><button>See Demo</button></a> 
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