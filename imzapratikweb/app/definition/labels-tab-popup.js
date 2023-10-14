import Popup from 'mycomponents/popup';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function LabelsTabPopup({visible, onClose}) {
    return (
        <>
        <Popup visible={visible} onClose={onClose} title={"Etiket"} >
            <TextField 
            style={{
                marginTop:20,
                marginBottom:20,
            }}
            required 
            fullWidth 
            label="Ad"
            />
            <FormControlLabel control={<Checkbox />} label="Aktif" />
        </Popup>
            
        </>
    );
}

export default LabelsTabPopup;