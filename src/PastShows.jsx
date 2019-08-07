import React from 'react';
import EachShow from './EachShow.jsx'

const PastShows = (props) => {
    return (
        <div>{props.pastShows.map((show) => <EachShow show={show}/>)}</div>
    )
}

export default PastShows;