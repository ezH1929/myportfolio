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
              Coding Algos and Trading Chaos – <span className="purple">Welcome to the Matrix!</span>
            </h1>
            <p className="home-about-body">
              Hey there! Welcome to where code meets cash, and algorithms are king. I’m a <i><b className="purple">trading tactician and code whisperer</b></i> rolled into one, navigating the wild waters of finance with <i><b className="purple">Python, C++, JavaScript, and R</b></i> as my paddles.
              <br />
              <br />
              Around these parts, algorithms aren’t just for number crunching. Nope, they’re my <i><b className="purple">crystal ball </b></i>for spotting the big waves in the market and sailing through them with ease. With a dash of <i><b className="purple">machine learning and a pinch of financial savvy</b></i>, I whip up everything from nifty little investment portfolios to slick automated trading bots that do their thing while I catch some z’s.
              <br />
              <br />
              Diving deep into data or deploying an R-script to outsmart stock trends, you’ll find me at the crossroads of pips and programming. My projects? They’re my quirky children: smart, a bit unpredictable, and growing smarter by the trade.
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
