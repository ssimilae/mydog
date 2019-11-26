import React from "react";
const styles = {
  // .body
  bodyClass: {
    width: "342px",
    height: "195px",
   // background: 'url("images/allbody/bodynew.png")',
    background: 'url("images/allbody/dog-1418283_640.png")', 
    backgroundSize: "342px 195px",
    position: "absolute",
    top: "12%",
    left: "12%"
  }
};

const Body = () => {
  return <div style={styles.bodyClass} />;
};

export default Body;
