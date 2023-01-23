
import React, { useEffect, useState } from 'react';
import GifList from "./GifList";
import GifSearch from './GifSearch';

function GifListContainer() {
    // States
    const [gifs, setGifs] = useState([]);
    const [search ,setSearch] = useState("dogs");


    useEffect(() =>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=XWBNd1ksECRTja7rylogKwDat6SXW8Pi&limit=3&rating=g`)
        .then((response) => response.json())
        .then((fetchedGifs) => setGifs(fetchedGifs.data));
    }
        ,[search]
    );

 
    function handleSearchSubmit(searchTerm){
        setSearch(searchTerm);
    }


    return (
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <GifList gifsData={gifs}/>
            <GifSearch onFormSubmit={handleSearchSubmit}/>
        </div>
    )
}

export default GifListContainer;