import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import JobOfferService from '../../../services/job-offer-service';
import { authSelector } from '../../../store/auth';
import JobOfferTableHead from './job-offer-table-head';
import JobOfferTablePagination from './job-offer-table-pagination';
import JobOfferTableBody from './job-offer-table-body';
import InfoSnackbar from '../../snackbar';

const StyledTablePaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: '10px',
}));

const JobOfferTable = () => {
  const { user: { id } } = useSelector(authSelector);
  const [loading, setLoading] = useState(false);
  const [jobOffers, setJobOffers] = useState();
  const [tableOrder, setTableOrder] = useState({ field: 'createdAt', order: -1 });
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [tablePage, setTablePage] = useState(0);
  const [jobOfferCount, setJobOfferCount] = useState(0);
  const [infoSnackbar, setInfoSnackbar] = useState({ open: false, success: false, message: '' });

  const handleSnackbarClose = (_, reason) => {
    if (reason === 'clickaway') return;
    setInfoSnackbar({ open: false });
  };

  const getJobOffers = async () => {
    setLoading(true);
    const {
      success, message, offers, offerCount,
    } = await JobOfferService
      .getEmployerJobOffers(id, tablePage + 1, rowsPerPage, tableOrder);
    if (!success) {
      setInfoSnackbar({ open: true, success, message });
      setLoading(false);
    }
    setJobOffers(offers);
    setJobOfferCount(offerCount);
    setLoading(false);
  };

  useEffect(() => {
    getJobOffers();
  }, [tablePage, rowsPerPage, tableOrder]);

  const handleTableOrderChange = (field, order) => {
    setTableOrder({ field, order });
  };

  const handleChangePage = (_, newPage) => {
    setLoading(true);
    setTablePage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setLoading(true);
    setTablePage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <>
      <InfoSnackbar {...infoSnackbar} handleSnackbarClose={handleSnackbarClose} />
      <TableContainer component={StyledTablePaper} elevation={0}>
        <Table>
          <JobOfferTableHead
            handleTableOrderChange={handleTableOrderChange}
            tableOrder={tableOrder}
          />
          <JobOfferTableBody
            loading={loading}
            jobOffers={jobOffers}
            setInfoSnackbar={setInfoSnackbar}
            getJobOffers={getJobOffers}
          />
        </Table>
        <JobOfferTablePagination
          jobOfferCount={jobOfferCount}
          rowsPerPage={rowsPerPage}
          tablePage={tablePage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  );
};
export default JobOfferTable;
