import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";


import axios from 'axios';
import Song from "./components/Song";
import InfoArtists from "./components/InfoArtists";

function App() {
  /* define search on click using a useState */
  const [clicksearch, setClicksearch] = useState({});

  /* save lyrics in the State */
  const [savelyric, setSavelyric] = useState('')

  /* save information of artists in the State */
  const [infoartists, setInfoartists] = useState({})


  /* useEffect always is a arrow function */
  useEffect (() => {
    /*--At the beginning the app will not do anything--*/
    /*code to check if the object is empty*/
    if (Object.keys(clicksearch).length === 0) return;


    /* ---consult lyrics API--- */
    const consultAPILyrics = async () => {

      const {artist, song} = clicksearch;

      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      /* Recommended code to extract info from two APIs at the same time, (use Promise) */
      const [lyric, information] = await Promise.all([
        axios.get(url), axios.get(url2)
      ])

      setSavelyric(lyric.data.lyrics)
      setInfoartists(information.data.artists[0])
      /* setSavelyric(result.data.lyrics); */
      
    }
    consultAPILyrics();
  }, [clicksearch, infoartists])


  return (
    <Fragment>
      <Form setClicksearch={setClicksearch} />

      <div className="catainer mt-5">
        <div className="row">
          <div className="col-md-6">
            <InfoArtists 
              infoartists={infoartists}
            />
          </div>

          <div className="col-md-6">
            <Song
              savelyric={savelyric}
            />
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
