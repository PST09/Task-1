import { TableCell, TableRow } from '@mui/material'
import React from 'react'

export default function TableDiv({data}) {
  return (
    <>
     <TableRow
            
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell component="th" scope="row">
                {data.code}
            </TableCell>
            <TableCell align="right">{data.symbol}</TableCell>
            <TableCell align="right">{data.rate}</TableCell>
            <TableCell align="right">{data.description}</TableCell>
            <TableCell align="right">{data.rate_float}</TableCell>
            </TableRow>
        
    </>
  )
}
