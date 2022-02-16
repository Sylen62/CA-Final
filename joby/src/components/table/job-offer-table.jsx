import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonOutlined from '../button/button-outlined';
import ButtonContained from '../button/button-contained';

const StyledTablePaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '10px',
}));

function createData(id, name, createdAt, activeFrom, activeUntill) {
  return {
    id, name, createdAt, activeFrom, activeUntill,
  };
}

const rows = [
  createData(1, 'Offer 1', '2022-01-30', '2022-02-01', '2022-02-02'),
  createData(2, 'Offer 2', '2022-01-30', '2022-02-01', '2022-02-02'),
  createData(3, 'Offer 3', '2022-01-30', '2022-02-01', '2022-02-02'),
  createData(4, 'Offer 4', '2022-01-30', '2022-02-01', '2022-02-02'),
  createData(5, 'Offer 5', '2022-01-30', '2022-02-01', '2022-02-02'),
];

const JobOfferTable = () => {
  const navigate = useNavigate();
  return (
    <TableContainer component={StyledTablePaper} elevation={0}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Offer Name</TableCell>
            <TableCell align="right">Created At</TableCell>
            <TableCell align="right">Active From</TableCell>
            <TableCell align="right">Active Untill</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
              <TableCell align="right">{row.activeFrom}</TableCell>
              <TableCell align="right">{row.activeUntill}</TableCell>
              <TableCell align="right">
                <Box sx={{ display: 'inline-flex', gap: '1rem' }}>
                  <ButtonOutlined size="small" btnText="Delete" />
                  <ButtonContained onClick={() => navigate(`/employer/job-offers/edit/${row.id}`)} size="small" btnText="Edit" />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default JobOfferTable;
