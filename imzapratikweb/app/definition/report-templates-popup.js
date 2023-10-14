import Popup from "mycomponents/popup";
import { Box, TextField} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function ReportTemplatesPopup({visible, onClose, items}) {
    return (
        <>
            <Popup visible={visible} onClose={onClose} title={"Rapor Şablonu"}>
                <Box
                sx={{
                    marginTop:1,
                    marginBottom:2
                }}
                >
                <TextField fullWidth required label="Ad"/>

                <FormControl required fullWidth style={{marginBottom:8, marginTop:8}}>
                   <InputLabel>Belge Türü</InputLabel>
                   <Select label="document">
                       {items.map((item) => ( 
                            <MenuItem key={item.value} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
                   </Select>
                </FormControl>
                <FormControlLabel control={<Checkbox />} label="Aktif" />
                <TextField  fullWidth label="Notlar" />

                </Box>

            </Popup>
        </>
    );
}

export default ReportTemplatesPopup;