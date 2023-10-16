import Typography from "@mui/material/Typography";
import * as React from 'react';
import { IconButton, Paper } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function FileUploderDetailCard({ file, index, removeFile, style }) {
  const cardStyle = {
    display: 'inline-flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    border: '1px solid #ccc',
    borderRadius: 4,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    overflowWrap: 'break-word', // Uzun dosya isimlerinin aşağıdan devam etmesini sağlamak için overflow-wrap: break-word kullanılıyor
    wordBreak: 'break-word',
    ...style
  };

  const fileNameStyle = {
    color: '#7b68ee',
    fontWeight: 'bold',
    display:'inline-flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom: 4,
    marginRight: 1,
    flex: 1, // Dosya isminin genişliği esnek olması için flex: 1 kullanılıyor
    overflow: 'hidden', // Uzun dosya isimlerini gizlemek için overflow: hidden kullanılıyor
    whiteSpace: 'nowrap', // Dosya isminin tek bir satırda kalmasını sağlamak için white-space: nowrap kullanılıyor
    textOverflow: 'ellipsis' // Uzun dosya isimlerinin sonunda üç nokta (...) göstermek için text-overflow: ellipsis kullanılıyor
  };

  const title = file?.name?.split(".")[0]

  const fileInfoStyle = {
    color: '#666',
    fontSize: 12,
    marginRight: 10
  };
  

  return (
    <Paper key={index} elevation={2} style={cardStyle}>
      <Typography variant="body1" style={fileNameStyle} title={file.name}>
      {title}

      <IconButton onClick={() => removeFile(index)} style={{color:'red'}}>
        <CloseIcon />
      </IconButton>
        
      </Typography>
      <div>
      <Typography variant="body2" style={fileInfoStyle}>{file.name}</Typography>
        <Typography variant="body2" style={fileInfoStyle}>{file.size} KB</Typography>
      </div>
     
    </Paper>
  );
}

export default FileUploderDetailCard;
