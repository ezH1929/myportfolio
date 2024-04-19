import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/hritikcv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Developer [OnFinance]"
              date="May 2022 - July 2022"
              content={[
                "Developed and enhanced frontend features using React, directly under the supervision of the founders.",
                "Involved in all phases of the software development lifecycle, authored documentation, and debugged features to ensure software reliability.",
                "MERN stack used: React.js for UI, Flask for backend, MongoDB for storage."
              ]}
            />
            
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
  title="Equity Trader, Independent"
  date="August 2021  - Present"  // Replace "Start Date" with your actual start date
  content={[
    "Market Engagement: Actively trade in both U.S. and Indian stock markets, applying quantitative analysis and diverse trading strategies to maximize returns.",
    "Performance Highlight: Successfully generated a 40% return on investments within a six-month period, demonstrating profound market analysis capabilities and risk management.",
    "Community Contribution: Regularly participate in online investment forums and trading communities, sharing insights and strategies with other traders."
  ]}
/>
            
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
                title="B.E. (Hons.), Computer Science & M.Sc. (Hons.), Economics [BITS Pilani]"
                date="2020 - 2025"
                content={[
                  "CGPA: 7.42/10",
                  "I completed my Bachelor of Engineering (Honors) in Computer Science and Master of Science (Honors) in Economics from the Birla Institute of Technology and Science, Pilani.",
                ]}
            />

<Resumecontent
  title="12th CBSE"
  date="Completed in: 2020"  // Replace [Year of Graduation] with the actual year
  content={[
    "Sudesh Vatica Convent School, CBSE - Achieved a final percentage of 95.8%, placing among the top students.",
    // Optionally add another item here if you have notable achievements or coursework relevant to your goals
  ]}
/>




<h3 className="resume-title">Certificates</h3>
<Resumecontent
  title="Bloomberg Market Concepts"
  content={[]}
/>
<Resumecontent
  title="NISM Series VIII: Equity Derivatives"
  content={[]}
/>
<Resumecontent
  title="Bloomberg Environmental, Social, and Governance (ESG)"
  content={[]}
/>
<Resumecontent
  title="Coursera: Machine Learning Specialization by deeplearning.ai"
  content={[]}
/>



            
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
