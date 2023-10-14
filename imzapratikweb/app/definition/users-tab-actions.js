import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

const buttons=[
    {label:'Düzenle', onClick: null, icon: <CreateOutlinedIcon />},  
    {label:'Sil', onClick: null, icon: <DeleteIcon />}, 
]

function UsersTabActions() {
    return (
        <>
            {buttons.map((button,index)=>{
            return <Tooltip title={button.label}>
              <IconButton
            size="small"
            onClick={button.onClick}>
                {button.icon}
              </IconButton>
            </Tooltip> 
            })}
        </>
    );
}

export default UsersTabActions;