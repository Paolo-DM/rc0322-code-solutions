import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.images = props.images;
    this.state = {
      selectedImg: 1
    };

    this.handleClick = this.handleClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
    this.leftClick = this.leftClick.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.rightClick, 3000);
  }

  pauseResumeInterval() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.rightClick, 3000);
  }

  renderDots() {
    const out = [];
    for (let i = 0; i < this.images.length; i++) {
      out.push(<i key={this.images[i].id} className={this.state.selectedImg === i + 1 ? 'ph-circle-fill' : 'ph-circle-bold'} onClick={() => this.handleClick(i + 1)} ></i>);
    }
    return out;
  }

  handleClick(id) {
    this.pauseResumeInterval();
    this.setState({ selectedImg: id });
  }

  rightClick() {
    if (this.state.selectedImg === this.images.length) {
      this.setState({ selectedImg: 1 });
    } else {
      this.setState({ selectedImg: this.state.selectedImg + 1 });
    }
    this.pauseResumeInterval();
  }

  leftClick() {
    if (this.state.selectedImg === 1) {
      this.setState({ selectedImg: this.images.length });
    } else {
      this.setState({ selectedImg: this.state.selectedImg - 1 });
    }
    this.pauseResumeInterval();
  }

  render() {
    const selImg = this.state.selectedImg;

    return (
      <div className='container'>
        <i className="ph-caret-left-bold left-arrow" onClick={this.leftClick}></i>
        <img src={this.images[selImg - 1].url}></img>
        <i className="ph-caret-right-bold right-arrow" onClick={this.rightClick}></i>
        <div key={this.images.id} className='progress-dots'>
          {this.renderDots()}
        </div>
      </div>
    );
  }

}

export default Carousel;
