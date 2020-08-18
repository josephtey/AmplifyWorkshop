import React from 'react';
import '../App.css';
import { Typography, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";

const TableCard = ({
    data,
    removeAction
}) => {
    return (
        <div className="card">
        {data.length > 0 ?
          <Table>
          <TableHead>
            <TableRow>
              <TableCell>Task Name</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map( task => {
              return (
                <TableRow>
                  <TableCell>
                    {task.taskName}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={()=>removeAction(task.taskName)}
                    > 
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            }) }
              
          </TableBody>
        </Table>
      : <Typography>You have not created any tasks</Typography>}
      </div>
    )
}

export default TableCard
