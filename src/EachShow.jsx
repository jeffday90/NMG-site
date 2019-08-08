import React from 'react';
import styled from 'styled-components';


// border around each show
    // dots change colors as they cross under the border

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