import React, { useState } from 'react';
import './index.css';
import Row from '../Row';
import { initialDataTable, headerTable } from '../../data/initial-data-table';
import { v4 as uuid4 } from 'uuid';

const SelectedTable = () => {
  const [isEnable, setIsEnable] = useState(false);
  const [dataTable, setDataTable] = useState(initialDataTable); // hold the current state
  const [originalData, setOriginalData] = useState(initialDataTable); // stores the original data (discard button)

  console.log('dataTable', dataTable);

  const handleAddNewRow = () => {
    setDataTable([
      ...dataTable,
      {
        id: uuid4(),
        textType: '',
        numberType: undefined,
        dateType: '',
        selectType: '',
      },
    ]);
  };

  const handleDeleteRow = (indexRow) => {
    setDataTable(dataTable.filter((_, index) => index !== indexRow));
  };

  const handleEditButton = () => {
    setOriginalData(dataTable); // Set originalData to save add/delete rows
    setIsEnable(true);
  };

  // Updates the originalData to match dataTable, saving the current changes
  const handleConfirmData = () => {
    setOriginalData(dataTable); // Save the changes by updating the original data
    setIsEnable(false); // Disable editing
  };

  // Reverts dataTable back to the last saved originalData, discarding any changes
  const handleDiscardData = () => {
    setDataTable(originalData); // Revert to the original data
    setIsEnable(false); // Disable editing
  };

  const handleRowDataChange = (index, updatedRowData) => {
    const updatedDataTable = [...dataTable];
    updatedDataTable[index] = updatedRowData;
    setDataTable(updatedDataTable);
  };

  return (
    <div className="selected-table-table">
      <h1>Insurance MSG Iberia</h1>

      <div className="selected-table-buttons">
        {isEnable ? (
          <>
            <button onClick={handleConfirmData}>Confirm</button>
            <button onClick={handleDiscardData}>Discard</button>
          </>
        ) : (
          <button onClick={handleEditButton}>Edit table</button>
        )}
        <button onClick={handleAddNewRow}>Add New Row</button>
      </div>

      <table>
        <thead>
          <tr>
            {headerTable.map((header, index) => (
              <th key={`header-${index}`}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataTable.map((data, index) => (
            <Row
              key={data.id}
              isEnable={isEnable}
              initialRowData={data}
              onDeleteRow={() => handleDeleteRow(index)}
              onRowDataChange={(updatedRowData) =>
                handleRowDataChange(index, updatedRowData)
              }
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedTable;
