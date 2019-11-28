import React, { Component } from "react";

const bikiniTopClass = {
  width: "627px",
  height: "500px",
  background: 'url("images/allbody/bikini_branew.png")',
  backgroundRepeat: no-repeat,
  position: "absolute",
  top: "12%",
  left: "-45%",
  zIndex: "1"
};
const bikiniBottomClass = {
  width: "250px",
  height: "500px",
  background: 'url("images/allbody/bikini_pantsnew.png")',
  position: "absolute",
  top: "12%",
  left: "22%",
  zIndex: "1"
};
class Bikini extends Component {
  render() {
    const styles = {
      // .bikiniTop
      bikiniTopClass,
      // .bikiniBottom
      bikiniBottomClass
    };
    if (this.props.selectedItem) {
      if (this.props.selectedItem.default === true) {
        styles.bikiniTopClass = bikiniTopClass;
        if (this.props.selectedItem.type === "topclothes") {
          styles.bikiniTopClass = bikiniTopClass;
        } else if (this.props.selectedItem.type === "botclothes") {
          styles.bikiniBottomClass = bikiniBottomClass;
        }
      } else {
        if (this.props.selectedItem.type === "topclothes") {
          styles.bikiniTopClass = {
            width: "627px",
            height: "500px",
            background: `url(${this.props.selectedItem.imgSrc_png})`,
            backgroundRepeat: no-repeat,
            position: "absolute",
            top: "12%",
            left: "-45%",
            zIndex: "3", 
          };
        } else if (this.props.selectedItem.type === "botclothes") {
          styles.bikiniBottomClass = {
            width: "500px",
            height: "1000px",
            background: `url(${this.props.selectedItem.imgSrc_png})`,
            position: "absolute",
            top: "-30%",
            left: "-5%",
            zIndex: "5",
            transform: "scale(0.5)"
          };
        }
      }
    }
    const styleBikini =
      this.props.type === "top"
        ? styles.bikiniTopClass
        : styles.bikiniBottomClass;
    return <div style={styleBikini} />;
  }
}

export default Bikini;
