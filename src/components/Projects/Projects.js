import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import eCom from "../../Assets/Projects/E-com.png";
import jsomBlog from "../../Assets/Projects/jsomBlog.png";
import taskify from "../../Assets/Projects/Taskify.png";
import aF from "../../Assets/Projects/artisteeF.png";
import aA from "../../Assets/Projects/artisteeA.png";
import easyCode from "../../Assets/Projects/easy-code.png";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <ProjectCard
  imgPath={taskify} // Ensure the path is correctly pointing to an image representing this project
  isBlog={false}
  title="DeepRL for Algorithmic Trading"
  description="Developed and optimized deep reinforcement learning models to enhance trading strategies. Utilized Python, Pandas, NumPy, and TensorFlow, achieving a 25% improvement in strategy performance. Architected complex trading algorithms using TensorFlow and TF-Agents, which increased algorithmic efficiency and financial return by 20%. Conducted over 50 experimental trials to refine model parameters, boosting investment returns by 15% in simulated environments."
  link="https://github.com/ezH1929/Deep-RL-for-Stock-Market" // Ensure this URL is correct or update if necessary
/>

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easyCode}
              isBlog={false}
              title="Ecommerce Website"
              description="Developed an e-commerce website using Java Spring Boot for backend integration, HTML5, CSS3, and JavaScript for a responsive frontend, and MySQL for efficient transaction management. This project enhanced my skills in combining multiple technologies to create a functional online shopping platform. This project was a team project done with proper team management with weekly scrum meetings."
              link="https://github.com/Swekrish303/Online_SuperMarket"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isBlog={false}
              title="Time Series Analysis"
              description="I applied time series analysis techniques, particularly focusing on the Autoregressive Integrated Moving Average (ARIMA) model, to forecast COVID-19 deaths. This involved gathering and preprocessing daily death data from reputable sources, conducting exploratory data analysis to identify trends and patterns, and training the ARIMA model. Through rigorous validation and evaluation, including metrics such as Mean Absolute Error and Root Mean Squared Error, I assessed the model's predictive accuracy. "
              link="https://github.com/ezH1929/Time-Series-Analysis-for-Covid"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsomBlog}
              isBlog={false}
              title="Convex Hull Algorithms: Implementation and Visualization"
              description=" I implemented and visualized two convex hull algorithms, Jarvis March and Kirkpatrick Seidel, using Python, Flask, and JavaScript. The project was thoroughly documented using Doxygen, ensuring clear and accessible code. This work demonstrated my skills in algorithm implementation, visualization, full-stack development, and documentation practices."
              link="https://github.com/ezH1929/Convex-Hull-Algorithms"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aF}
              isBlog={false}
              title="Image Reconstruction using Generative AI"
              description="Designed and implemented a comprehensive image reconstruction system in Python, utilizing Principal Component Analysis (PCA), Probabilistic Principal Component Analysis (PPCA), and Variational Autoencoder (VAE) algorithms from scratch. Demonstrated advanced proficiency in machine learning and image processing through practical application."
              link="https://github.com/ezH1929/Image-reconstruction/tree/master/GenAI"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aA}
              isBlog={false}
              title="StudyBuddy"
              description="Designed and developed a collaborative study group platform using the MERN stack (MongoDB, Express.js, React.js, Node.js) as a dynamic solution to facilitate online learning and group interaction. The website features real-time chat, resource sharing, and group management functionalities to enhance academic collaboration. Employed RESTful API principles for efficient back-end communication and maintained high standards of user experience with responsive design practices."
              link="https://github.com/ezH1929/StudyBuddy/tree/master"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aA}
              isBlog={false}
              title="Stock Price Prediction using ANFIS"
              description="Developed an advanced stock price prediction model using the Adaptive Neuro-Fuzzy Inference System (ANFIS), integrating machine learning and fuzzy logic to forecast market trends with high accuracy. The model was benchmarked against Long Short-Term Memory (LSTM) and Bidirectional LSTM (BiLSTM) networks to evaluate performance enhancements."
              link="https://github.com/ezH1929/Stock-Price-Prediction-using-ANFIS-model"
              
            />
          </Col>



          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
