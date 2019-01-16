import React from "react";
import {
  TableRow,
  TableCell,
  TextField
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import TrashIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/CheckCircle";

class MyTableRow extends React.Component {
  buildTextField(label, value) {
    return (
      <TableCell key={label}>
        <TextField
          name={label}
          onChange={e => this.props.handleChange(e, label)}
          value={value}
        />
      </TableCell>
    );
  }

  render() {
    const {
      row,
      header,
      handleRemove,
      startEditing,
      editIdx,
      stopEditing,
      id
    } = this.props;
    
    const currentlyEditing = editIdx === id;
    return (
      <TableRow key={`tr-${id}`}>
        {header.map((cell, index) => {
          let value = row[cell.prop];
          if (currentlyEditing) {
            return this.buildTextField(cell.prop, value);
          }
          return <TableCell key={index}>{value}</TableCell>;
        })}
        <TableCell>
          {currentlyEditing ? (
              <CheckIcon onClick={() => stopEditing()} />
          ) : (
              <EditIcon onClick={() => startEditing(id)} />
          )}
        </TableCell>
        <TableCell>
          <TrashIcon onClick={() => handleRemove(id) } />
        </TableCell>
      </TableRow>
    );
  }

  clickMe() {
    console.log('are you going to call me or not?');
  }
}

export default MyTableRow;