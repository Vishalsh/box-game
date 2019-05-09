import React, { Component } from 'react';

import Line from '../Line/Line';

class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activatedBy: {}
    };
    this.lines = [false, false, false, false];

    this.onClickLine = this.onClickLine.bind(this);
  }

  areAllLinesActive = () => {
    return this.lines.filter(isActive => !isActive).length === 0;
  };

  onClickLine(index) {
    return () => {
      this.lines[index] = true;
      this.props.onClickLine();

      if (this.areAllLinesActive()) {
        this.setState({
          activatedBy: this.props.activePlayer
        });
      }
    }
  };


  render() {
    const {
      activePlayer
    } = this.props;

    return (
      <>
      <div style={{ backgroundColor: this.state.activatedBy.color }}>
        {
          this.lines.map((line, index) => {
            return (
              <Line key={index} onClick={this.onClickLine(index)} color={activePlayer.color}/>
            )
          })
        }
      </div>
      </>
    )
  }
}

export default Box;