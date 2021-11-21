import React from "react";
import { ListGroup, ListGroupItem, Card } from "react-bootstrap";

const SeriesList = (props) => {
    const seriesList = props.series;
    const collectionURI = seriesList.shift();

    return (
        <ListGroup>
            <ListGroupItem><Card.Link href={collectionURI}>Link to All Series</Card.Link></ListGroupItem>
            {
                seriesList.map((series) => {
                    return (
                        <ListGroupItem>
                            <p>{series}</p>
                        </ListGroupItem>
                    )
                })
            }
        </ListGroup>
    );
};

export default SeriesList;