"use client"
import React from 'react'
import Grid from "@mui/material/Grid";
import FileGrid from '@/components/filegrid/index';
function MyReportsPage() {
  return (
    <>
    
      {/* Page title */}
     

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>

        <FileGrid/>
        
      </Grid>
      
    </>
  );
}

export default MyReportsPage