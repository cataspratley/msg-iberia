import React, { useState, useEffect } from 'react';
import P from 'prop-types';
import { selectOptions } from '../../data/initial-data-table';

const Row = ({ isEnable, initialRowData, onDeleteRow, onRowDataChange }) => {
  const [dataRow, setDataRow] = useState(initialRowData); // manage the current row data

  // Ensures that the row's local state (dataRow) is reset whenever initialRowData changes (Discard button)
  useEffect(() => {
    setDataRow(initialRowData); // Reset local state when props change (Discard button)
  }, [initialRowData]);

  const handleCellChange = (value, field) => {
    const updatedRow = {
      ...dataRow,
      [field]: value,
    };
    setDataRow(updatedRow);
    onRowDataChange(updatedRow); // Pass the updated row back to the App component
  };

  return (
    <tr>
      <td key="1">
        <input
          className="row-data-cell-input"
          type="text"
          value={dataRow.textType}
          disabled={!isEnable}
          onChange={(e) => handleCellChange(e.target.value, 'textType')}
        />
      </td>
      <td key="2">
        <input
          className="row-data-cell-input"
          type="number"
          value={dataRow.numberType ? dataRow.numberType : undefined}
          disabled={!isEnable}
          onChange={(e) => handleCellChange(e.target.value, 'numberType')}
        />
      </td>
      <td key="3">
        <input
          className="row-data-cell-input"
          type="date"
          value={
            dataRow.dateType
              ? new Date(dataRow.dateType).toISOString().slice(0, 10)
              : undefined
          }
          disabled={!isEnable}
          onChange={(e) => handleCellChange(e.target.value, 'dateType')}
        />
      </td>
      <td key="4">
        <select
          className="row-data-cell-input"
          value={dataRow.selectType}
          disabled={!isEnable}
          onChange={(e) => handleCellChange(e.target.value, 'selectType')}
        >
          {selectOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </td>

      <td>
        <button className="row-data-cell-input" onClick={onDeleteRow}>
          Delete Row
        </button>
      </td>
    </tr>
  );
};

Row.propTypes = {
  isEnable: P.bool,
  initialRowData: P.shape({
    textType: P.string,
    numberType: P.number,
    dateType: P.string,
    selectType: P.string,
  }),
  onDeleteRow: P.func,
  onRowDataChange: P.func,
};

export default Row;
