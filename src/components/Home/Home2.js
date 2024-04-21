import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import myImg from '../../Assets/avatar.svg'
import Tilt from 'react-parallax-tilt'
import {AiFillGithub, AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: '2.6em' }}>
    <span className="purple">Coding Algos and Trading Chaos</span> – Welcome to the Matrix!
  </h1>
  <p className="home-about-body">
    <span className="purple">Welcome to the Intersection of Technology and Finance</span>
    <br />
    <br />
    Hello! I'm your expert guide at the confluence of <span className="purple">coding and capital</span>, where sophisticated algorithms and innovative financial strategies come together. Armed with <span className="purple">Python, C++, JavaScript, and R</span>, I navigate the ever-changing currents of the financial markets.
    <br />
    <br />
    Here, algorithms do more than just process data—they <span className="purple">forecast market trends</span> and create opportunities. With a mix of <span className="purple">machine learning</span> and financial insight, I develop everything from diversified investment portfolios to automated trading bots that work tirelessly to optimize returns, day and night.
    <br />
    <br />
    Whether I’m analyzing complex datasets or fine-tuning trading algorithms, you’ll find me at the intersection where <span className="purple">technology meets finance</span>. My projects are my pride—they are intelligent, occasionally unpredictable, and continuously evolving.
    <br />
    <br />
    Join me as we unlock the potential of the markets through technology—one <span className="purple">smart investment</span> at a time.
  </p>
</Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Got a wild idea or a challenge that needs a coding companion? <span className="purple">Hit me up!</span> I’m all ears for projects or opportunities that need a touch of tech and a dash of market savvy.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ezH1929"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hritik-chhabra-59a11b214/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2
