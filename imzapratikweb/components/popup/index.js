import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';


function Popup({ visible, onClose, children, style, width = 550, title,moveable=true,height=450, strict=false}) {

  const customStyle = {
    minHeight:height,
    width: width,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#f7f7f7',
    border: '2px solid #ccc',
    boxShadow: 24,
    p: 4,
    ...style,
  };

  const popupTitleStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: '1rem',
    color: '#444',
    borderBottom: '2px solid #ccc',
    padding: '0.5rem 1rem',
    width:'100%',
  };

  const closeButtonStyle = {
    padding: '0.75rem',
    color: '#666',
    border: '1px solid #ccc',
    borderRadius: '50%',
    backgroundColor: '#fff',
    cursor: 'pointer',
  };

  const cancelButtonStyle = {
    position: 'absolute',
    left: '1rem',
    bottom: '1rem',
    marginTop:30
  };

  const saveButtonStyle = {
    position: 'absolute',
    right: '1rem',
    bottom: '1rem',
    marginTop:30
  };

  return (
    <>
      <Modal
        open={visible}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={customStyle}>
          <div style={popupTitleStyle}>
            <Typography variant="h6" id="modal-modal-title">
              {title}
            </Typography>
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={onClose}
              style={closeButtonStyle}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </div>
          {children}
          <div style={{marginTop:30,width:'100%'}}></div>
          <Button
            variant="outlined"
            onClick={onClose}
            style={cancelButtonStyle}
          >
            Vazgeç
          </Button>

          <Button
            variant="outlined"
            style={saveButtonStyle}
          >
            Gönder
          </Button>
        </Box>
      </Modal>
    </>
  );
}
export default Popup;
