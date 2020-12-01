import React from "react";
import bue1 from "./pics/BUE.png";
import background1 from "./pics/Mask Group 4.png";
export default function header1() {
  return (
    <div>
      <hr
        style={{
          height: "4px",
          backgroundColor: "#BF112B",
          marginTop: "0.1px",
        }}
      ></hr>
      <div>
        <img
          src={bue1}
          style={{
            height: 60,
            width: 170,
            left: 30,
            position: "absolute",
          }}
        ></img>
      </div>
      <div
        style={{
          height: 250,
          width: "100%",
          background: "black",
          overflow: "hidden",
          marginTop: "70px",
        }}
      >
        <img
          src={background1}
          style={{
            height: 250,
            width: "100%",
            opacity: 0.4,
            objectFit: "cover",
          }}
        ></img>
        <div
          style={{
            position: "absolute",
            right: 500,
            bottom: 450,
            fontSize: 25,
            color: "white",
            fontFamily: "Merriweather",
            fontWeight: 600,
          }}
        >
          Student Portal <br />
          Student Portal | English Transcript
        </div>
      </div>
    </div>
  );
}
