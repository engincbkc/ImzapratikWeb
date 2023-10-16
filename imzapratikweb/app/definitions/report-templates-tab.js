import TabPanel from "@mui/lab/TabPanel";
import { Button,Box} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import ReportTemplatesPopup from "./report-templates-popup";
import { TabContext } from "@mui/lab";

const columns=[
  {
    field: 'Name',
    headerName: 'Ad',
    width: 150,
    editable: true,
},
{
    field: 'type',
    headerName: 'Dosya Türü',
    width: 150,
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
    field: 'startDate',
    headerName: 'Oluşturulma Tarihi',
    width: 200,
    editable: true,
},
{
    field: 'EndDate',
    headerName: 'Son Güncelleme Tarihi',
    width: 200,
    editable: true,
},
{
    field: 'Notes',
    headerName: 'Notlar',
    width: 150,
    editable: true,
    sortable:true
},
]

const rows=[]

function ReportTemplatesTab({value}) {

  const items = [
    { value:1, label: 'Docx' },
    { value:2, label: 'PDF'  },
    { value:3, label: 'Excel'}
  ]


  const [opentemplate, setOpenTemplate] = useState(false);

  const showTemplatePopup = (e) => {
      setOpenTemplate(true);
      
    }
  
    const hideTemplatePopup = (e) => {
      setOpenTemplate(false);
    }

    return (
        <>
        <TabContext value={value}>
        <TabPanel value={'4'}>
          <Box>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                variant="contained"
                startIcon={<RefreshIcon />}
                style={{
                   marginRight: '10px',
                   backgroundColor: 'purple',
                }}
              >
                YENİLE
              </Button>
              <Button
                variant="contained"
                startIcon={<AddIcon/>}
                onClick={showTemplatePopup}
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

            <ReportTemplatesPopup visible={opentemplate} onClose={hideTemplatePopup} items={items}/>
        </TabPanel>
        </TabContext>
        
        </>
    );
}

export default ReportTemplatesTab;