import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@material-ui/core";
import MyTRow from '../Table/row.js';

class ExerciseTable extends React.Component {
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
        <MyTRow
          row={data[i]}
          header={header}
          handleChange={handleChange}
          handleRemove={handleRemove}
          startEditing={startEditing}
          editIdx={editIdx}
          stopEditing={stopEditing}
          id={data[i]._id}
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
      <Table className="exe-tbody">
        <TableHead className="table-head">
          <TableRow>
            {header.map((x, i) => (
              <TableCell key={`thc-${i}`} style={{color: 'black', fontSize:'18', padding:'5'}}>{x.name}</TableCell>
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

export default ExerciseTable;