import React from "react";
import env from "react-dotenv";

const SearchBar = (props) => {
    const handleSearchSubmit = async () => {
        await fetch(`https://${env.BACKEND_TARGET}:${env.TARGET_PORT}/v1/api/search/${props.search}`)
        .then(response => response.body)
        .then(rb => {
            const reader = rb.getReader();

            return new ReadableStream({
                start(controller) {
                    // The following function handles each data chunk
                    function push() {
                        // "done" is a Boolean and value a "Uint8Array"
                        reader.read().then( ({done, value}) => {
                        // If there is no more data to read
                        if (done) {
                            controller.close();
                            return;
                        }
                        // Get the data and send it to the browser via the controller
                        controller.enqueue(value);
                        push();
                        })
                    }
                    push();
                }
            });
        })
        .then(stream => {
            return new Response(stream, { headers: { "Content-Type": "application/json" } }).json();
        })
        .then(result => {
            props.setResults(result);
        })
        .catch((err) =>{
            console.error(err);
        });
    };

    const handleSearchChange = (e) => {
        props.setSearch(e.target.value);
    }

    return (
        <div>
            <h1>MarvelSearch</h1>
            <input
                id="searchbar"
                name="text"
                type="text"
                placeholder="Search"
                onChange={handleSearchChange}
            />
            <button type="submit" onClick={handleSearchSubmit}>Search</button>
        </div>
    );
};

export default SearchBar;