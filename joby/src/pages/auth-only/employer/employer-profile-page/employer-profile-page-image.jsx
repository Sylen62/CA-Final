import React, { useRef, useState, useEffect } from 'react';
import ButtonUpdate from '../../../../components/button/button-update';
import ImageContainer from '../../../../components/container/image-container';
import Image from '../../../../components/image';
import ProfileService from '../../../../services/profile-service';

const EmployerProfilePageImage = ({
  user, setSubmiting, submiting, setInfoSnackbar,
}) => {
  const uploadInputRef = useRef(null);
  const [image, setImage] = useState(user.image);

  useEffect(() => {
    setImage(user.image);
  }, [user.image]);

  const handleImageUpload = async (event) => {
    setSubmiting(true);
    const { success, message } = await ProfileService.updateUserImage(event.target.files);
    setInfoSnackbar({ open: true, success, message });
    setSubmiting(false);
  };

  return (
    <>
      <ImageContainer sx={{ width: '100%' }}>
        <Image src={image || ''} />
      </ImageContainer>
      <ButtonUpdate sx={{ maxWidth: '500px' }} loading={submiting} onClick={() => uploadInputRef.current.click()} btnText="Change image" />
      <input ref={uploadInputRef} onChange={handleImageUpload} type="file" accept="image/*" hidden />
    </>
  );
};

export default EmployerProfilePageImage;
