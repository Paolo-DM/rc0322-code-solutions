import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <div className={this.state.isOpen ? 'overlay' : 'overlay hidden'} onClick={this.handleClick}></div>
        <div className='navbar'>
        <i className="ph-list-bold drawer-icon" onClick={this.handleClick}></i>
        </div>
        <div className={this.state.isOpen ? 'app-drawer' : 'app-drawer hidden'}>
          <h3 >Choose a Game</h3>
          <div className='games-list' onClick={this.handleClick}>
            <a >The Legend of Zelda</a>
            <a >A Link to the Past</a>
            <a >Ocarina of Time</a>
            <a >The Wind Waker</a>
            <a >Breath of the Wild</a>
          </div>
        </div>
        <img className='background-image' src="../zelda.png"></img>

      </div>
    );
  }
}

export default AppDrawer;
