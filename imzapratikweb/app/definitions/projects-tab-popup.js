
import Checkbox from '@mui/material/Checkbox';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Popup from '@/components/popup/index';
import { Box, FormControlLabel} from '@mui/material';


const datePickerContainerStyle = {
  marginTop:10,
  color:'red',  
}


function ProjectsTabPopup({visible, onClose}) {

  const [value, setValue] = React.useState(null);
    return (
        <>
            <Popup visible={visible} onClose={onClose} title="Proje">
                <Box 
                sx={{
                  marginTop: 1,
                  marginBottom: 2,
                }}>
                <TextField fullWidth required label="Ad" />
                <FormControlLabel control={<Checkbox />} label="Aktif"/>

                <FormControl fullWidth style={{marginBottom:8}}>
                  <InputLabel>Sorumlu</InputLabel>
                  <Select label="responsible">
                  </Select>
                  <LocalizationProvider dateAdapter={AdapterDateFns} style={{color:'red'}} >
                    <div
                    style={datePickerContainerStyle}
                    >
                    <DatePicker
                      style={{red:'color'}}
                      label="Başlama Tarihi"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => <TextField style={{color:'red'}}{...params} />}
                      autoFocus={true} // <===========
                    />
                    </div>
                  </LocalizationProvider>
                   
                
                  </FormControl>

                  <TextField fullWidth label="Notlar" />
                </Box>

            </Popup>
            

        </>
    );
}

export default ProjectsTabPopup;