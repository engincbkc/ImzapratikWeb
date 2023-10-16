import Popup from '@/components/popup/index';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

function SendDocumentKep({ visible, onClose }) {
  return (
    <>
      <Popup visible={visible} onClose={onClose} title={"Kep Gönderme"} style={{ width: '50%', height: '80%' }}>
        <Box
          sx={{
            marginTop: 5,
            marginBottom: 4,
          }}
        >
          <TextField fullWidth label="Konu" rows={4} />
        </Box>

        <Box
          sx={{
            marginTop: 5,
            marginBottom: 4,
          }}
        >
          <TextField fullWidth multiline label="Mesaj" rows={4} />
        </Box>

        <FormGroup row>
          <FormControlLabel control={<Checkbox />} disabled label="Kaynak Belge" />
          <FormControlLabel control={<Checkbox />} disabled checked label="PDF" />
          <FormControlLabel control={<Checkbox />} disabled label="Signed Document" />
        </FormGroup>

        <Box sx={{ minWidth: 120, marginTop: 3 }}>
          <FormControl fullWidth>
            <InputLabel>Etiketler</InputLabel>
            <Select label="Etiketler">
              <MenuItem value={1}>Etiket1</MenuItem>
              <MenuItem value={2}>Etiket2</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Popup>
    </>
  );
}

export default SendDocumentKep;
