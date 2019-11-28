import React, { Component } from "react";

class Necklace extends Component {
  render() {
    const styles = {
      necklaceClass: {}
    };
    if (this.props.selectedItem) {
      if (this.props.selectedItem.default === true) {
        styles.necklaceClass = {};
      } else {
        styles.necklaceClass = {
          width: "627px",
          height: "500px",
          background: `url(${this.props.selectedItem.imgSrc_png})`,
          backgroundRepeat: no-repeat,
          position: "absolute",
          top: "12%",
          left: "-45%",
          zIndex: "7", 
        };
      }
    }
    return <div style={styles.necklaceClass} />;
  }
}

export default Necklace;
