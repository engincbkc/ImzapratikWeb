import Popup from '@/components/popup/index';
import Box from '@mui/material/Box';
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    {
        field: 'Name',
        headerName: 'Ad',
        editable: true,
        width: 400,
    },
];

const rows = [
    { id: 1, Name: 'afkj' },
];

function SignitPopup({ visible, onClose }) {
    return (
        <>
            <Popup visible={visible} onClose={onClose} title={"İmzala"} style={{ width: '50%', height: '80%' }}>
                <Box sx={{ 
                    marginTop:5,
                    width: '100%',
                    }}
                >
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        autoHeight
                        checkboxSelection
                        getRowId={(row) => row.id}
                        rowsPerPageOptions={[5, 10, 20]}
                        sx={{
                             boxShadow: 2,
                            '& .MuiDataGrid-row:hover': {
                            fontSize:'100%',
                            cursor:"pointer",
            
                            },
                            color:'black',
                            fontSize:15,
                        }}
                    />
                </Box>
            </Popup>
        </>
    );
}

export default SignitPopup;
