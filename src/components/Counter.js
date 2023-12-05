

import React, { Component } from 'react';

import { Button } from 'antd';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }


  

  render() {

    const cardStyle = {
        border: '1px solid black',
        width: '800px',
        padding: '10px',
        borderRadius: '10px'
    };


    return (
      <div style={cardStyle}>
        <Button type="primary" onClick={this.IncrementItem}>Apasa pentru a creste numarul</Button>
        <Button type="primary" onClick={this.DecreaseItem}>Apasa pentru a scadea numarul</Button>
        <Button type="primary" onClick={this.ToggleClick}>
          { this.state.show ? 'ascunde numarul' : 'arata numarul' }
        </Button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default Counter;