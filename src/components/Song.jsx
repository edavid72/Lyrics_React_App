import React, {Fragment} from 'react';

const Song = ({savelyric}) => {

    if (savelyric.length === 0) return null;
    
    return ( 
        <Fragment>
            <h2>Lyric Song</h2>
            <p className="letra">{savelyric}</p>
        </Fragment>
     );
}
 
export default Song;