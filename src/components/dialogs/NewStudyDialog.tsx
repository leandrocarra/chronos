'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Box
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

// Usaremos apenas um tipo simplificado para a criação/edição de estudos
export interface StudyItem {
  id: string;
  subject: string;
}

interface NewStudyDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (study: StudyItem) => void;
  editItem?: StudyItem | null;
}

const NewStudyDialog: React.FC<NewStudyDialogProps> = ({ 
  open, 
  onClose, 
  onSave,
  editItem
}) => {
  const [subject, setSubject] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (editItem && open) {
      setSubject(editItem.subject);
      setError(false);
    } else if (open) {
      setSubject('');
      setError(false);
    }
  }, [editItem, open]);

  const handleSave = () => {
    if (!subject.trim()) {
      setError(true);
      return;
    }

    onSave({
      id: editItem?.id || crypto.randomUUID(),
      subject: subject.trim()
    });

    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle sx={{ pb: 1 }}>
        {editItem ? 'Editar Estudo' : 'Novo Estudo'}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent>
        <Box sx={{ pt: 1 }}>
          <TextField
            autoFocus
            margin="dense"
            label="O que você está estudando?"
            fullWidth
            variant="outlined"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              setError(false);
            }}
            error={error}
            helperText={error ? "Digite o assunto do estudo" : ""}
          />
        </Box>
      </DialogContent>
      
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} color="inherit">
          Cancelar
        </Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          {editItem ? 'Atualizar' : 'Adicionar'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewStudyDialog; 