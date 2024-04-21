import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ReactGA from "react-ga";
import '../../Category.css'
// Import project images
import eCom from "../../Assets/Projects/E-com.png";
import jsomBlog from "../../Assets/Projects/jsomBlog.png";
import taskify from "../../Assets/Projects/Taskify.png";
import aF from "../../Assets/Projects/artisteeF.png";
import aA from "../../Assets/Projects/artisteeA.png";
import easyCode from "../../Assets/Projects/easy-code.png";
import eco from "../../Assets/Projects/eco.jpeg";
// Add other project images as needed

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  // ...

const projectsData = [
  {
    imgPath: taskify,
    title: "DeepRL for Algorithmic Trading",
    description: "Developed and optimized deep reinforcement learning models to enhance trading strategies. Utilized Python, Pandas, NumPy, and TensorFlow, achieving a 25% improvement in strategy performance.",
    link: "https://github.com/ezH1929/Deep-RL-for-Stock-Market",
    category: "ML"
  },
  {
    imgPath: easyCode,
    title: "Ecommerce Website",
    description: "Developed an e-commerce website using Java Spring Boot for backend integration, HTML5, CSS3, and JavaScript for a responsive frontend, and MySQL for efficient transaction management.",
    link: "https://github.com/Swekrish303/Online_SuperMarket",
    category: "Full-Stack"
  },
  {
    imgPath: eCom,
    title: "Time Series Analysis",
    description: "I applied time series analysis techniques, particularly focusing on the Autoregressive Integrated Moving Average (ARIMA) model, to forecast COVID-19 deaths.",
    link: "https://github.com/ezH1929/Time-Series-Analysis-for-Covid",
    category: "Econometric"
  },
  {
    imgPath: jsomBlog,
    title: "Convex Hull Algorithms: Implementation and Visualization",
    description: "Implemented and visualized two convex hull algorithms, Jarvis March and Kirkpatrick Seidel, using Python, Flask, and JavaScript.",
    link: "https://github.com/ezH1929/Convex-Hull-Algorithms",
    category: "Programming"
  },
  {
    imgPath: aF,
    title: "Image Reconstruction using Generative AI",
    description: "Designed and implemented a comprehensive image reconstruction system in Python, utilizing PCA, PPCA, and VAE algorithms from scratch.",
    link: "https://github.com/ezH1929/Image-reconstruction/tree/master/GenAI",
    category: "ML"
  },
  {
    imgPath: aA,
    title: "StudyBuddy",
    description: "Designed and developed a collaborative study group platform using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
    link: "https://github.com/ezH1929/StudyBuddy/tree/master",
    category: "Full-Stack"
  },
  {
    imgPath: eco, // Placeholder image path, replace with actual image for the ANFIS project
    title: "Stock Price Prediction using ANFIS",
    description: "Developed a stock price prediction model using the Adaptive Neuro-Fuzzy Inference System (ANFIS), integrated with machine learning and fuzzy logic.",
    link: "https://github.com/ezH1929/Stock-Price-Prediction-using-ANFIS-model",
    category: "ML" // Assign a category
  },
  {
    imgPath: eco, // Placeholder image path, replace with actual image for the ANFIS project
    title: "Economic Insights through Ratio Analysis",
    description: "Conducted meticulous examination of diverse financial ratios to discern patterns and extrapolate economic implications.",
    link: "https://docs.google.com/document/d/1ZaQ6Su3tcl5xEoLbi_PvUjUZdV8r9OnsbHa6Q9JWfw4/edit?usp=sharing",
    category: "Finance" // Assign a category
  },

  {
    imgPath: eco, // Placeholder image path, replace with actual image for the ANFIS project
    title: "Futures vs. Equity: Analyzing Investment Strategies in India",
    description: "This project analyzes futures instruments against their underlying assets, exploring daily, weekly, and monthly trends. Utilizing Microsoft Excel, we seek to identify optimal investment strategies by comparing returns and Sharpe Ratios, aiming to balance risk and returns in India's futures and equity markets",
    link: "https://docs.google.com/document/d/1ehJ8gzweN6ieGdSdwuDnl4W0NEk0EmjN/edit?usp=sharing&ouid=113259550678937431328&rtpof=true&sd=true",
    category: "Finance" // Assign a category
  },
  {
    imgPath: eco, // Placeholder image path, replace with actual image for the ANFIS project
    title: "Advanced Time Series Analysis for Market Forecasting",
    description: "This project employs CAPM, GARCH, EGARCH, and ARIMA models in time series analysis to forecast financial data, offering comprehensive insights into market behavior and risk management. Through rigorous statistical techniques, we aim to provide accurate predictions for informed decision-making in financial markets.",
    link: "https://docs.google.com/document/d/1EAcf6j4Yde-XdmIieLiQotDZvYTLNUjE/edit?usp=sharing&ouid=113259550678937431328&rtpof=true&sd=true",
    category: "Finance" // Assign a category
  },



];

// ...


  // Create a list of unique categories from the projects data
  const categories = ["All", ...new Set(projectsData.map(project => project.category))];

  // Filter the projects based on the active category
  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {/* Category buttons */}
        // ...

{/* Category buttons */}
<Row className="category-container" style={{ justifyContent: "center", paddingBottom: "10px" }}>
  {categories.map(category => (
    <Col key={category} xs={12} sm={6} md={4} lg={3} xl={2}>
      <button
        onClick={() => setActiveCategory(category)}
        className={`category-btn ${activeCategory === category ? 'category-btn-active' : ''}`}
      >
        {category}
      </button>
    </Col>
  ))}
</Row>

// ...

        {/* Project cards */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.map((project, index) => (
            <Col key={index} md={4} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
