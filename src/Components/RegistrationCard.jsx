import React, { useEffect, useState } from "react";
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
import axios from "axios";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// const rows = [
//   {
//     ModuleCode: "17CSC128H",
//     ModuleName: "English Upper-Intermediate",
//     ModuleLevel: "P",
//     ModuleCredit: "10",
//     Attempts: "1",
//     AcceptanceDate: "30/9/2019, 16.29",
//   },
//   {
//     ModuleCode: "17CSC128H",
//     ModuleName: "English Upper-Intermediate",
//     ModuleLevel: "P",
//     ModuleCredit: "10",
//     Attempts: "1",
//     AcceptanceDate: "30/9/2019, 16.29",
//   },
//   {
//     ModuleCode: "17CSC128H",
//     ModuleName: "English Upper-Intermediate",
//     ModuleLevel: "P",
//     ModuleCredit: "10",
//     Attempts: "1",
//     AcceptanceDate: "30/9/2019, 16.29",
//   },
//   {
//     ModuleCode: "17CSC128H",
//     ModuleName: "English Upper-Intermediate",
//     ModuleLevel: "P",
//     ModuleCredit: "10",
//     Attempts: "1",
//     AcceptanceDate: "30/9/2019, 16.29",
//   },
//   {
//     ModuleCode: "17CSC128H",
//     ModuleName: "English Upper-Intermediate",
//     ModuleLevel: "P",
//     ModuleCredit: "10",
//     Attempts: "1",
//     AcceptanceDate: "30/9/2019, 16.29",
//   },
//   {
//     ModuleCode: "17CSC128H",
//     ModuleName: "English Upper-Intermediate",
//     ModuleLevel: "P",
//     ModuleCredit: "10",
//     Attempts: "1",
//     AcceptanceDate: "30/9/2019, 16.29",
//   },
//   {
//     ModuleCode: "17CSC128H",
//     ModuleName: "English Upper-Intermediate",
//     ModuleLevel: "P",
//     ModuleCredit: "10",
//     Attempts: "1",
//     AcceptanceDate: "30/9/2019, 16.29",
//   },
//   {
//     ModuleCode: "17CSC128H",
//     ModuleName: "English Upper-Intermediate",
//     ModuleLevel: "P",
//     ModuleCredit: "10",
//     Attempts: "1",
//     AcceptanceDate: "30/9/2019, 16.29",
//   },
//   {
//     ModuleCode: "17CSC128H",
//     ModuleName: "English Upper-Intermediate",
//     ModuleLevel: "P",
//     ModuleCredit: "10",
//     Attempts: "1",
//     AcceptanceDate: "30/9/2019, 16.29",
//   },
// ];
export default function RegistrationCard() {
  const [studentID, setStudentID] = useState(120158);
  const [studentData, setStudentData] = useState();

  const getStudentData = () => {
    axios
      .post(
        `https://bb2f4278d37e.ngrok.io/api/StudentPortal/GetStudentRegisterationCard?studentID=${studentID}`
      )
      .then((response) => {
        setStudentData(response.data.item);
        console.log(JSON.stringify(response.data.item.modules));
      });
  };

  useEffect(() => {
    // axios.post(
    //   `https://abed0cdf7531.ngrok.io/api/StudentPortal/GetStudentRegisterationCard?studentID=${studentID}`
    // ).then(response => {
    //   console.log(JSON.stringify(response));
    //   setStudentData(response.data);
    // });
    getStudentData();
    //let mounted = true;
    //getStudentData();
    //return () => (mounted = false);
  }, []);

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
        <br /> <h2 style={{ color: "#074A80" }}>Registration Card</h2>
        {/* <Button onClick={getStudentData()}>TEST API</Button> */}
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
          Student Name: <b>{studentData ? studentData.studentName : null}</b>
          <br />{" "}
        </p>
        <p>
          Birth Date: <b>{studentData ? studentData.birthdate : null}</b>
          <br />{" "}
        </p>
        <p>
          Nationality: <b>Egyptian</b>
          <br />{" "}
        </p>
        <p>
          Faculty:<b>{studentData ? studentData.faculty : null}</b>
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
                      align="left"
                    >
                      Module Credit
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="left"
                    >
                      Attempts
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="left"
                    >
                      Acceptance Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentData
                    ? studentData.modules.map((row) => (
                        <TableRow>
                          <TableCell align="center">{row.moduleCode}</TableCell>
                          <TableCell align="center">{row.moduleName}</TableCell>
                          <TableCell align="center">
                            {row.moduleLevel}
                          </TableCell>
                          <TableCell align="center">
                            {row.moduleCredit}
                          </TableCell>
                          <TableCell align="center">{row.attempts}</TableCell>
                          <TableCell align="center">
                            {row.acceptanceDate}
                          </TableCell>
                        </TableRow>
                      ))
                    : null}
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
                      align="left"
                    >
                      Module Credit
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="left"
                    >
                      Attempts
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="left"
                    >
                      Acceptance Date
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
                      <TableCell align="center">{row.Attempts}</TableCell>
                      <TableCell align="center">{row.AcceptanceDate}</TableCell>
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
          <h2 style={{ color: "#074A80", textAlign: "left" }}>
            Summer Assessment Period
          </h2>
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
                      align="left"
                    >
                      Module Credit
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="left"
                    >
                      Attempts
                    </TableCell>
                    <TableCell
                      style={{ fontWeight: "bold", color: "white" }}
                      align="left"
                    >
                      Acceptance Date
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
                      <TableCell align="center">{row.Attempts}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </center>
      </div>
      <div
        style={{
          marginTop: "40px",
          textAlign: "left",
          marginLeft: "4em",
          whiteSpace: "pre-wrap",
        }}
      >
        <p>
          To Complete your Registration you must press the "Accept" button
          below. Once your Registration is accepted, you will be able to collect
          your <br />
          student ID card from Student Affairs IS services. Room 104 Bldg (E).
          You will only be able to do this if you have paid your fees and, for
          new students, <br />
          provided all the relevant papers for your admission
        </p>
        <br />{" "}
        <b>
          I certify that the above programme details for my study this academic
          year are correct. <br />I undertake to abide by the University's
          Regulations, including the General Academic Regulations (GAR) and the
          Examination and Assessment Regulations (EAR),
          <br /> which are accessible via the BUE homepage.
          <br /> I agree to read the Student Handbook (Accessible via the BUE
          homepage) and to comply with relevant procedures and policies in
          relation to my study. <br />I understand that all my communications
          from the University in regard to my study will be sent to my BUE email
          address including <br />
          the outcomes of any academic appeal, impaired performance or academic
          misconduct cases.
          <br />I accept that, If I do not read my BUE email, any appeal that I
          may make on the grounds that I was unaware of information sent to my
          BUE email <br /> address will be rejected. I therefore agree to access
          my BUE email and particularly during the examination & assessment
          periods.
        </b>
      </div>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "50px" }}
      >
        Save
      </Button>
    </div>
  );
}
