import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FolderIcon from '@mui/icons-material/Folder';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import {useState} from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import DocViewPopup from './docviewer-popup';
import Popup from '@/components/popup/index';

import MyDocViewer from '@/components/my-doc-viewer/index';



function FileGridRowActions(params, rowId, setRowId) {

const [visible,setVisible] = useState(false);
const [selectedDocs, setSelectedDocs] = useState([]);

    const assignUser = () => {
        console.log("Başka bir kullanıcıya ata butonuna tıklandı.");

    }
    const sendMail = () => {
        console.log("mail gönder butonuna tıklandı.")
    }

    const folderButtonClick =() =>{
        console.log("Folder butonuna tıklandı");
        setVisible(true);
       
    };
    const pdfButtonClick =() =>{
        console.log("PDF butonuna tıklandı");
    };
    const downloadButtonClick =() =>{
        console.log("Download butonuna tıklandı");
    };
    const createButtonClick =() =>{
        console.log("Create butonuna tıklandı");
    };
    const deleteButtonClick =() =>{
        console.log("Delete butonuna tıklandı");
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const options = [
        {label:'Bir Başka Kullanıcıya Ata', onClick: assignUser},
        {label:'E-Posta Gönder', onClick: sendMail},
    ];

  const buttons = [
    {label:'Kaynak Belgeyi Göster', onClick: folderButtonClick, icon: <FolderIcon />},  
    {label:'PDF Göster', onClick: pdfButtonClick, icon: <PictureAsPdfIcon />},  
    {label:'İmzalanmış Belgeyi İndir', onClick: downloadButtonClick, icon: <DownloadIcon />},  
    {label:'Düzenle', onClick: createButtonClick, icon: <CreateOutlinedIcon />},  
    {label:'Sil', onClick: deleteButtonClick, icon: <DeleteIcon />},  
  ]

const handleClose = () => {
  setAnchorEl(null);
};

    return (
        <>
           <Popup height={700} visible={visible} onClose={()=>setVisible(false)} width={700} nonTitle={true}>
              {/* <DocViewPopup files={selectedDocs}  />   */}
              <MyDocViewer file={selectedDocs[0]}/>
           </Popup>
          
    

        {buttons.map((button,index)=>{
        return <Tooltip title={button.label}>
            <IconButton
            size="small"
            onClick={button.onClick}>
                {button.icon}
            </IconButton>
        </Tooltip>
            
        })}
         <input
            type="file"
            accept=".*"
            multiple
            onChange={(el) =>
              el.target.files?.length &&
              setSelectedDocs(Array.from(el.target.files))
        }
      />
        <Tooltip title="Diğer">
        <IconButton onClick={handleClick} >
           <MenuIcon />
        </IconButton>
        </Tooltip>

        <Menu
           anchorEl={anchorEl}
           open={open}
           onClose={handleClose}
        >
        {options.map((item,index) => (

          <MenuItem key = {`${item.label} ${index}`} onClick={item.onClick}>
            {item.label}
          </MenuItem>
        ))}
        </Menu>
        </>
    );
}

export default FileGridRowActions;