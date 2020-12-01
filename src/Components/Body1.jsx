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
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const rows = [
  {
    ModuleCode: "17CSC128H",
    ModuleName: "English Upper-Intermediate",
    ModuleLevel: "P",
    ModuleCredit: "10",
    Assesments: "Unseen Exam 73",
    Grade: "B+",
    CreditAward: "10",
    Attempts: "1",
    Status: "",
  },
  { Assesments: "Presentation 73" },
];
export default function Body1() {
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
        <br /> <h2 style={{ color: "#074A80" }}>English Transcript</h2>
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
        <p>
          Student ID: <b>163502</b> <br />{" "}
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
        <h3>Degree Year Three 2017-2018</h3>
        <h2 style={{ color: "#074A80", textAlign: "left" }}>Semester 1</h2>
      </div>
      <div>
        <center>
          <Paper elevation={6} style={{ width: "90%", marginTop: "2%" }}>
            <TableContainer component={Paper}>
              <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
              >
                <TableHead style={{ backgroundColor: "#BF112B" }}>
                  <TableRow>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                    >
                      Module Code
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                    >
                      Module Name
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="left"
                    >
                      Module Level
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                    >
                      Module Credit
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                    >
                      Assesments
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                    >
                      Grade
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                    >
                      Credit Award
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                    >
                      Attempts
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                    >
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell align="center">{row.ModuleCode}</TableCell>
                      <TableCell align="center">{row.ModuleName}</TableCell>
                      <TableCell align="center">{row.ModuleLevel}</TableCell>
                      <TableCell align="center">{row.ModuleCredit}</TableCell>
                      <TableCell align="center">{row.Assesments}</TableCell>
                      <TableCell align="center">{row.Grade}</TableCell>
                      <TableCell align="center">{row.CreditAward}</TableCell>
                      <TableCell align="center">{row.Attempts}</TableCell>
                      <TableCell align="center">{row.Status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </center>
        <div
          style={{
            textAlign: "left",
            marginTop: "40px",
            marginLeft: "4em",
            whiteSpace: "pre-wrap",
          }}
        >
          <h2 style={{ color: "#074A80", textAlign: "left" }}>Semester 2</h2>
        </div>
        <center>
          <Paper elevation={6} style={{ width: "90%", marginTop: "2%" }}>
            <TableContainer component={Paper}>
              <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
              >
                <TableHead style={{ backgroundColor: "#BF112B" }}>
                  <TableRow>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                    >
                      Module Code
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                    >
                      Module Name
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="left"
                    >
                      Module Level
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                    >
                      Module Credit
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                    >
                      Assesments
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                    >
                      Grade
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                    >
                      Credit Award
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                    >
                      Attempts
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="center"
                    >
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell align="center">{row.ModuleCode}</TableCell>
                      <TableCell align="center">{row.ModuleName}</TableCell>
                      <TableCell align="center">{row.ModuleLevel}</TableCell>
                      <TableCell align="center">{row.ModuleCredit}</TableCell>
                      <TableCell align="center">{row.Assesments}</TableCell>
                      <TableCell align="center">{row.Grade}</TableCell>
                      <TableCell align="center">{row.CreditAward}</TableCell>
                      <TableCell align="center">{row.Attempts}</TableCell>
                      <TableCell align="center">{row.Status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </center>
      </div>
    </div>
  );
}
