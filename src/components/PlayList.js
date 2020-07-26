import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const playlist =  [
    {name: "Khruangbin",
      src: "https://www.cjoint.com/doc/20_07/JGylskhuFDb_Khruangbin---Dearest-Alfred.mp3",
    },
    {name: "Krack",
      src: "https://www.cjoint.com/doc/20_07/JGylfszlRTb_Soulwax---Krack.mp3",
    },
    {name: "Night",
      src: "https://www.cjoint.com/doc/20_07/JGylj3ohvRb_Kelly-Lee-Owens---Night.mp3",
    },
    
  ];

  class PlayList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentMusicIndex: 0,
      };
    }
  
    handleClickPrevious = () => {
      this.setState((prevState) => ({
        currentMusicIndex:
          prevState.currentMusicIndex === 0
            ? playlist.length - 1
            : prevState.currentMusicIndex - 1,
      }));
    };
  
    handleClickNext = () => {
      this.setState((prevState) => ({
        currentMusicIndex:
          prevState.currentMusicIndex < playlist.length - 1
            ? prevState.currentMusicIndex + 1
            : 0,
      }));
    };
  
    render() {
      const { currentMusicIndex } = this.state;
      return (
        <AudioPlayer
          className="audio"
          style={{ width: "400px", backgroundColor: "transparent" }}
          autoPlay={true}
          shuffle={true}
          autoPlayAfterSrcChange={true}
          showSkipControls={true}
          showJumpControls={false}
          src={playlist[currentMusicIndex].src}
          onClickPrevious={this.handleClickPrevious}
          onClickNext={this.handleClickNext}
          customAdditionalControls={[]}
          layout="horizontal"
          volume="0.2"
        />
      );
    }
  }
  
  export default PlayList;
  