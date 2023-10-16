import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Toolbar, Typography, Tooltip } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import PrintIcon from '@mui/icons-material/Print';

function PdfToolbar({
  scale,
  onZoomIn,
  onZoomOut,
  onPreviousPage,
  onNextPage,
  onDownloadPdf,
  onFullscreen,
  onPrint,
  currentPage,
  numPages,
}) {
  const formattedScale = Math.round(scale * 100);

  return (
    <Toolbar
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#808080',
        padding: '10px',
        boxShadow: '2',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          onClick={null}
          style={{ color: '#ffffff' }}
        >
          <MenuIcon />
        </IconButton>

        <Tooltip title="Önceki Sayfa">
          <IconButton
            onClick={onPreviousPage}
            disabled={currentPage === 1}
            style={{ color: '#ffffff' }}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </Tooltip>

        <Typography sx={{ margin: '0 10px', color: '#ffffff' }}>
          {currentPage} / {numPages}
        </Typography>

        <Tooltip title="Sonraki Sayfa">
          <IconButton
            onClick={onNextPage}
            disabled={currentPage === numPages}
            style={{ color: '#ffffff' }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Tooltip>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title="Uzaklaştır">
          <IconButton onClick={onZoomOut} style={{ color: '#ffffff' }}>
            <ZoomOutIcon />
          </IconButton>
        </Tooltip>

        <Typography variant="subtitle1" sx={{ margin: '0 10px', color: '#ffffff' }}>
          {formattedScale}%
        </Typography>

        <Tooltip title="Yakınlaştır">
          <IconButton onClick={onZoomIn} style={{ color: '#ffffff' }}>
            <ZoomInIcon />
          </IconButton>
        </Tooltip>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FormControlLabel
          style={{ color: '#ffffff' }}
          control={<Checkbox style={{ color: '#ffffff' }} />}
          label="İmzalandı"
        />

        <Tooltip title="İndir">
          <IconButton onClick={onDownloadPdf} style={{ color: '#ffffff' }}>
            <SaveAltIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Yazdır">
          <IconButton onClick={onPrint} style={{ color: '#ffffff' }}>
            <PrintIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Toolbar>
  );
}

export default PdfToolbar;
