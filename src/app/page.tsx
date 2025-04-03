'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Container, CircularProgress, Button } from '@mui/material';
import Layout from '@/components/layout/Layout';
import StudyCard from '@/components/timer/StudyCard';
import AddStudyCard from '@/components/timer/AddStudyCard';
import NewStudyDialog, { StudyItem } from '@/components/dialogs/NewStudyDialog';
import { studyService, Study } from '@/utils/studyService';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [studies, setStudies] = useState<Study[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editItem, setEditItem] = useState<StudyItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user, isAuthenticated, loading: authLoading, demoMode } = useAuth();
  const router = useRouter();

  // Redirecionar para login se não estiver autenticado e não estiver em modo demo
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [authLoading, isAuthenticated, router]);

  // Carregar estudos do banco de dados ao iniciar
  useEffect(() => {
    async function loadStudies() {
      if (!isAuthenticated && !demoMode) return;
      
      try {
        setIsLoading(true);
        // Se estiver em modo demo, carregue dados de exemplo
        if (demoMode) {
          const currentDate = new Date();
          const demoStudies: Study[] = [
            { 
              id: 'demo-1', 
              subject: 'Matemática (Demo)', 
              seconds: 0, 
              isActive: false, 
              isPaused: false, 
              userId: 'demo-user',
              createdAt: currentDate,
              updatedAt: currentDate
            },
            { 
              id: 'demo-2', 
              subject: 'Física (Demo)', 
              seconds: 0, 
              isActive: false, 
              isPaused: false, 
              userId: 'demo-user',
              createdAt: currentDate,
              updatedAt: currentDate
            },
            { 
              id: 'demo-3', 
              subject: 'Programação (Demo)', 
              seconds: 0, 
              isActive: false, 
              isPaused: false, 
              userId: 'demo-user',
              createdAt: currentDate,
              updatedAt: currentDate
            }
          ];
          setStudies(demoStudies);
        } else {
          // Se estiver autenticado, carregue do banco de dados
          const dbStudies = await studyService.getAllStudies();
          setStudies(dbStudies);
        }
        setError(null);
      } catch (err) {
        console.error('Erro ao carregar estudos:', err);
        setError('Falha ao carregar os estudos. Por favor, tente novamente.');
      } finally {
        setIsLoading(false);
      }
    }

    loadStudies();
  }, [isAuthenticated, demoMode]);

  const handleAddNewStudy = () => {
    setEditItem(null);
    setDialogOpen(true);
  };

  const handleEditStudy = (id: string) => {
    const study = studies.find(s => s.id === id);
    if (study) {
      setEditItem({
        id: study.id,
        subject: study.subject
      });
      setDialogOpen(true);
    }
  };

  const handleDeleteStudy = async (id: string) => {
    try {
      if (demoMode) {
        // Em modo demo, apenas remove do estado local
        setStudies(prev => prev.filter(study => study.id !== id));
      } else {
        // Comportamento normal com persistência
        await studyService.deleteStudy(id);
        setStudies(prev => prev.filter(study => study.id !== id));
      }
    } catch (err) {
      console.error('Erro ao excluir estudo:', err);
      setError('Falha ao excluir o estudo. Por favor, tente novamente.');
    }
  };

  const handleSaveStudy = async (study: StudyItem) => {
    try {
      if (demoMode) {
        // Em modo demo, apenas manipule o estado local
        if (editItem) {
          // Atualizar estudo existente
          setStudies(prev => 
            prev.map(s => s.id === study.id ? {...s, subject: study.subject} : s)
          );
        } else {
          // Adicionar novo estudo
          const currentDate = new Date();
          const newStudy: Study = {
            id: `demo-${Date.now()}`,
            subject: study.subject,
            seconds: 0,
            isActive: false,
            isPaused: false,
            userId: 'demo-user',
            createdAt: currentDate,
            updatedAt: currentDate
          };
          setStudies(prev => [...prev, newStudy]);
        }
      } else {
        // Comportamento normal com persistência
        if (editItem) {
          // Atualizar estudo existente
          const existingStudy = studies.find(s => s.id === study.id);
          if (existingStudy) {
            const updatedStudy = await studyService.updateStudy(study.id, {
              subject: study.subject
            });
            setStudies(prev => 
              prev.map(s => s.id === study.id ? updatedStudy : s)
            );
          }
        } else {
          // Adicionar novo estudo
          const newStudy = await studyService.createStudy({
            subject: study.subject,
            userId: user?.id || ''
          });
          setStudies(prev => [...prev, newStudy]);
        }
      }
    } catch (err) {
      console.error('Erro ao salvar estudo:', err);
      setError('Falha ao salvar o estudo. Por favor, tente novamente.');
    }
  };

  const handleUpdateStudyTimer = async (studyId: string, seconds: number, isActive: boolean, isPaused: boolean) => {
    try {
      if (demoMode) {
        // Em modo demo, apenas atualiza o estado local
        setStudies(prev => 
          prev.map(s => s.id === studyId ? {...s, seconds, isActive, isPaused} : s)
        );
      } else {
        // Comportamento normal com persistência
        const updatedStudy = await studyService.updateStudy(studyId, {
          seconds,
          isActive,
          isPaused
        });
        setStudies(prev => 
          prev.map(s => s.id === studyId ? updatedStudy : s)
        );
      }
    } catch (err) {
      console.error('Erro ao atualizar timer de estudo:', err);
    }
  };

  // Se estiver carregando a autenticação, mostre o indicador de carregamento
  if (authLoading) {
    return (
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  // Se não estiver autenticado e não estiver em modo demo, não renderize o conteúdo
  if (!isAuthenticated) {
    return null;
  }

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
          
          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
        </Box>

        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3}>
            {studies.map(study => (
              <Grid item xs={12} sm={6} md={4} key={study.id}>
                <StudyCard 
                  id={study.id}
                  subject={study.subject}
                  initialSeconds={study.seconds}
                  initialIsActive={study.isActive}
                  initialIsPaused={study.isPaused}
                  onEdit={handleEditStudy}
                  onDelete={handleDeleteStudy}
                  onTimerUpdate={handleUpdateStudyTimer}
                />
              </Grid>
            ))}

            <Grid item xs={12} sm={6} md={4}>
              <AddStudyCard onClick={handleAddNewStudy} />
            </Grid>
          </Grid>
        )}
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
