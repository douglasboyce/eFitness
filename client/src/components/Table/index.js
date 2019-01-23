import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@material-ui/core";
import MyTableRow from './row.js';

class MyTable extends React.Component {
  buildTableRows() {
    const {
      data,
      handleRemove,
      startEditing,
      editIdx,
      stopEditing,
      handleChange,
      header
    } = this.props;

    let tableRows = [];
    for (let i=0; i<data.length; i++) {
      let tableRow = (
        <MyTableRow
          row={data[i]}
          header={header}
          handleChange={handleChange}
          handleRemove={handleRemove}
          startEditing={startEditing}
          editIdx={editIdx}
          stopEditing={stopEditing}
          id={i}
          key={i}
        />
      );
      tableRows.push(tableRow);
    }
    return tableRows;
  }

  render() {
    const {
      header
    } = this.props;

    return (
      <Table className="table">
        <TableHead>
          <TableRow className="table-row">
            {header.map((x, i) => (
              <TableCell key={`thc-${i}`} style={{color: 'white', fontSize:'18', padding:'5'}}>{x.name}</TableCell>
            ))}
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {this.buildTableRows()}
        </TableBody>
      </Table>
    );
  }
}

export default MyTable;