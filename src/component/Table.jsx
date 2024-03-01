import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import TableDiv from './tablediv';







export default function DashboardTable() {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        getData();
    }, []);

    function getData() {
        axios("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then((res) => {
                setData(res.data.bpi);
            })
            .catch((err) => console.error(err));
    }
    console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell align="right">Code</TableCell>
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Rate</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Rate_float</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {Object.values(data).map((value) => (
                <TableDiv key={value.code} data={value} />
                
            ))}

        </TableBody>
    </Table>
    </TableContainer>
  );
}