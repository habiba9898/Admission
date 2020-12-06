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
import clsx from "clsx";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Button } from "@material-ui/core";
import "./body.css";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius: "50%",
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)",
    },
  },
  checkedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3",
    },
  },
});

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}
export default function AlumniForm() {
  const classes = useStyles();
  return (
    <div>
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
        <br /> <h2 style={{ color: "#074A80" }}>Alumni Form</h2>
        <hr
          style={{
            height: "1px",
            backgroundColor: "black",
          }}
        ></hr>
      </div>
      <div
        style={{
          textAlign: "left",
          marginTop: "40px",
          marginLeft: "4em",
          whiteSpace: "pre-wrap",
        }}
      >
        <b>Congratulations!.</b> You are now a BUE alumnus. We hope you will
        benefit from it and use it to help keep in contact with the University
        and what is happening here, as we grow and develop. Remember, this is
        your University
        <p>
          <br />
          <b> Please complete the form below to update your information.</b>
          <br /> <br /> Student ID: <b>163502</b>
        </p>
        <p>
          Student Name: <b>Habiba Khaled mansour </b>
          <br />{" "}
        </p>
        <p>
          Birth Date: <b> 15/8/1998</b>
          <br />{" "}
        </p>
        <p>
          Nationality: <b>Egypt</b>
          <br />{" "}
        </p>
        <p>
          Faculty:<b>:Faculty of Informatics & Computer Science</b>
          <br />{" "}
        </p>
        <p>
          Award Programme:<b>Computer Science & Information Systems</b>
          <br />{" "}
        </p>
        <p>
          Marking/Classification Scale:<b>UK</b>
          <br />{" "}
        </p>
        <p>
          Awarded Degree:<b>:UK</b>
          <br />{" "}
        </p>
        <p>
          Current Academic Standing:<b>Graduated</b>
        </p>{" "}
        <h3>Occupational Status</h3>
        <br />
        <p>
          Which of the following statements best describes your employment
          status?
        </p>
        <FormControl component="fieldset">
          <FormLabel component="legend">Status</FormLabel>
          <RadioGroup
            defaultValue="female"
            aria-label="gender"
            name="customized-radios"
          >
            <FormControlLabel
              value="female"
              control={<StyledRadio />}
              label="I will be in full-time employment"
            />
            <FormControlLabel
              value="male"
              control={<StyledRadio />}
              label="I will be self-employed/freelance"
            />
            <FormControlLabel
              value="other"
              control={<StyledRadio />}
              label="I will be unemployed and looking for a job"
            />
            <FormControlLabel
              value="other"
              control={<StyledRadio />}
              label="I will be doing voluntary work/other unpaid work"
            />
            <FormControlLabel
              value="other"
              control={<StyledRadio />}
              label="I will be completing military service"
            />
            <FormControlLabel
              value="other"
              control={<StyledRadio />}
              label="I will be embarking on further study"
            />

            <FormControlLabel
              value="other"
              control={<StyledRadio />}
              label="I will begin an Internship"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <Button
        variant="contained"
        color="secondary"
        style={{ backgroundColor: "#11BF45", bottom: "10px", right: "50px" }}
      >
        Save
      </Button>
    </div>
  );
}
