'use client';

import React from 'react';
import { 
  Card,
  CardContent,
  Typography, 
  Paper,
  IconButton
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

interface AddStudyCardProps {
  onClick: () => void;
}

const AddStudyCard: React.FC<AddStudyCardProps> = ({ onClick }) => {
  return (
    <Paper 
      sx={{ 
        width: '100%',
        height: '100%',
        p: 2,
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
          bgcolor: 'action.hover',
        }
      }}
      onClick={onClick}
    >
      <IconButton
        color="primary"
        sx={{
          width: 60,
          height: 60,
          mb: 2,
          '&:hover': {
            backgroundColor: 'primary.main',
            color: 'primary.contrastText'
          }
        }}
      >
        <AddIcon fontSize="large" />
      </IconButton>
      
      <Typography 
        variant="h6" 
        color="text.secondary"
        align="center"
      >
        Adicionar Estudo
      </Typography>
    </Paper>
  );
};

export default AddStudyCard; 