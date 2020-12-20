import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
//changecolor = () => {return()};
//style={{ backgroundColor: "#BF112B", color: "white" }}

export default function OutlinedButtons() {
  const classes = useStyles();

  const [TestX, setTestX] = useState("");
  return (
    <div className={classes.root}>
      <div style={{ marginBottom: "0px" }}>
        <Button variant="outlined" color="secondary" href="/">
          English Transcript
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginLeft: "15px" }}
          href="/T"
        >
          Transcript (UK)
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginLeft: "15px" }}
          href="/RC"
        >
          Registration Card
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginLeft: "15px" }}
          href="/L"
        >
          Lectures Schedule
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginLeft: "15px" }}
          href="/ES"
        >
          Exam Schedule
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginLeft: "15px" }}
          href="/AF"
        >
          Alumni Form
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginLeft: "15px" }}
          href="/PM"
        >
          Payment
        </Button>
      </div>
      <hr
        style={{ height: "2px", backgroundColor: "red", marginTop: "0px" }}
      ></hr>
    </div>
  );
}
