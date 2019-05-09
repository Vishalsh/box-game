import React, { Component } from 'react';

class Line extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: ''
    }

  }

  onClick = () => {
    this.setState({
      color: this.props.color
    });

    this.props.onClick();
  };

  render() {
    const {
      color
    } = this.state;

    return (
      <>
      {
        color ?
          <button style={{ backgroundColor: this.state.color }}>Active Line</button>
          :
          <button onClick={this.onClick}>inActive Line</button>
      }
      </>
    )
  }
}

export default Line;