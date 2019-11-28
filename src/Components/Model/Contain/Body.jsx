import React from "react";
const styles = {
  // .body
  bodyClass: {
    width: "450px",
    height: "300px",
    background: 'url("images/allbody/dog_body.png")',
    position: "absolute",
    top: "12%",
    left: "22%"
  }
};

const Body = () => {
  return <div style={styles.bodyClass} />;
};

export default Body;
