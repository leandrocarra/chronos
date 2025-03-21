'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Layout from '@/components/layout/Layout';
import StudyCard from '@/components/timer/StudyCard';
import AddStudyCard from '@/components/timer/AddStudyCard';
import NewStudyDialog, { StudyItem } from '@/components/dialogs/NewStudyDialog';

export default function Home() {
  const [studies, setStudies] = useState<StudyItem[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editItem, setEditItem] = useState<StudyItem | null>(null);

  // Carregar estudos do localStorage ao iniciar
  useEffect(() => {
    const savedStudies = localStorage.getItem('chronos-studies');
    if (savedStudies) {
      try {
        const parsedStudies = JSON.parse(savedStudies);
        setStudies(parsedStudies);
      } catch (error) {
        console.error('Erro ao carregar estudos:', error);
      }
    }
  }, []);

  // Salvar estudos no localStorage quando mudar
  useEffect(() => {
    if (studies.length > 0) {
      localStorage.setItem('chronos-studies', JSON.stringify(studies));
    }
  }, [studies]);

  const handleAddNewStudy = () => {
    setEditItem(null);
    setDialogOpen(true);
  };

  const handleEditStudy = (id: string) => {
    const study = studies.find(s => s.id === id);
    if (study) {
      setEditItem(study);
      setDialogOpen(true);
    }
  };

  const handleDeleteStudy = (id: string) => {
    setStudies(prev => prev.filter(study => study.id !== id));
  };

  const handleSaveStudy = (study: StudyItem) => {
    if (editItem) {
      // Atualizar estudo existente
      setStudies(prev => 
        prev.map(s => s.id === study.id ? study : s)
      );
    } else {
      // Adicionar novo estudo
      setStudies(prev => [...prev, study]);
    }
  };

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            component="h1" 
            color="primary"
            sx={{ 
              mb: 1,
              fontWeight: 'bold'
            }}
          >
            Cronômetros de Estudo
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
          >
            Controle o tempo dedicado a diferentes matérias
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {studies.map(study => (
            <Grid item xs={12} sm={6} md={4} key={study.id}>
              <StudyCard 
                id={study.id}
                subject={study.subject}
                onEdit={handleEditStudy}
                onDelete={handleDeleteStudy}
              />
            </Grid>
          ))}

          <Grid item xs={12} sm={6} md={4}>
            <AddStudyCard onClick={handleAddNewStudy} />
          </Grid>
        </Grid>
      </Container>

      <NewStudyDialog 
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSave={handleSaveStudy}
        editItem={editItem}
      />
    </Layout>
  );
}
