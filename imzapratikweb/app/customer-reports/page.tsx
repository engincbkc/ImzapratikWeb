'use client'
import React from 'react'
import styles from './style.module.css';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Button, Box, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'reportName',
    headerName: 'Rapor Adı',
    width: 250,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'Son Güncelleme Tarihi',
    width: 200,
    renderCell: () => new Date().toLocaleDateString(),
  },
  {
    field: 'archived',
    headerName: 'Arşivlendi',
    width: 150,
    editable: true,
    sortable: true,
  },
  {
    field: 'seen',
    headerName: 'Görüldü',
    width: 150,
    editable: true,
    sortable: true,
  },
  {
    field: 'x',
    headerName: '',
    width: 200,
    editable: true,
  },
  {
    field: 'y',
    headerName: '',
    width: 150,
    editable: true,
  },
];

const rows:any[] = [];
function CustomerReportsPage() {
  return (
    <Box>
       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
         <FormControlLabel
           control={<Checkbox />}
           label={
            <Typography variant="subtitle1" sx={{ fontSize: 15 }}>
               Arşivlenmeyen
            </Typography>
           }
       />
         <Button
            variant="contained"
            startIcon={<RefreshIcon />}
            onClick={()=>{}}
            style={{
              marginRight: '10px',
              textTransform: 'none',
              backgroundColor: 'purple',
            }}
       >
          YENİLE
         </Button>
       </div>
       <Typography variant="h4" component="h4" sx={{ textAlign: 'center', mt: 1, mb: 1, display: 'inline-block' }}>
         Müşteri Raporları
       </Typography>
       <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        editMode="row"
        checkboxSelection
        getRowId={(row) => row.id}
        rowsPerPageOptions={[5, 10, 20]}
        sx={{
          marginTop: 1,
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-row:hover': {
             color: 'black',
             backgroundColor: '#C0C0C0',
             fontSize: '110%',
             cursor: 'pointer',
           },
          '& .MuiDataGrid-row:hover': {
             color: 'black',
             fontSize: '110%',
             cursor: 'pointer',
             boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.3)', 
           },
          color: 'black',
          fontSize: 16,
          backgroundColor: 'white',
          overflow: 'hidden',
        }}
       />
    </Box>
 );
}

export default CustomerReportsPage