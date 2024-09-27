import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Row from './index';
import { initialDataTable } from '../../data/initial-data-table';

const rowDataMock = initialDataTable[0];
const deleteRowMock = jest.fn();
const onRowDataChangeMock = jest.fn();

describe('SelectedTable Component', () => {
  it('renders the row with initial data', () => {
    render(
      <Row
        isEnable={false}
        initialRowData={rowDataMock}
        deleteRow={deleteRowMock}
        onRowDataChange={onRowDataChangeMock}
      />,
    );

    expect(screen.getByDisplayValue('Value 1')).toBeInTheDocument();
    expect(screen.getByDisplayValue('34')).toBeInTheDocument();
    expect(screen.getByDisplayValue('1990-01-20')).toBeInTheDocument();
    expect(screen.getByDisplayValue('option 3')).toBeInTheDocument();
  });

  it('onRowDataChange is called when input values are changed', () => {
    render(
      <Row
        isEnable={false}
        initialRowData={rowDataMock}
        deleteRow={deleteRowMock}
        onRowDataChange={onRowDataChangeMock}
      />,
    );

    const textTypeInput = screen.getByDisplayValue('Value 1');
    fireEvent.change(textTypeInput, { target: { value: 'New Value' } });

    expect(onRowDataChangeMock).toHaveBeenCalledWith({
      ...rowDataMock,
      textType: 'New Value',
    });
  });

  it('deleteRowMock is called when delete row button is clicked', () => {
    render(
      <Row
        isEnable={false}
        initialRowData={rowDataMock}
        deleteRow={deleteRowMock}
        onRowDataChange={onRowDataChangeMock}
      />,
    );

    fireEvent.click(screen.getByText('Delete Row'));

    expect(deleteRowMock).toHaveBeenCalled();
  });
});
