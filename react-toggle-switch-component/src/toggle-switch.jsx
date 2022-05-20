import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    return (
      <div className='container'>
        <div>
          <button className={this.state.isClicked ? 'toggle-container on' : 'toggle-container'} onClick={this.handleClick}>
            <button className={this.state.isClicked ? 'toggle on' : 'toggle'}></button>
          </button>
        </div>
        <h2>{this.state.isClicked ? 'ON' : 'OFF'}</h2>
      </div>
    );
  }
}

export default ToggleSwitch;
