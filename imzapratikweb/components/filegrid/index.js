import { DataGrid } from "@mui/x-data-grid";

import FileGridToolbar from "./filegrid-toolbar";

const { Box, Typography, Hidden, Button, Stack } = require("@mui/material");
import {Download, Email, Send, Refresh, Add } from '@mui/icons-material';
import BrushIcon from '@mui/icons-material/Brush';
import AddDocumentPopup from "./add-document-popup";

import {useState} from 'react';
import FileGridRowActions from "./filegrid-actions";
import SignitPopup from "./signit-popup";
import SendDocumentPopup from "./send-document-eposta";
import SendDocumentKep from "./send-document-kep";

const docs = [
  { uri: '../../docs/sample.pdf' },
]



const columns =[
      {
        field: 'reportName',
        headerName: 'Rapor Adı',
        width: 150,
        // renderCell: (params) => <Avatar src={params.row.photoURL} />,
        sortable: true,
        filterable: true,
      },
      { field: 'creater', headerName: 'Oluşturan', width: 170 },
      {
        field: 'createdAt',
        headerName: 'Oluşturulma Tarihi',
        width: 100,
        renderCell: (params) => new Date().toLocaleDateString(),
      },
      {
        field: 'isSigned',
        headerName: 'İmzalandı',
        width: 70,
        type: 'boolean',
        editable: true,
        sortable:true
      },
      {
        field: 'document',
        headerName: 'Belge',
        width: 50,
        // renderCell: (params) => <Avatar src={params.row.photoURL} />,
        sortable: true,
        filterable: true,
      },
      {
        field: 'project',
        headerName: 'Proje',
        width: 100,
        type: 'singleSelect',
        valueOptions: ['Test Proje1', 'Test Proje2', 'TestProje3'],
        editable: true,
      },
      {
        field: 'assignPerson',
        headerName: 'Atanan Kişi',
        width: 70,
        type: 'singleSelect',
        valueOptions: ['Ahmet', 'Engin', 'İlhami'],
        editable: true,
      },
      {
        field: 'description',
        headerName: 'Notlar',
        width: 100,
        editable: true,
      },
      
      {
        field: 'tags',
        headerName: 'Etiketler',
        width: 120,
        //chiparray rendercell ile eklenecek
        editable: true,
      },
     
    
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        width:500,
        renderCell: (params) => (
          <FileGridRowActions  />
        ),
      },
    ]
    
const row = [
    {reportName:"2asd",id:2,isSigned:false},
    {reportName:"2asd",id:6,isSigned:false},
    {reportName:"2asd",id:7,isSigned:false},
    {reportName:"2asd",id:8,isSigned:false},
    {reportName:"2asd",id:9,isSigned:true}
]

function FileGrid() {

  const [openAddDocument, setOpenAddDocument] = useState(false);
  const [openSignit, setOpenSignit] = useState(false);
  const [openSendDocument, setOpenSendDocument] = useState(false);
  const [openSendDocumentKep, setOpenSendDocumentKep ] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [rowId, setRowId] = useState(null);
  const [selectedDocs, setSelectedDocs] = useState([]);


  const showAddDocumentPopup = (e) => {
    setOpenAddDocument(true);
    
  }

  const hideAddDocumentPopup = (e) => {
    setOpenAddDocument(false);
  } 

  const showSignitPopup=(e)=>{
    setOpenSignit(true);
  }

  const hideSignitPopup=(e)=>{
    setOpenSignit(false);
  }

  const showsendDocument = (e) =>{
    setOpenSendDocument(true);
  }

  const hidesendDocument = (e) =>{
    setOpenSendDocument(false);
  }

  const showsendDocumentKep = (e) =>{
    setOpenSendDocumentKep(true);
  }

  const hidesendDocumentKep = (e) =>{
    setOpenSendDocumentKep(false);
  }

  function handleRefresh() {
    console.log("yenile");
    setRefreshing(true);


  
    setRefreshing(false);
  }

  
const buttonArgs = [
  { label: 'İMZALA', icon: <BrushIcon />,onClick:showSignitPopup },
  { label: 'İMZALANMIŞ BELGELERİ İNDİR', icon: <Download />,onClick:null },
  { label: 'BELGELERİ E POSTA İLE GÖNDER', icon: <Email /> ,onClick:showsendDocument},
  { label: 'BELGELERİ KEP İLE GÖNDER', icon: <Send /> ,onClick:showsendDocumentKep},
  { label: 'YENİLE', icon: <Refresh /> ,onClick:handleRefresh, disabled:refreshing },
  { label: 'BELGE YÜKLE', icon: <Add />, onClick:showAddDocumentPopup},
];
    return (
        <Box
            sx={{
                height: 700,
                width: '100%',
                marginBottom:15,
                fontWeight:900,
                color:"red"
            }}
        >
            <div id = "file-manager-div"
                style ={{
                    width:'100%',
                    display:'inline-flex',
                    justifyContent:'space-between'
                }}
            >
                <Typography
                        variant="h4"
                        component="h4"
                        sx={{ textAlign: 'center', mt: 3, mb: 3, display:'inline-block'}}
                    >
                    Raporlarım
                </Typography>
                <FileGridToolbar items={buttonArgs}/>   
            </div>

       
        <DataGrid
            className="myFileGrid"
            checkboxSelection
            disableSelectionOnClick
            editMode="row"
            columns={columns}
            rows={row}
            getRowId={(row) => row.id}
            rowsPerPageOptions={[5, 10, 20]}
            pageSize={70}
            // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 5,
            bottom: params.isLastVisible ? 0 : 5,
            })}
            sx={{
                marginTop:1,
                boxShadow: 2,
                border: 2,
                borderColor: 'primary.light',
                '& .MuiDataGrid-row.Mui-selected': {
                },
                '& .MuiDataGrid-row:hover': {
                color: 'black',
                backgroundColor:'#C0C0C0',
                fontSize:'110%',
                color:'black',
                cursor:"pointer",

                },
                '& .MuiDataGrid-row:hover': {
                    color: 'black',
                    fontSize: '110%',
                    cursor: 'pointer',
                    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.3)', // Gölgelendirme efekti
                },
                color:'black',
                fontSize:16,

                backgroundColor:'white',
                overflow:'hidden'
            }}
            // onCellEditCommit={(params) => setRowId(params.id)}
        />

        <AddDocumentPopup visible={openAddDocument} onClose={hideAddDocumentPopup} />
        <SignitPopup visible={openSignit} onClose={hideSignitPopup} />
        <SendDocumentPopup visible={openSendDocument} onClose={hidesendDocument} />
        <SendDocumentKep visible={openSendDocumentKep} onClose={hidesendDocumentKep} />
       
    </Box>
    );
}
export default FileGrid;