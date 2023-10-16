import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Popup from '@/components/popup/index';
import { DataGrid } from "@mui/x-data-grid";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const columns = [
  {
    field: 'Name',
    headerName: 'Ad',
    editable: true,
    width: 500,
  },
  {
    field: 'E-Posta',
    headerName: 'E-Posta Adresi',
    editable: true,
    width: 500,
  },
];

const rows = [
  { id: 1, Name: 'afkj' },
];

function SendDocumentPopup({ visible, onClose }) {
  return (
    <>
      <Popup visible={visible} onClose={onClose} title={"E-Posta Gönderme"} style={{ width: '80%', height: '95%' }}>
        <Box
          sx={{
            marginTop: 1,
            marginBottom: 2,
          }}
        >
          <TextField fullWidth label="Kime" />
        </Box>

        <Box sx={{ width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
            checkboxSelection
            getRowId={(row) => row.id}
            rowsPerPageOptions={[5, 10, 20]}
            sx={{
              '& .MuiDataGrid-row:hover': {
              fontSize:'100%',
              cursor:"pointer",
              },
              fontSize:13,
            }}
          />
        </Box>

        <Box
          sx={{
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          <TextField fullWidth label="Konu" />
        </Box>

        <Box
          sx={{
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          <TextField fullWidth multiline rows={4} label="Mesaj" />
        </Box>

        <FormGroup row>
          <FormControlLabel control={<Checkbox />} label="Kaynak Belge" />
          <FormControlLabel control={<Checkbox />} label="PDF" />
          <FormControlLabel control={<Checkbox />} label="Signed Document" />
        </FormGroup>

        <Box sx={{ marginTop: 2, minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel>Etiketler</InputLabel>
            <Select label="Etiketler">
              <MenuItem value={1}>Etiket1</MenuItem>
              <MenuItem value={2}>Etiket2</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Popup>
    </>
  );
}

export default SendDocumentPopup;
