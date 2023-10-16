import * as React from 'react';
import TabPanel from "@mui/lab/TabPanel";
import RefreshIcon from '@mui/icons-material/Refresh';
import { Button,Box} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import {useState} from 'react';
import UsersTabPopup from './users-tab-popup';
import { TabContext } from '@mui/lab';
import UsersTabActions from './users-tab-actions';


const columns=[
    {
        field: 'userName',
        headerName: 'Kullanıcı Adı',
        width: 150,
        editable: true,
    },
    {
        field: 'signed',
        headerName: 'İmza Yetkisi Sahibi',
        width: 200,
        type: 'boolean',
        editable: true,
        sortable:true
    },
    {
        field: 'IDNo',
        headerName: 'Kimlik No',
        type: 'number',
        width: 150,
        sortable:true,
        editable: true,
    },
    {
        field: 'active',
        headerName: 'Aktif',
        width: 100,
        type: 'boolean',
        editable: true,
        sortable:true
    },
    {
        field: 'manager',
        headerName: 'Hesap Sorumlusu',
        width: 150,
        type: 'boolean',
        editable: true,
        sortable:true
    },
    {
        field: 'user',
        headerName: 'Müşteri Kullanıcısı',
        width: 150,
        type: 'boolean',
        editable: true,
        sortable:true
    },
    {
        field: 'project',
        headerName: 'Proje',
        width: 150,
        editable: true,
    },
    {
      field:'actions',
      headerName:'Actions',
      width:100,
      renderCell:(params)=>
      <>
        <UsersTabActions />
      
      </>
    },
    {
      field: 'x',
      headerName: '',
      width: 50,
      editable: true,
  },
];

const rows=[
    {id:1,userName:"İlhami Türkdoğan", signed:true, IDNo:'1', active:true, manager:true},
    {id:2,userName:"Test Kullanıcısı", signed:true, active:true, manager:false, project:"Test Proje"},
    {id:3,userName:"aigorithma2", signed:false, active:true, manager:true, project:"Test Proje"},
    {id:4,userName:"aigorithma3", signed:false, active:true, manager:true}

];

function UsersTab({value}) {

    const [openAddRow, setOpenAddRow] = useState(false);

    const showAddRowPopup = (e) => {
        setOpenAddRow(true);
      }
    
      const hideAddRowPopup = (e) => {
        setOpenAddRow(false);
      } 

    return (
        <>
        <TabContext value={value}>
            <TabPanel value={'1'}>
            <Box>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                startIcon={<RefreshIcon />}
                style={{
                   marginRight: '10px',
                   textTransform: 'none',
                   backgroundColor: 'purple',
                }}
              >
                YENİLE
                {/* TODO: Localize edilecek -Engin */}
              </Button>
              <Button
                variant="contained"
                startIcon={<AddIcon/>}
                onClick={showAddRowPopup}
                style={{
                    marginRight: '10px',
                    textTransform: 'none',
                    backgroundColor: 'purple',
                 }}
              >
              </Button>
            </div>
            </Box>

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
            <UsersTabPopup visible={openAddRow} onClose={hideAddRowPopup}/>
            </TabPanel>
            </TabContext>
        </>
    );
}

export default UsersTab;