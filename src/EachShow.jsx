import React from 'react';
import styled from 'styled-components';


// show[0] = venue
// show[1] = 

const Show = styled.div`
    padding: 10px;
    text-align: center;
`;

const EachShow = (props) => {

    return (
        <Show>
            <div>{props.show.venue}</div>
            <div>{props.show.bands}</div>
            <div>{props.show.date}</div>
        </Show>


    )
}

export default EachShow;