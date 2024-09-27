import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SelectedTable from './index';
import { initialDataTable } from '../../data/initial-data-table';

describe('SelectedTable Component', () => {
  it('renders the table with initial data', () => {
    render(<SelectedTable />);

    expect(screen.getByText('Insurance MSG Iberia')).toBeInTheDocument();

    expect(screen.getAllByRole('row')).toHaveLength(
      initialDataTable.length + 1,
    ); // 3 rows + header row
  });

  it('click edit button and Confirm and Discard buttons are shown', () => {
    render(<SelectedTable />);

    fireEvent.click(screen.getByText('Edit table'));

    expect(screen.getByText('Confirm')).toBeInTheDocument();
    expect(screen.getByText('Discard')).toBeInTheDocument();

    expect(screen.queryByText('Edit table')).toBeNull();
  });

  it('add new row to the table', () => {
    render(<SelectedTable />);

    fireEvent.click(screen.getByText('Add New Row'));

    expect(screen.getAllByRole('row')).toHaveLength(5);
  });

  it('delete row from the table', () => {
    render(<SelectedTable />);

    const deleteButtons = screen.getAllByText('Delete Row');
    fireEvent.click(deleteButtons[0]);

    expect(screen.getAllByRole('row')).toHaveLength(3);
  });
});
