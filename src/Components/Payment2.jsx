import React from "react";
import bue1 from "./pics/BUE.png";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./body.css";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
export default function Payment2() {
  const classes = useStyles();
  return (
    <div>
      <img
        src={bue1}
        style={{
          height: 100,
          width: 200,
          left: "80px",
          position: "absolute",
        }}
      ></img>
      <h2>Faculty of Informatics & Computer Science</h2>
      <br /> <h2 style={{ color: "#074A80" }}>Online Payment</h2>
      <hr
        style={{
          height: "1px",
          backgroundColor: "black",
        }}
      ></hr>
      <div
        style={{
          borderRadius: "30px",
          backgroundColor: "rgba(255, 255, 255, 0.91)",
          padding: "20px",
          width: "1100px",
          height: "550px",
          border: "2px solid darkRed",
          marginLeft: "85px",
          marginTop: "30px",
          textAlign: "left",
          fontSize: "20px",
          whiteSpace: "pre-wrap",
        }}
      >
        <div style={{ marginLeft: "70px" }}>
          <p>
            Student ID: <b style={{ marginLeft: "50px" }}>163502</b> <br />{" "}
          </p>
          <p>
            Student Name:{" "}
            <b style={{ marginLeft: "50px" }}>Habiba Khaled mansour </b>
            <br />{" "}
          </p>
          <p>
            Birth Date: <b style={{ marginLeft: "50px" }}> 15/8/1998</b>
            <br />{" "}
          </p>
          <p>
            Nationality: <b style={{ marginLeft: "50px" }}>Egypt</b>
            <br />{" "}
          </p>
          <p>
            Academic Year: <b style={{ marginLeft: "50px" }}>2019/2020</b>
            <br />{" "}
          </p>
          <p>
            Semester: <b style={{ marginLeft: "50px" }}>Two</b>
            <br />{" "}
          </p>
          <p>Amount: </p>
          <TextField
            id="outlined-basic"
            label="The amount"
            variant="outlined"
            style={{ marginLeft: "120px", bottom: "50px" }}
          />
          <Button
            variant="contained"
            color="secondary"
            style={{
              backgroundColor: "#BF112B",
              bottom: "45px",
              left: "90px",
            }}
          >
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
}
