import React from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { IconButton, TableCell } from '@mui/material';

const JobOfferTableHeadCell = ({
  align, title, handleOrderChange, order, fieldName, active,
}) => (
  <TableCell align={align}>
    {title}
    <IconButton onClick={() => handleOrderChange(fieldName, order)}>
      {
      order === 1
        ? <ArrowCircleUpIcon sx={{ color: active ? 'secondary.main' : 'common.white' }} />
        : <ArrowCircleDownIcon sx={{ color: active ? 'secondary.main' : 'common.white' }} />
    }
    </IconButton>
  </TableCell>
);

export default JobOfferTableHeadCell;
