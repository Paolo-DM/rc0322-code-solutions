import React from 'react';
import { Play, Pause } from 'phosphor-react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTicking: false,
      seconds: 0
    };

    this.playTimer = this.playTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.tick = this.tick.bind(this);
  }

  playTimer() {
    this.setState({ isTicking: true });
    this.timerID = setInterval(
      () => this.tick(), 1000);
  }

  pauseTimer() {
    clearInterval(this.timerID);
    this.setState({ isTicking: false });
  }

  tick() {
    if (this.state.isTicking) {
      this.setState({ seconds: this.state.seconds + 1 });
    }
  }

  resetTimer() {
    if (!this.state.isTicking) {
      clearInterval(this.timerID);
      this.setState({ seconds: 0 });
    }
  }

  render() {
    const time = this.state.seconds;

    return (
      <div className='container' >
        <div className="circle" onClick={this.resetTimer}>
            <h1 className='time'>{time}</h1>
          </div>
        {this.state.isTicking
          ? <Pause className="pause-icon" size={32} weight="fill" onClick={this.pauseTimer} />
          : <Play className='play-icon' size={32} weight="fill" onClick={this.playTimer} /> }
      </div>
    );
  }
}

export default StopWatch;
