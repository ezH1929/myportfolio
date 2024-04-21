import React from 'react'
import Card from 'react-bootstrap/Card'
import {ImPointRight} from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: 'justify'}}>
            Hi Everyone, I am <span className="purple">Hritik Chhabra </span>
            from <span className="purple"> Punjab, India.</span>
            <br />I am an enthusiastic Final Year student deeply passionate about Algorithms, Trading, and Software Development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travel and Adventure
            </li>
            <li className="about-activity">
              <ImPointRight /> GYM
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books and Listening Podcasts.
            </li>
          </ul>

          <p style={{marginBlockEnd: 0, color: 'rgb(155 126 172)'}}>
            "The world rewards you for value provided, not time spent."{' '}
          </p>
          <footer className="blockquote-footer">James clear</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
