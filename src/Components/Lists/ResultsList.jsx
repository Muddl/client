import React, { useEffect } from 'react';
import Result from '../Units/Result.jsx';

import { ListGroup, ListGroupItem, Row } from 'react-bootstrap';

const ResultList = (props) => {
    useEffect(() => {}, [props.results]);

    return (
        <ListGroup>
            {
                props.results.map((result) => {
                    return (
                        <Row>
                            <ListGroupItem key={result.id}>
                                <Result 
                                    name={result.fields.name}
                                    comics={result.fields.comics}
                                    series={result.fields.series}
                                    events={result.fields.events}
                                    modified={result.fields.modified}
                                    thumbnail={result.fields.thumbnail}
                                    stories={result.fields.stories}
                                    resource_uri={result.fields.resource_uri}
                                />
                            </ListGroupItem>
                        </Row>
                        
                    )
                })
            }
        </ListGroup>
    );
};

export default ResultList;