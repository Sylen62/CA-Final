import React from 'react';
import {
  Box, TableBody, TableCell, TableRow,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonContained from '../../button/button-contained';
import ButtonOutlined from '../../button/button-outlined';
import JobOfferService from '../../../services/job-offer-service';

const JobOfferTableBody = ({
  loading, jobOffers, setInfoSnackbar, getJobOffers,
}) => {
  const navigate = useNavigate();

  const handleOfferDelete = async (id) => {
    const { success, message } = await JobOfferService.deleteJobOffer(id);
    if (success) getJobOffers();
    setInfoSnackbar({ open: true, success, message });
  };

  return (
    <TableBody>
      { !loading && jobOffers ? jobOffers.map((offer) => (
        <TableRow
          key={offer.id}
        >
          <TableCell>{offer.offerName}</TableCell>
          <TableCell align="right">{offer.createdAt}</TableCell>
          <TableCell align="right">{offer.activeFrom}</TableCell>
          <TableCell align="right">{offer.activeUntill}</TableCell>
          <TableCell align="right">
            <Box sx={{ display: 'inline-flex', gap: '1rem' }}>
              <ButtonOutlined onClick={() => handleOfferDelete(offer.id)} size="small" btnText="Delete" />
              <ButtonContained onClick={() => navigate(`/employer/job-offers/edit/${offer.id}`)} size="small" btnText="Edit" />
            </Box>
          </TableCell>
        </TableRow>
      )) : null}
    </TableBody>
  );
};

export default JobOfferTableBody;
