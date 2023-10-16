import React, { useState, useEffect } from "react";
import { ReactGrid, Column } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import * as XLSX from "xlsx";

function ExcelContent({ file }) {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const [error, setError] = useState(null);

  const fillEmptyCells = (gridData) => {
    const maxCols = Math.max(...gridData.map((rowData) => rowData.length));
    return gridData.map((rowData) =>
      rowData.concat(Array(maxCols - rowData.length).fill(null))
    );
  };

  const convertFileToGridData = async (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        let gridData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        if (gridData.length === 0) {
          resolve({ columns: [], rows: [] });
          return;
        }

        // Assuming the first row contains the column headers
        const columnHeaders = gridData[0].map((header, idx) => ({
          columnId: idx.toString(),
          rowId: idx,
          type:"header",
          text:header,
          name: header,
          width: 150,
          
        }));

        // Removing the first row, as it contains the headers
        gridData.shift();

        // Fill the empty cells with null value to ensure each row has the same number of cells
        gridData = fillEmptyCells(gridData);

        const rows = gridData.map((rowData, rowIdx) => ({
          rowId: rowIdx.toString(),
          cells: rowData.map((cellData, colIdx) => ({
            columnId: colIdx.toString(),
            type: "text",
            text: cellData !== null ? cellData.toString() : "", // Convert null values to empty string
          })),
        }));

        resolve({ columns: columnHeaders, rows: rows });
      };

      reader.onerror = (e) => {
        setError("An error occurred while processing the Excel file. " + e);
        resolve({ columns: [], rows: [] });
      };

      reader.readAsBinaryString(file);
    });
  };

  const handleCellChange = (changes) => {
    setRows((prevRows) => {
      const updatedRows = prevRows.map((row) => ({ ...row }));
      changes.forEach((change) => {
        const { rowId, columnId, newCell } = change;
        const rowIndex = updatedRows.findIndex((row) => row.rowId === rowId);
        if (rowIndex !== -1) {
          const columnIndex = updatedRows[rowIndex].cells.findIndex(
            (cell) => cell.columnId === columnId
          );
          if (columnIndex !== -1) {
            updatedRows[rowIndex].cells[columnIndex].text = newCell.text;
          }
        }
      });
      return updatedRows;
    });
  };

  useEffect(() => {
    const loadGridData = async () => {
      if (file) {
        setError(null);
        const { columns, rows } = await convertFileToGridData(file);
        setColumns(columns);
        setRows(rows);
        console.log("columns",columns);

      }
    };

    loadGridData();
  }, [file]);


  return (
    <>
      {error && <span>{error}</span>}
      <ReactGrid
        rows={rows}
        columns={columns}
        enableRangeSelection
        editable={true}
        onCellsChanged={handleCellChange}
      >
        {/* Başlık satırını göstermek için Column bileşeni ekliyoruz */}
        {columns.map((column) => (
          <Column
            key={column.columnId}
            columnId={column.columnId}
            name={column.name}
            width={column.width}
          />
        ))}
      </ReactGrid>
    </>
  );
}

export default ExcelContent;
