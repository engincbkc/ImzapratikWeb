import React, { useEffect, useState, useRef } from 'react';
import { Button, IconButton, Menu, MenuItem, Stack } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const FileGridToolbar = ({ items }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const toolbarRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(items);

  

  const buttonRefs = useRef([]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const calculateVisibleItems = () => {
      let totalButtonsWidth = 0;
      let visibleButtonCount = 0;
      if (!toolbarRef.current){
        visibleButtonCount = items.length;
        return;
      } 
      const toolbarWidth = windowWidth * .835;

      for (let i = 0; i < items.length; i++) {
        const buttonWidth = 266;
        totalButtonsWidth += buttonWidth;
        
        if (totalButtonsWidth < toolbarWidth) {
          visibleButtonCount++;
        }
      }

      setVisibleItems(items.slice(0, visibleButtonCount));
    };

    calculateVisibleItems();
  }, [windowWidth]);

  const showMenuButton = visibleItems.length < items.length;

  return (
    <Stack direction="row" height={30}>
      <div id="myToolBar" ref={toolbarRef}>
        {visibleItems.map((button, index) => (
          <Button
            key={"file-grid-toolbar-button-"+button.label + index.toString()}
            ref={(ref) => (buttonRefs.current[index] = ref)}
            variant="contained"
            disableElevation
            style={{ marginRight: '10px', textTransform: 'none',backgroundColor:'purple' }}
            startIcon={button.icon}
            onClick={button.onClick}
            
          >
            {button.label}
          </Button>
        ))}
      

      {showMenuButton && (
        <>
          <IconButton
            color="inherit"
            aria-label="menu"
            edge="end"
            onClick={handleMenuOpen}
          >
            <MoreVertIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {items
              .slice(visibleItems.length)
              .map((item, index) => (
                <MenuItem key={"dropdown-items-"+ index.toString()} onClick={item.onClick} style={{color:'black'}}>
                  <IconButton color="inherit" style={{ marginRight: '10px' }}>
                    {item.icon}
                  </IconButton>
                  {item.label}
                </MenuItem>
              ))}
          </Menu>
        </>
      )}
      </div>
    </Stack>
    
  );
};

export default FileGridToolbar;
