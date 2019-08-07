import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import PastShows from './PastShows.jsx';

const Title = styled.h1`
    text-align: center;
    padding-top: 200px;

`;

// ideas:
    // conditionally render shows
    // keep music posted, but then conditionally render some other aspects???

// conditionally render art???

// dots that move around randomly, but when they pass over text change the text color

class App extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                pastShows: [
                    {venue: 'Oakland at the Octopus Literary Saloon', bands: 'Nanami Ozone, Friendless Summer', date: 'July 27th'},
                    {venue: 'San Francisco at The Rickshaw Stop', bands: 'The Appleseed Cast, Young Jesus', date: 'July 22nd'},
                    {venue: 'San Francisco at Thee Parkside', bands: 'Horse Jumper of Love, Bobby', date: 'July 14th'},
                    {venue: 'Oakland at Elbo Room Jack London', bands: 'Pardoner, Fake Fruit, Justus Proffit', date: 'March 17th'},
                    {venue: 'Los Angeles at a house', bands: 'Nylon Smile, Froth (Joojoo Solo), Dumb', date: 'March 9th'},
                    {venue: 'San Francisco at Bottom of the Hill', bands: 'Luke Sweeney, Pottymouth, i dont remember the third', date: 'March 2nd'},
                    {venue: 'Oakland at the Octopus Literary Saloon', bands: 'The World, Gustaf, i dont remember the third', date: 'February 20th'},
                    {venue: 'Oakland at The Hole', bands: 'Dick Stusso, Club Night, Half Stack, Boy Scouts', date: 'December 7th'},
                    {venue: 'San Francisco at the Elbo Room', bands: `The She's, Thriftys`, date: 'December 4th'}
                ]
        }
    }  
  
  render() {
    return (
        <div>
            <Title>New Measurement Group</Title>
            <PastShows pastShows={this.state.pastShows}/>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));