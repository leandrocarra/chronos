'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, useTheme } from '@mui/material';
import { Timer as TimerIcon } from '@mui/icons-material';

const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <IconButton edge="start" color="inherit" aria-label="logo" sx={{ mr: 1 }}>
            <TimerIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            component="h1" 
            sx={{ 
              fontWeight: 700,
              letterSpacing: '0.5px'
            }}
          >
            Chronos
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="subtitle2" color="inherit">
          Cronômetro de Estudos
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 