import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return <img src={this.props.src} alt={this.props.src} className={this.props.className}></img>;
  }
}

export default ImageComponent;
