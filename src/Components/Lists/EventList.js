import React from "react";
import { ListGroup, ListGroupItem, Card } from "react-bootstrap";

const EventList = (props) => {
    const eventList = props.events;
    const collectionURI = eventList.shift();

    return (
        <ListGroup>
            <ListGroupItem><Card.Link href={collectionURI}>Link to All Events</Card.Link></ListGroupItem>
            {
                eventList.map((event) => {
                    return (
                        <ListGroupItem>
                            <p>{event}</p>
                        </ListGroupItem>
                    )
                })
            }
        </ListGroup>
    );

};

export default EventList;