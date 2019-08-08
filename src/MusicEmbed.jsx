import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
`;

class MusicEmbed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTrack: null
    };
  }
    
  
  render() {
    const list = [{ id: 1, title: "unwind your spine" }, {id: 2, title: "dive into"}, 
    {id: 3, title: "gameshark"}, {id: 4, title: "roland"}, {id: 5, title: "soft copy"}].map(item => {
      return (
        <ul
          key={item.id}
          onClick={() => this.setState({ selectedTrack: item.title })}
        >
        {item.title}
        </ul>
      );
  });

  return (
    <Container>
      <h1>My Little Player</h1>
      <ul>{list}</ul>
      <audio />
    </Container>
  );
  }
}

export default MusicEmbed;