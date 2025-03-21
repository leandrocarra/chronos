'use client';

import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Paper, 
  Stack,
  TextField,
  InputAdornment
} from '@mui/material';
import { 
  PlayArrow as PlayIcon, 
  Pause as PauseIcon, 
  Stop as StopIcon,
  Edit as EditIcon,
  Save as SaveIcon
} from '@mui/icons-material';
import { formatTime } from '@/utils/timeUtils';

interface TimerProps {
  onSessionComplete: (duration: number, subject: string) => void;
}

const Timer: React.FC<TimerProps> = ({ onSessionComplete }) => {
  const [seconds, setSeconds] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [subject, setSubject] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [tempSubject, setTempSubject] = useState<string>('');

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    if (seconds > 0) {
      onSessionComplete(seconds, subject);
    }
    
    setIsActive(false);
    setSeconds(0);
  };

  const handleEditSubject = () => {
    setTempSubject(subject);
    setIsEditing(true);
  };

  const handleSaveSubject = () => {
    setSubject(tempSubject);
    setIsEditing(false);
  };

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 4, 
        borderRadius: 2,
        textAlign: 'center',
        maxWidth: 500,
        mx: 'auto',
        width: '100%'
      }}
    >
      <Typography 
        variant="h4" 
        component="h2" 
        color="primary" 
        gutterBottom
        fontWeight="bold"
      >
        Cronômetro
      </Typography>

      {isEditing ? (
        <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <TextField
            fullWidth
            label="O que você está estudando?"
            variant="outlined"
            value={tempSubject}
            onChange={(e) => setTempSubject(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button 
                    onClick={handleSaveSubject}
                    startIcon={<SaveIcon />}
                    variant="contained"
                    size="small"
                    disabled={!tempSubject.trim()}
                  >
                    Salvar
                  </Button>
                </InputAdornment>
              ),
            }}
            sx={{ maxWidth: 400 }}
          />
        </Box>
      ) : (
        <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {subject ? subject : 'Nenhum assunto definido'}
          </Typography>
          <Button 
            variant="outlined" 
            color="primary" 
            size="small" 
            startIcon={<EditIcon />}
            onClick={handleEditSubject}
            sx={{ ml: 2 }}
          >
            Editar
          </Button>
        </Box>
      )}

      <Box 
        sx={{ 
          py: 4, 
          backgroundColor: 'background.default', 
          borderRadius: 1, 
          mb: 3 
        }}
      >
        <Typography 
          variant="h1" 
          component="div" 
          sx={{ 
            fontFamily: 'monospace', 
            fontWeight: 700,
            fontSize: { xs: '3rem', sm: '4rem' },
          }}
        >
          {formatTime(seconds)}
        </Typography>
      </Box>
      
      <Stack 
        direction="row" 
        spacing={2} 
        justifyContent="center"
      >
        {!isActive ? (
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<PlayIcon />}
            onClick={handleStart}
            disabled={!subject}
            size="large"
          >
            Iniciar
          </Button>
        ) : (
          <Button 
            variant="outlined" 
            color="primary" 
            startIcon={<PauseIcon />}
            onClick={handlePause}
            size="large"
          >
            Pausar
          </Button>
        )}
        
        <Button 
          variant="outlined" 
          color="error" 
          startIcon={<StopIcon />}
          onClick={handleReset}
          disabled={seconds === 0}
          size="large"
        >
          Finalizar
        </Button>
      </Stack>
    </Paper>
  );
};

export default Timer; 