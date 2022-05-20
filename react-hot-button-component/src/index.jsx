import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicksNumber: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const clicksNumber = this.state.clicksNumber;

    if (clicksNumber >= 18) {
      this.setState({ clicksNumber: 0 });
    } else {
      this.setState({ clicksNumber: clicksNumber + 1 });
    }
  }

  render() {
    let color = '';
    const clicks = this.state.clicksNumber;

    if (clicks <= 3) {
      color = 'btn-1 white-txt';
    } else if (clicks <= 6) {
      color = 'btn-2 white-txt';
    } else if (clicks <= 9) {
      color = 'btn-3 white-txt';
    } else if (clicks <= 12) {
      color = 'btn-4';
    } else if (clicks <= 15) {
      color = 'btn-5';
    } else if (clicks <= 18) {
      color = 'btn-6';
    }

    return (
      <button className={color} onClick={this.handleClick}>
        Hot Button
      </button>
    );
  }
}

const element = (
  <div>
    <CustomButton />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
