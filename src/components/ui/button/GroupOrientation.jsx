import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { css } from "@emotion/react";
import MailIcon from '@mui/icons-material/Mail';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const buttons = [
  <Button key="one"><MailIcon/></Button>,
  <Button key="two"><InsertPhotoIcon/></Button>,
  <Button key="three"><InsertDriveFileIcon/></Button>,
];

const GroupOrientation=() =>{
  return (
    <Box
      sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        // aria-label="vertical outlined button group"
        size="large" aria-label="large button group"
      >
        {buttons}
      </ButtonGroup>
      
    </Box>
  );
}
export default GroupOrientation

