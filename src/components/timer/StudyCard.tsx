'use client';

import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  IconButton,
  Button,
} from '@mui/material';
import { 
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  RestartAlt as RestartIcon,
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';
import AnalogClock from './AnalogClock';
import { formatTime } from '@/utils/timeUtils';

interface StudyCardProps {
  id: string;
  subject: string;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}

const StudyCard: React.FC<StudyCardProps> = ({ id, subject, onDelete, onEdit }) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(true);
    setSeconds(0);
  };

  const handleEdit = () => {
    if (onEdit) onEdit(id);
  };

  const handleDelete = () => {
    if (onDelete) onDelete(id);
  };

  return (
    <Paper 
      sx={{ 
        width: '100%',
        height: '100%',
        p: 2,
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        alignItems: 'center'
      }}
    >
      {/* Cabeçalho e ícone de deletar */}
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          width: '100%',
          mb: 1
        }}
      >
        <Typography 
          variant="h6" 
          component="h3" 
          align="center"
          sx={{ 
            fontWeight: 'bold',
            flexGrow: 1
          }}
        >
          Estudando
        </Typography>
        
        <IconButton 
          size="small" 
          onClick={handleDelete}
          color="error"
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Nome da matéria */}
      <Box
        sx={{ 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2
        }}
      >
        <Typography 
          variant="body1"
          color="primary"
          sx={{ mr: 1 }}
        >
          {subject}
        </Typography>
        <IconButton 
          size="small" 
          onClick={handleEdit}
          color="primary"
        >
          <EditIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Relógio analógico */}
      <AnalogClock paused={isPaused} seconds={seconds} />

      {/* Tempo em formato digital */}
      <Typography 
        variant="h4" 
        align="center" 
        sx={{ 
          fontFamily: 'monospace', 
          letterSpacing: 1,
          mb: 2,
          fontWeight: 'medium',
          fontSize: '2rem',
          color: '#fff'
        }}
      >
        {formatTime(seconds)}
        <Typography 
          component="span" 
          variant="caption" 
          sx={{ 
            verticalAlign: 'super', 
            fontSize: '0.5rem',
            opacity: 0.7,
            ml: 0.5
          }}
        >
          00
        </Typography>
      </Typography>

      {/* Controles simplificados */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 'auto' }}>
        {isPaused ? (
          <Button 
            startIcon={<PlayIcon />} 
            onClick={handleStart}
            variant="contained"
            color="success"
            sx={{ 
              borderRadius: '20px',
              px: 2,
              flexGrow: 1,
              mr: 1
            }}
          >
            Iniciar
          </Button>
        ) : (
          <Button 
            startIcon={<PauseIcon />} 
            onClick={handlePause}
            variant="outlined"
            color="primary"
            sx={{ 
              borderRadius: '20px',
              px: 2,
              flexGrow: 1,
              mr: 1
            }}
          >
            Pausar
          </Button>
        )}
        
        <Button 
          startIcon={<RestartIcon />} 
          onClick={handleReset}
          variant="outlined"
          color="error"
          disabled={seconds === 0}
          sx={{ 
            borderRadius: '20px',
            px: 2
          }}
        >
          Zerar
        </Button>
      </Box>
    </Paper>
  );
};

export default StudyCard; 