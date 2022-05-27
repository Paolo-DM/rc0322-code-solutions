import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
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
    /*
    const out = [];
    for (let i = 0; i < this.props.images.length; i++) {
      out.push(<i key={this.props.images[i].id} className={this.state.selectedImg === i + 1 ? 'ph-circle-fill' : 'ph-circle-bold'} onClick={() => this.handleClick(i + 1)} ></i>);
    }
    return out;
    */
    return this.props.images.map(image => {
      return <i key={image.id}
                className={this.state.selectedImg === image.id ? 'ph-circle-fill' : 'ph-circle-bold'}
                onClick = {() => this.handleClick(image.id)}>
            </i>;
    });
  }

  handleClick(id) {
    this.pauseResumeInterval();
    this.setState({ selectedImg: id });
  }

  rightClick() {
    if (this.state.selectedImg === this.props.images.length) {
      this.setState({ selectedImg: 1 });
    } else {
      this.setState({ selectedImg: this.state.selectedImg + 1 });
    }
    this.pauseResumeInterval();
  }

  leftClick() {
    if (this.state.selectedImg === 1) {
      this.setState({ selectedImg: this.props.images.length });
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
        <img src={this.props.images[selImg - 1].url}></img>
        <i className="ph-caret-right-bold right-arrow" onClick={this.rightClick}></i>
        <div key={this.props.images.id} className='progress-dots'>
          {this.renderDots()}
        </div>
      </div>
    );
  }

}

export default Carousel;
