import React, { useState, useEffect } from "react";
import SearchBar from "./Units/SearchBar.jsx";
import ResultsList from "./Lists/ResultsList.jsx";

import { Container, Row } from "react-bootstrap";

const MainPage = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  return (
    <React.Fragment>
      <Container fluid >
        <Row>
          <SearchBar search={search} setSearch={setSearch} setResults={setResults}/>
        </Row>
        <Row>
          <ResultsList results={results}/>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default MainPage;
