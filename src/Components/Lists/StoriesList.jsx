import React from "react";
import { ListGroup, ListGroupItem, Card } from "react-bootstrap";

const StoriesList = (props) => {
    const storiesList = props.stories;
    const collectionURI = storiesList.shift();

    return (
        <ListGroup>
            <ListGroupItem><Card.Link href={collectionURI}>Link to All Stories</Card.Link></ListGroupItem>
            {
                storiesList.map((story) => {
                    return (
                        <ListGroupItem>
                            <p>{story}</p>
                        </ListGroupItem>
                    )
                })
            }
        </ListGroup>
    );
};

export default StoriesList;