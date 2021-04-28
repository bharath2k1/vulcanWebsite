
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 50,
  },
});

function createData(specification, detail) {
  return { specification, detail };
}

const rows = [
  createData('Colour','White',),
  createData('Packaging Size', 	'40 KG'),
  createData('Packaging Type', 'HDPE Bags'),
  createData('Material', 'Bentonite'),
  createData('Ph Value','09-10%'),
  createData('For More Specifications','	Technical Data Sheet on Request only'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Specification</TableCell>
            <TableCell align="right">Details</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.specification}>
              <TableCell component="th" scope="row">
                {row.specification}
              </TableCell>
              <TableCell align="right">{row.detail}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}