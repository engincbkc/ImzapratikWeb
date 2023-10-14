import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Popup from 'mycomponents/popup';

function UsersTabPopup({visible, onClose}) {
    return (
        <>
           <Popup visible={visible} onClose={onClose} title="Kullanıcı Formu" style={{ width: '50%', height: '80%' }}>

            <TextField 
            style={{
               marginTop:15,
            }}
            fullWidth 
            required label="Kullanıcı Adı" 
            />
            <FormControlLabel control={<Checkbox />} label="İmza Yetkisi Sahibi" />
            <TextField fullWidth label="Kimlik No" />

            <FormGroup row>
               <FormControlLabel control={<Checkbox />} label="Aktif" />
               <FormControlLabel control={<Checkbox />} label="Hesap Sorumlusu" />
               <FormControlLabel control={<Checkbox />} label="Müşteri Kullanıcısı" />
            </FormGroup>

            <FormControl fullWidth style={{marginBottom:8}}>
               <InputLabel>Proje</InputLabel>
               <Select label="project">
                  <MenuItem value={1}>Test Proje</MenuItem>
               </Select>
            </FormControl>

            <TextField fullWidth style={{marginBottom:8}} required label="E-Posta Adresi" />
            <TextField fullWidth style={{marginBottom:8}} label="Password" type="password" autoComplete="current-password" />

            <FormControl fullWidth style={{marginBottom:8}}>
               <InputLabel>Yetkiler</InputLabel>
               <Select label="yetki">
               </Select>
            </FormControl>

            </Popup>
        </>
    );
}

export default UsersTabPopup;