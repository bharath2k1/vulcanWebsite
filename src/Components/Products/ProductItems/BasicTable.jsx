import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, specification) {
  // for (let [key, value] of Object.entries()) {
  //     console.log(key, value);
  // }
  return { name, specification };
}

// const keyValue = (input) => Object.entries(input).forEach(([key,value]) => {
//     rows.push(createData({key}, {value}, 6.0, 24, 4.0))

//   })

const rows = [
//   createData("Ice cream sandwich", 237, ),
//   createData("Eclair", 262, ),
//   createData("Cupcake", 305, ),
//   createData("Gingerbread", 356, ),
];

export default function BasicTable({ specifications }) {
  const classes = useStyles();
  console.log(rows.map);
  {specifications.map((item) => {
    Object.entries(item).forEach(([key, value]) => (
      rows.push(      createData(key, value))
    ));
    
  })}

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            

            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
