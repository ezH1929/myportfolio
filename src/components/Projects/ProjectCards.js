import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {BiLinkExternal} from 'react-icons/bi'
import './ProjectCard.css'

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt={props.title + " image"} />
      <Card.Body>
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text className="card-text">
          {props.description}
        </Card.Text>
        <div className="card-buttons">
          <Button className="project-btn" href={props.link} target="_blank">
            <BiLinkExternal /> &nbsp;
            {props.isBlog ? 'View Blog' : 'View Project'}
          </Button>
          {props.liveLink && (
            <Button className="live-btn" href={props.liveLink} target="_blank">
              <BiLinkExternal /> &nbsp; Live
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards
