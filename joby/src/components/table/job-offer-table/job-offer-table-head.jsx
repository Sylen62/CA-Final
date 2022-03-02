import React, { useEffect, useState } from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';
import JobOfferTableHeadCell from './job-offer-table-head-cell';

const initCells = {
  offerName: {
    title: 'Offer Name',
    order: 1,
    fieldName: 'offerName',
    active: false,
  },
  createdAt: {
    title: 'Created At',
    align: 'right',
    order: 1,
    fieldName: 'createdAt',
    active: false,
  },
  activeFrom: {
    title: 'Active Form',
    align: 'right',
    order: 1,
    fieldName: 'activeFrom',
    active: false,
  },
  activeUntill: {
    title: 'Active Untill',
    align: 'right',
    order: 1,
    fieldName: 'activeUntill',
    active: false,
  },
};

const JobOfferTableHead = ({ handleTableOrderChange }) => {
  const [cells, setCell] = useState(initCells);

  useEffect(() => {
    setCell({ ...cells, createdAt: { ...cells.createdAt, active: true } });
  }, []);

  const handleOrderChange = (field, order) => {
    setCell({
      ...initCells,
      [field]: {
        ...cells[field],
        order: order * -1,
        active: true,
      },
    });
    handleTableOrderChange(field, order);
  };
  return (
    <TableHead>
      <TableRow>
        {Object.entries(cells).map(([key, value]) => (
          <JobOfferTableHeadCell
            key={key}
            title={value.title}
            align={value.align}
            handleOrderChange={handleOrderChange}
            order={value.order}
            fieldName={key}
            active={value.active}
          />
        ))}
        <TableCell align="right">Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default JobOfferTableHead;
