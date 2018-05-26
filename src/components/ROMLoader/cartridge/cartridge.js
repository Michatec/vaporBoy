import { Component } from "preact";

export default class Cartridge extends Component {
  constructor() {
    super();
    this.setState({});
  }

  render() {
    // Our cartridge content
    let cartridgeContent = "";

    if (this.props.imageUrl) {
      cartridgeContent = <img src={this.props.imageUrl} />;
    } else if (this.props.text) {
      cartridgeContent = (
        <div class="cartridge__content__text">{this.props.text}</div>
      );
    }

    // Our cartridge overlay color
    let cartridgeOverlayColor = "grey";
    if (this.props.color) {
      cartridgeOverlayColor = this.props.color;
    }
    let cartridgeOverlayPath = `assets/cartridges/cartridge-${cartridgeOverlayColor}.png`;

    return (
      <div class="cartridge">
        {/* Our Cartridge content */}
        <div class="cartridge__content">{cartridgeContent}</div>

        {/* Our Cartridge overlay */}
        <div class="cartridge__overlay">
          <img src={cartridgeOverlayPath} />
        </div>
      </div>
    );
  }
}
