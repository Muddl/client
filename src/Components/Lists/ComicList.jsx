import React from "react";
import { ListGroup, ListGroupItem, Card } from "react-bootstrap";

const ComicList = (props) => {
    const comicList = props.comics;
    const collectionURI = comicList.shift();

    return (
        <ListGroup>
            <ListGroupItem><Card.Link href={collectionURI}>Link to All Comics</Card.Link></ListGroupItem>
            {
                comicList.map((comic) => {
                    return (
                        <ListGroupItem>
                            <p>{comic}</p>
                        </ListGroupItem>
                    )
                })
            }
        </ListGroup>
    );
};

export default ComicList;