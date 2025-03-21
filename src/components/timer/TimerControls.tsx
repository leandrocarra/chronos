'use client';

import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Chip, IconButton, Stack, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import SaveIcon from '@mui/icons-material/Save';
import { timerService, NewTimerSession } from '@/utils/timerService';

interface TimerControlsProps {
  isRunning: boolean;
  isPaused: boolean;
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
  totalSeconds: number;
  title?: string;
}

const TimerControls: React.FC<TimerControlsProps> = ({
  isRunning,
  isPaused,
  onStart,
  onPause,
  onStop,
  totalSeconds,
  title: initialTitle = ""
}) => {
  // Estado para controlar o diálogo de salvar timer
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  
  // Estados para os campos do formulário
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Abrir diálogo para salvar o timer
  const handleSaveClick = () => {
    if (totalSeconds === 0) {
      setError("Não é possível salvar um timer zerado.");
      return;
    }
    setSaveDialogOpen(true);
  };

  // Fechar diálogo
  const handleClose = () => {
    setSaveDialogOpen(false);
    setError(null);
  };

  // Adicionar tag
  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  // Remover tag
  const handleDeleteTag = (tagToDelete: string) => {
    setTags(tags.filter(tag => tag !== tagToDelete));
  };

  // Salvar timer no banco de dados
  const handleSaveTimer = async () => {
    // Validação básica
    if (!title.trim()) {
      setError("O título é obrigatório.");
      return;
    }

    try {
      setIsSaving(true);
      setError(null);

      // Usuário temporário para demonstração
      // Em um app real, você obteria o ID do usuário logado
      const tempUserId = "temp-user-id";

      const timerData: NewTimerSession = {
        title: title.trim(),
        description: description.trim() || undefined,
        seconds: totalSeconds,
        userId: tempUserId,
        tags: tags.length > 0 ? tags : undefined
      };

      await timerService.createTimer(timerData);
      
      // Fechar diálogo e resetar estados
      handleClose();
      setTitle(initialTitle);
      setDescription("");
      setTags([]);
      
      // Opcional: Resetar o timer após salvar
      onStop();
      
    } catch (err) {
      console.error("Erro ao salvar timer:", err);
      setError("Falha ao salvar o timer. Tente novamente.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Controles principais do timer */}
      <Stack direction="row" spacing={2} justifyContent="center">
        {!isRunning ? (
          <Button 
            variant="contained" 
            color="primary" 
            onClick={onStart} 
            startIcon={<PlayArrowIcon />}
            sx={{ width: 120 }}
          >
            Iniciar
          </Button>
        ) : (
          <Button 
            variant="contained" 
            color={isPaused ? "primary" : "secondary"} 
            onClick={isPaused ? onStart : onPause} 
            startIcon={isPaused ? <PlayArrowIcon /> : <PauseIcon />}
            sx={{ width: 120 }}
          >
            {isPaused ? "Continuar" : "Pausar"}
          </Button>
        )}

        <Button 
          variant="outlined" 
          color="error" 
          onClick={onStop} 
          startIcon={<StopIcon />}
          disabled={!isRunning && totalSeconds === 0}
          sx={{ width: 120 }}
        >
          Zerar
        </Button>

        <Button 
          variant="outlined" 
          color="info" 
          onClick={handleSaveClick} 
          startIcon={<SaveIcon />}
          disabled={totalSeconds === 0}
          sx={{ width: 120 }}
        >
          Salvar
        </Button>
      </Stack>

      {/* Diálogo para salvar o timer */}
      <Dialog open={saveDialogOpen} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Salvar Sessão de Estudo</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="Título"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              error={!!error && !title.trim()}
              variant="outlined"
            />
            
            <TextField
              label="Descrição (opcional)"
              fullWidth
              multiline
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              variant="outlined"
            />
            
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1 }}>
                <TextField
                  label="Tags"
                  size="small"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                  variant="outlined"
                  sx={{ flexGrow: 1 }}
                />
                <Button onClick={handleAddTag} variant="contained" size="small">
                  Adicionar
                </Button>
              </Box>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    onDelete={() => handleDeleteTag(tag)}
                    color="primary"
                    variant="outlined"
                    size="small"
                  />
                ))}
              </Box>
            </Box>
            
            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit" disabled={isSaving}>
            Cancelar
          </Button>
          <Button 
            onClick={handleSaveTimer} 
            color="primary" 
            variant="contained"
            disabled={isSaving}
          >
            {isSaving ? "Salvando..." : "Salvar"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TimerControls; 