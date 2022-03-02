import React from 'react';
import { TablePagination } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTablePagination = styled(TablePagination)(({ theme }) => ({
  color: theme.palette.common.white,
  '.MuiTablePagination-actions': {
    color: theme.palette.secondary.main,
  },
  '.MuiTablePagination-actions .Mui-disabled': {
    color: theme.palette.common.white,
  },
  '.MuiTablePagination-selectIcon': {
    color: theme.palette.secondary.main,
  },
  '.MuiPaper-root': {
    // backgroundColor: 'red',
    // color: 'orange',
  },
}));

const JobOfferTablePagination = ({
  jobOfferCount, rowsPerPage, tablePage, handleChangePage, handleChangeRowsPerPage,
}) => (
  <StyledTablePagination
    rowsPerPageOptions={[5, 10, 15, 20]}
    component="div"
    count={jobOfferCount}
    rowsPerPage={rowsPerPage}
    page={tablePage}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
    labelRowsPerPage="Job offers per page:"
    SelectProps={{
      MenuProps: {
        sx: (theme) => ({
          '& .MuiList-root': {
            backgroundColor: theme.palette.primary.main,
            border: `1px solid ${theme.palette.secondary.main}`,
          },
          '& .MuiList-root .MuiMenuItem-root.Mui-selected': {
            color: theme.palette.secondary.main,
          },
          '& .MuiList-root .MuiMenuItem-root:hover': {
            color: theme.palette.secondary.main,
          },
        }),
      },
    }}
  />
);

export default JobOfferTablePagination;
