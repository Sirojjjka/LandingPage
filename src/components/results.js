import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//взял готовую таблицу
const useStyles = makeStyles({
    table: {

        maxWidth:100
    },
});

function createData(name, Profit, Time, Asset, Outcome) {
    return { name, Profit, Time, Asset, Outcome};
}

const rows = [
    createData('Sara', 159, 6.0, 24, 4.0),
    createData('Andrew', 237, 9.0, 37, 4.3),
    createData('Dima', 262, 16.0, 24, 6.0),
    createData('Serhii', 305, 3.7, 67, 4.3),
    createData('Vika', 356, 16.0, 49, 3.9),
];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Member</TableCell>
                        <TableCell align="right">Profit</TableCell>
                        <TableCell align="right">Time&nbsp;</TableCell>
                        <TableCell align="right">Asset&nbsp;</TableCell>
                        <TableCell align="right">Outcome&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.Profit}</TableCell>
                            <TableCell align="right">{row.Time}</TableCell>
                            <TableCell align="right">{row.Asset}</TableCell>
                            <TableCell align="right">{row.Outcome}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}