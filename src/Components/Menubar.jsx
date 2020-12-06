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
  const [activeStep, setActiveStep] = React.useState(0);
  const handleChange = () => {};
  return (
    <div className={classes.root}>
      <div style={{ marginBottom: "0px" }}>
        <Button
          style={{ backgroundColor: "#BF112B", color: "white" }}
          variant="outlined"
          color="secondary"
        >
          English Transcript
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginLeft: "15px" }}
        >
          Transcript (UK)
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginLeft: "15px" }}
        >
          Registration Card
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginLeft: "15px" }}
        >
          Lectures Schedule
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginLeft: "15px" }}
        >
          Exam Schedule
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginLeft: "15px" }}
        >
          Alumni Form
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          style={{ marginLeft: "15px" }}
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
