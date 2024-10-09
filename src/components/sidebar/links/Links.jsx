import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Home", "About", "Portfolio", "Contact"];
  const socialLinks = [
    { href: "https://www.linkedin.com/in/kaushik-tapaniya-624142239/", icon: <FaLinkedin />, name: "LinkedIn" },
    { href: "https://github.com/Kaushik7984", icon: <FaGithub />, name: "GitHub" },
    { href: "https://www.instagram.com/kaushiiq_7x?igsh=bXdxYTNlNDN2cXk4", icon: <FaInstagram />, name: "Instagram" },
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
      <motion.a
        href="/Resume-Kaushik.pdf" 
        download
        className="download-cv"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiDownload /> Download CV
      </motion.a>
      <motion.div className="social-links">
        {socialLinks.map((link) => (
          <motion.a
            href={link.href}
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Links;
