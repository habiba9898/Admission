import React, { Component } from "react";
import buelogo from "./pics/logon.png";
import facebook from "./pics/icons8-facebook-48.png";
import intsa from "./pics/icons8-instagram-48.png";
import linked from "./pics/icons8-linkedin-48.png";
import location from "./pics/icons8-location-100.png";
import phone from "./pics/icons8-phone-50.png";
import internet from "./pics/icons8-internet-100.png";

export default function Footer() {
  return (
    <div>
      <div
        style={{
          border: "20px",
          backgroundColor: "#312C2C",
          width: "100%",
          height: "200px",
          border: "1px solid black",
          marginTop: "3%",
        }}
      >
        <img
          src={buelogo}
          style={{
            width: "15%",
            height: "25%",
            position: "absolute",
            left: "1100px",
          }}
        ></img>
        <center>
          <img
            src={facebook}
            style={{
              width: "5%",
              height: "10%",
              left: "500px",
            }}
          ></img>
          <img
            src={intsa}
            style={{
              width: "5%",
              height: "10%",
              left: "500px",
            }}
          ></img>
          <img
            src={linked}
            style={{
              width: "5%",
              height: "10%",
              left: "500px",
            }}
          ></img>
        </center>
        <h3 style={{ color: "White", left: "525px", position: "absolute" }}>
          Get conact with us on social media{" "}
        </h3>
        <img
          src={location}
          style={{
            width: "7%",
            height: "20%",
            left: "500px",
          }}
        ></img>
        <img
          src={phone}
          style={{
            width: "7%",
            height: "20%",
            left: "500px",
          }}
        ></img>
        <img
          src={internet}
          style={{
            width: "7%",
            height: "20%",
            left: "500px",
          }}
        ></img>
      </div>
    </div>
  );
}
