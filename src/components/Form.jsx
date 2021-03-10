import React, { useState } from "react";

const Form = ({ setClicksearch }) => {
  const [search, setSearch] = useState({
    artist: "",
    song: "",
    /* the value of the array has to be equal to the 'name' */
  });

  /* error message according to validation */
  const [error, setError] = useState(false);

  /* extract artist and song values ​​with destructuring */
  const { artist, song } = search;

  const updateState = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  /* consult APIs */
  const lookInfo = (e) => {
    e.preventDefault();

    //Validate
    if (artist.trim() === "" || song.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    setClicksearch(search);
  };

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            onSubmit={lookInfo}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">
                song lyrics finder with REACT <i class="fab fa-react"></i>
              </legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artist</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Search Artist"
                      onChange={updateState}
                      value={artist}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Song</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Search Song"
                      onChange={updateState}
                      value={song}
                    />
                  </div>
                </div>
              </div>

              <button type="text" className="btn btn-primary float-right">
                Search
              </button>
            </fieldset>
            <hr />
            {error ? (
              <p className="alert alert-danger text-center p-2">
                All fields are required
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
