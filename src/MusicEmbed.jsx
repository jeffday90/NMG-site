import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
`;

const Song = styled.ul`
    border: solid;
    margin-left: 500px;
    margin-right: 500px;
    margin-top: 20px;
`;

// click on song --> conditionally display lyrics

// use clip to host the songs

function getTime(time) {
    if (!isNaN(time)) {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
    }
  }

class MusicEmbed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTrack: null,
      player: "stopped",
      currentTime: null,
      duration: null
    };
  }
    
  componentDidMount() {
    this.player.addEventListener("timeupdate", e => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration
      });
    });
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => {});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedTrack !== prevState.selectedTrack) {
      let track;
      switch (this.state.selectedTrack) {
        case "Campfire Story":
          track = campfireStory;
          break;
        case "Booting Up":
          track = bootingUp;
          break;
        default:
          break;
      }
      if (track) {
        this.player.src = track;
        this.player.play();
        this.setState({ player: "playing", duration: this.player.duration });
      }
    }
    if (this.state.player !== prevState.player) {
      if (this.state.player === "paused") {
        this.player.pause();
      } else if (this.state.player === "stopped") {
        this.player.pause();
        this.player.currentTime = 0;
        this.setState({ selectedTrack: null });
      } else if (
        this.state.player === "playing" &&
        prevState.player === "paused"
      ) {
        this.player.play();
      }
    }
  }
  
  render() {
    const list = [{ id: 1, title: "unwind your spine" }, {id: 2, title: "dive into"}, 
    {id: 3, title: "gameshark"}, {id: 4, title: "roland"}, {id: 5, title: "soft copy"}].map(item => {
      return (
        <Song
          key={item.id}
          onClick={() => this.setState({ selectedTrack: item.title })}
        >
        {item.title}
        </Song>
      );
  });

  return (
    <Container>
        <h1>My Little Player</h1>
        <ul>{list}</ul>
        <div>
          {this.state.player === "paused" && (
            <button onClick={() => this.setState({ player: "playing" })}>
              Play
            </button>
          )}
          {this.state.player === "playing" && (
            <button onClick={() => this.setState({ player: "paused" })}>
              Pause
            </button>
          )}
          {this.state.player === "playing" || this.state.player === "paused" ? (
            <button onClick={() => this.setState({ player: "stopped" })}>
              Stop
            </button>
          ) : (
              ""
            )}
        </div>
        <audio ref={ref => (this.player = ref)} />
    </Container>
  );
  }
}

export default MusicEmbed;