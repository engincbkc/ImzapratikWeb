import Typography from "@mui/material/Typography";
import * as React from 'react';
import { IconButton, Paper } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Popup from '@/components/popup/index';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Container} from "@mui/material";

import FileUploderDetailCard from './fileuploader-detail-card'

function AddDocumentPopup({visible,onClose}) {

  const detailContainer = {
    display: 'flex',
    flexWrap: 'wrap',
};

const pageHeight = 500;
const [project, setProject] = useState('');
const [files, setFiles] = useState([]);
const [fileDetails, setFileDetails] = useState([]);

const getFileDetails = (file) => {
  const { name, type, size } = file;
  const formattedSize = (size / 1024).toFixed(2);
  return {
    name,
    type,
    size: formattedSize,
  };
};

const handleFileUpload = (event) => {
  const fileList = event.target.files;
  const newFileDetails = Array.from(fileList).map((file) => getFileDetails(file));

  const readerArray = Array.from(fileList).map((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setFiles((prevFiles) => [...prevFiles, reader.result]);
    };
    reader.readAsDataURL(file);
    return reader;
  });

  Promise.all(readerArray).then(() => {
    setFileDetails((prevFileDetails) => [...prevFileDetails, ...newFileDetails]);
  });
};

const handleDragOver = (event) => {
  event.preventDefault();
};

const handleDrop = (event) => {
  event.preventDefault();
  const fileList = event.dataTransfer.files;
  const newFileDetails = Array.from(fileList).map((file) => getFileDetails(file));

  const readerArray = Array.from(fileList).map((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setFiles((prevFiles) => [...prevFiles, reader.result]);
    };
    reader.readAsDataURL(file);
    return reader;
  });

  Promise.all(readerArray).then(() => {
    setFileDetails((prevFileDetails) => [...prevFileDetails, ...newFileDetails]);
  });
};

const handleChange = (event) => {
  setProject(event.target.value);
};

const clearFiles = () => {
  setFiles([]);
  setFileDetails([]);
};

const removeFile = (index) => {
  setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  setFileDetails((prevFileDetails) => prevFileDetails.filter((_, i) => i !== index));
};

  return (
    <>
      <Popup visible={visible} onClose={onClose} width={650} style={{ color: "red" }} title="Belge Yükle">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Proje Yükle</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={project}
              label="Proje Yükle"
              onChange={handleChange}
            >
              <MenuItem value={1}>Test Proje</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Container  sx={{ mt: 0.5, overflowY: 'auto', maxHeight: pageHeight - 200,marginTop:2,minHeight:100,width:'100%'}}>
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            style={{ border: '2px dashed #ccc', padding: 20, marginTop: 20,width:'100%',minHeight:75 }}
          >
            <Stack direction="row" alignItems="center" spacing={2} style={{ poisiton: 'sticky' }}>
              <Button variant="contained" component="label" style={{ textAlign: 'center', backgroundColor: 'black' }}>
                <AttachFileIcon style={{ marginRight: 5 }} /> Dosya Seç
                <input hidden accept="file/*" multiple type="file" onClick={(event) => event.target.value = null} onChange={handleFileUpload} />
              </Button>
              <Typography variant="h5" color="textSecondary">
                Dosyayı sürükleyin veya buraya bırakın
              </Typography>
            </Stack>
          </div>
          <div id="detailcontainer" style={detailContainer}>
            {fileDetails.map((file, index) => (
              <FileUploderDetailCard file={file} index={index} removeFile={removeFile} key={index} />
            ))}
          </div>

          {fileDetails.length > 0 && (
            <div>
              <Button style={{ position: 'static', padding: 5, marginTop: 5, bottom: 20, right: 20, backgroundColor:'red' }} variant='contained' onClick={clearFiles}>Temizle</Button>
            </div>
          )}
        </Container>
      </Popup>
    </>
  );
}

export default AddDocumentPopup;
