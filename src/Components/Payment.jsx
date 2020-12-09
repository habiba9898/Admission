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
    TransactionType: "Withdrawal ",
    Amount: "36000",
    Date: "12/2/202",
    TransactionCode: "2324421213",
  },
  {
    TransactionType: "Withdrawal ",
    Amount: "36000",
    Date: "12/2/202",
    TransactionCode: "2324421213",
  },
  {
    TransactionType: "Withdrawal ",
    Amount: "36000",
    Date: "12/2/202",
    TransactionCode: "2324421213",
  },
  {
    TransactionType: "Withdrawal ",
    Amount: "36000",
    Date: "12/2/202",
    TransactionCode: "2324421213",
  },
];
export default function Payment() {
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
        <br /> <h2 style={{ color: "#074A80" }}>Online Payment</h2>
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
              <TableHead style={{ height: "15px", backgroundColor: "#BF112B" }}>
                <TableRow>
                  <TableCell
                    style={{ fontWeight: "bold", color: "white" }}
                    align="center"
                  >
                    Transaction Type
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "bold", color: "white" }}
                    align="center"
                  >
                    Amount
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "bold", color: "white" }}
                    align="center"
                  >
                    Date
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "bold", color: "white" }}
                    align="center"
                  >
                    Transaction Code
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    style={{ backgroundColor: "#F2F2F2", height: "50px" }}
                  >
                    <TableCell align="center">{row.TransactionType}</TableCell>
                    <TableCell align="center">{row.Amount}</TableCell>
                    <TableCell align="center">{row.Date}</TableCell>
                    <TableCell align="center">{row.TransactionCode}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </center>
      <div style={{ textAlign: "left", marginLeft: "4vw", marginTop: "70px" }}>
        <p>
          In Case You Want To Pay Your Tuition Fees Through CIB Bank Service.
        </p>
      </div>
      <Button
        variant="contained"
        color="secondary"
        style={{ backgroundColor: "#074A80", bottom: "45px", right: "50px" }}
        href="/P2"
      >
        Pay Now!
      </Button>
    </div>
  );
}
