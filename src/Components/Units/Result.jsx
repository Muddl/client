import React from "react";
import ComicList from "../Lists/ComicList";
import EventList from "../Lists/EventList";
import SeriesList from "../Lists/SeriesList";
import StoriesList from "../Lists/StoriesList";

import { Card } from "react-bootstrap";

const Result = (props) => {
  return (
    <Card style={{ width:"18rem" }}>
      <Card.Img variant="top" src={props.thumbnail} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle>Last Updated: {props.modified}</Card.Subtitle>
        <Card.Link href={props.resource_uri}>Link to Official Marvel Character Page</Card.Link>
        <ComicList comics={props.comics}/>
        <EventList events={props.events}/>
        <SeriesList series={props.series}/>
        <StoriesList stories={props.stories}/>
      </Card.Body>
    </Card>
  );
}

export default Result;
