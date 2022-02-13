import React from 'react';
import MUIImage from 'mui-image';

const Image = ({ src, ...otherProps }) => (
  <MUIImage src={src} duration={500} height="100%" sx={{ borderRadius: '10px' }} {...otherProps} />
);

export default Image;
