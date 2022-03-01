import React, { useEffect, useState } from 'react';
import {
  convertFromHTML, ContentState, convertToRaw,
} from 'draft-js';
import { convertToHTML } from 'draft-convert';
import MUIRichTextEditor from 'mui-rte';
import { Box } from '@mui/material';
import ButtonContained from '../button/button-contained';
import ProfileService from '../../services/profile-service';

const UserProfilePageTextEditor = ({
  user, setSubmiting, submiting, setInfoSnackbar,
}) => {
  const [editorContent, setEditorContent] = useState();
  const [initEditorContent, setInitEditorContent] = useState();
  const textEditorControls = ['title', 'bold', 'italic', 'underline', 'strikethrough', 'undo', 'redo', 'numberList', 'bulletList', 'clear'];

  useEffect(() => {
    if (!user.candidateFullDescription) return;
    const data = convertFromHTML(JSON.parse(user.candidateFullDescription));
    const state = ContentState.createFromBlockArray(data.contentBlocks, data.entityMap);
    setInitEditorContent(JSON.stringify(convertToRaw(state)));
  }, []);

  const handleDescriptionChange = (data) => {
    setEditorContent(convertToHTML(data.getCurrentContent()));
  };

  const handleDescriptionSubmit = async (action) => {
    setSubmiting(true);
    if (action) setInitEditorContent('');
    const { success, message } = await ProfileService.updateUser({
      candidateFullDescription: action ? '' : JSON.stringify(editorContent),
    });
    setInfoSnackbar({ open: true, success, message });
    setSubmiting(false);
  };

  return (
    <>
      <MUIRichTextEditor
        label="Start typing..."
        value={initEditorContent}
        controls={textEditorControls}
        onChange={(data) => handleDescriptionChange(data)}
      />
      <Box sx={{ alignSelf: 'end', mt: '1rem' }}>
        <ButtonContained loading={submiting} btnText="Update" onClick={() => handleDescriptionSubmit(false)} />
      </Box>
    </>
  );
};

export default UserProfilePageTextEditor;
