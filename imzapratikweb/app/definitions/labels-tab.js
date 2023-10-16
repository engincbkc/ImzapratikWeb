import TabPanel from "@mui/lab/TabPanel";
import RefreshIcon from '@mui/icons-material/Refresh';
import { Button,Box} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import LabelsTabPopup from "./labels-tab-popup";
import { TabContext } from "@mui/lab";

const columns=[
    {
        field:'Name',
        headerName:'Ad',
        width:250,
        editable: true,
        sortable:true
    },
    {
        field: 'active',
        headerName: 'Aktif',
        width: 700,
        type: 'boolean',
        editable: true,
        sortable:true
    },
]

const rows=[

]

function LabelsTab({value}) {

    const[openAddLabel, SetOpenAddLabel]=useState(false);

    const ShowAddLabelPopup=(e)=>{
        SetOpenAddLabel(true);
    }

    const HideAddLabelPopup=(e)=>{
        SetOpenAddLabel(false);
    }
    return (
        <>
        <TabContext value={value}>
            <TabPanel value={'5'}>
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
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<AddIcon/>}
                    onClick={ShowAddLabelPopup}
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

                <LabelsTabPopup visible={openAddLabel} onClose={HideAddLabelPopup}/>
            </TabPanel>
            </TabContext>
        </>
    );
}

export default LabelsTab;