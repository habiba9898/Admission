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
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const rows = [
  {
    DateorTime: "12 September 08:00 AM",
    ModuleCode: "F12345",
    ModuleName: "Introduction to Computer Science",
    Location: "Building G Lecture Hall 3",
  },
  {
    DateorTime: "12 September 08:00 AM",
    ModuleCode: "F12345",
    ModuleName: "Introduction to Computer Science",
    Location: "Building G Lecture Hall 3",
  },
  {
    DateorTime: "12 September 08:00 AM",
    ModuleCode: "F12345",
    ModuleName: "Introduction to Computer Science",
    Location: "Building G Lecture Hall 3",
  },
  {
    DateorTime: "12 September 08:00 AM",
    ModuleCode: "F12345",
    ModuleName: "Introduction to Computer Science",
    Location: "Building G Lecture Hall 3",
  },
];
export default function ExamSchedule() {
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
        <br /> <h2 style={{ color: "#074A80" }}>Exam Schedule</h2>
        <hr
          style={{
            height: "1px",
            backgroundColor: "black",
          }}
        ></hr>
      </div>
      <center>
        <Paper elevation={6} style={{ width: "90%", marginTop: "2%" }}>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead style={{ backgroundColor: "#BF112B", height: "30px" }}>
                <TableRow>
                  <TableCell
                    style={{ fontWeight: "bold", color: "white" }}
                    align="center"
                  >
                    Date/Time
                  </TableCell>
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
                    align="center"
                  >
                    Location
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    style={{ backgroundColor: "#F2F2F2", height: "100px" }}
                  >
                    <TableCell align="center">{row.DateorTime}</TableCell>
                    <TableCell align="center">{row.ModuleCode}</TableCell>
                    <TableCell align="center">{row.ModuleName}</TableCell>
                    <TableCell align="center">{row.Location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </center>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "50px" }}
      >
        print
      </Button>
    </div>
  );
}
