import {Component} from 'react'

import './index.css'

import ReactPlayer from 'react-player'

const videoUrl = 'https://youtu.be/YE7VzlLtp-4'

class VideoPlayer extends Component {
  state = {
    isPlaying: false,
  }

  onClickPlaying = () => {
    this.setState(prevState => ({
      isPlaying: !prevState.isPlaying,
    }))
  }

  render() {
    const {isPlaying} = this.state
    const buttonText = isPlaying ? 'Pause' : 'Play'

    return (
      <div className="video-container">
        <h1 className="heading">Video Player</h1>
        <div className="responsive-container">
          <ReactPlayer url={videoUrl} controls playing={isPlaying} />
        </div>
        <button className="button " onClick={this.onClickPlaying} type="button">
          {buttonText}
        </button>
      </div>
    )
  }
}

export default VideoPlayer
