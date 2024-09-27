import { v4 as uuid4 } from 'uuid';

export const initialDataTable = [
  {
    id: uuid4(),
    textType: 'Value 1',
    numberType: 34,
    dateType: '1990-01-20T17:25:00.511Z',
    selectType: 'option 3',
  },
  {
    id: uuid4(),
    textType: 'Value 2',
    numberType: 31,
    dateType: '1992-12-06T17:25:00.511Z',
    selectType: 'option 1',
  },
  {
    id: uuid4(),
    textType: 'Value 3',
    numberType: 3,
    dateType: '2021-03-26T17:25:00.511Z',
    selectType: 'option 2',
  },
];

export const selectOptions = [
  'no option selected',
  'option 1',
  'option 2',
  'option 3',
];

export const headerTable = [
  'Text Type',
  'Number Type',
  'Date Type',
  'Select Type',
  'Actions',
];
