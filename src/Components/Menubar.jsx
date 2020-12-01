import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Button
          style={{ backgroundColor: "#BF112B", color: "white" }}
          variant="outlined"
          color="secondary"
        >
          English Transcript
        </Button>
        <Button variant="outlined" color="secondary">
          Transcript (UK)
        </Button>
        <Button variant="outlined" color="secondary">
          Registration Card
        </Button>
        <Button variant="outlined" color="secondary">
          Lectures Schedule
        </Button>
        <Button variant="outlined" color="secondary">
          Exam Schedule
        </Button>
        <Button variant="outlined" color="secondary">
          Alumni Form
        </Button>
        <Button variant="outlined" color="secondary">
          Payment
        </Button>
      </div>
      <hr style={{ height: "2px", backgroundColor: "red" }}></hr>
    </div>
  );
}
