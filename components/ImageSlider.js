import React from 'react';
import ReactDOM from 'react-dom';

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlideIndex: 0
    }
  }
  render() {
    return (
      <h1>
        I am on slide {this.state.currentSlideIndex}
      </h1>
    )
  }
}







module.exports = ImageSlider;
