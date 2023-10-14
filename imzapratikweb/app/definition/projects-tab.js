import { TabContext, TabPanel } from "@mui/lab";
import RefreshIcon from '@mui/icons-material/Refresh';
import { Button,Box} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import ProjectsTabPopup from "./projects-tab-popup";

const columns=[
    {
        field: 'Name',
        headerName: 'Ad',
        width: 150,
        editable: true,
        sortable:true
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
        field: 'responsible',
        headerName: 'Sorumlu',
        width: 200,
        editable: true,
        sortable:true
    },
    {
        field: 'StartDate',
        headerName: 'Başlama Tarihi',
        width: 170,
        editable: true,
        sortable:true
    },
    {
        field: 'EndDate',
        headerName: 'Bitiş Tarihi',
        width: 170,
        editable: true,
        sortable:true
    },
    {
        field: 'Notes',
        headerName: 'Notlar',
        width: 150,
        editable: true,
        sortable:true
    },
]

const rows=[
    
]

function ProjectsTab({value}) {

    const[openProject, setopenProject]=useState(false);
    
    const showopenProject = (e) => {
        setopenProject(true);
        
      }
    
      const hideopenProject = (e) => {
        setopenProject(false);
      } 

    return (
        <>
        <TabContext value={value}>
            <TabPanel value={'3'}>
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
                onClick={showopenProject}
                style={{
                    marginRight: '10px',
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

            <ProjectsTabPopup visible={openProject} onClose={hideopenProject}/>
            </TabPanel>
            </TabContext>
        </>
    );
}

export default ProjectsTab;