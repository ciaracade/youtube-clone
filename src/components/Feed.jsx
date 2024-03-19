import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Stack, Typography} from '@mui/material';
import Sidebar from './Sidebar';

const Feed = () => {
  return (
    <Stack sx={{
      flexDirection: {sx: "column", md: "row"}
      }}
      >
    <Box sx={{ 
      height: { sx: 'auto', md: '92vh'}, 
      borderRight:'1px solid #3e3e3e',
      px: {sx: 0, md: '2'}
      }}
      >
      <Sidebar />


      <Typography className = "copyright"
      variant="body2"
      sx = {{ mt:1.5, color:'#fff'}}>
        Copyright 2024 Ciara Cade
      </Typography>
    </Box>
    <Box>
      <Typography>
        <span style={{ color: '#F3150'}}>videos</span>
      </Typography>
    </Box>
    </Stack>
  )
}

export default Feed