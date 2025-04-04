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

// URL base da API - ajustada para funcionar tanto localmente quanto na Vercel
const API_BASE_URL = '';

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
        console.log("🔍 Debug: Carregando estudos...");
        console.log("🔍 isAuthenticated:", isAuthenticated);
        console.log("🔍 demoMode:", demoMode);
        
        // Carregar dados do banco para todos os modos
        console.log("🔍 Carregando estudos do banco de dados");
        try {
          const dbStudies = await fetch(`${API_BASE_URL}/api/studies`).then(res => {
            console.log("🔍 Status da resposta:", res.status);
            if (!res.ok) throw new Error("Erro na resposta da API");
            return res.json();
          });
          console.log("🔍 Estudos carregados:", dbStudies);
          setStudies(dbStudies);
        } catch (error) {
          console.error("🔍 Erro ao carregar estudos do banco:", error);
          throw error;
        }
        
        setError(null);
      } catch (err) {
        console.error('Erro ao carregar estudos:', err);
        setError('Falha ao carregar os estudos. Por favor, tente novamente.');
      } finally {
        setIsLoading(false);
        console.log("🔍 Carregamento de estudos concluído");
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
      // Comportamento normal com persistência
      console.log(`🔍 Excluindo estudo com ID ${id}`);
      const response = await fetch(`${API_BASE_URL}/api/studies/${id}`, {
        method: 'DELETE',
      });
      console.log("🔍 Status da resposta de exclusão:", response.status);
      if (!response.ok) throw new Error("Erro ao excluir estudo");
      setStudies(prev => prev.filter(study => study.id !== id));
    } catch (err) {
      console.error('Erro ao excluir estudo:', err);
      setError('Falha ao excluir o estudo. Por favor, tente novamente.');
    }
  };

  const handleSaveStudy = async (study: StudyItem) => {
    try {
      // Sempre utilizar persistência
      if (editItem) {
        // Atualizar estudo existente
        const existingStudy = studies.find(s => s.id === study.id);
        if (existingStudy) {
          console.log(`🔍 Atualizando estudo com ID ${study.id}`);
          const response = await fetch(`${API_BASE_URL}/api/studies/${study.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              subject: study.subject
            }),
          });
          console.log("🔍 Status da resposta de atualização:", response.status);
          if (!response.ok) throw new Error("Erro ao atualizar estudo");
          const updatedStudy = await response.json();
          setStudies(prev => 
            prev.map(s => s.id === study.id ? updatedStudy : s)
          );
        }
      } else {
        // Adicionar novo estudo
        console.log("🔍 Criando novo estudo:", study.subject);
        const response = await fetch(`${API_BASE_URL}/api/studies`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            subject: study.subject,
            userId: user?.id || '83e5accb-00ea-4f44-a0d3-f45e2a2ed543'
          }),
        });
        console.log("🔍 Status da resposta de criação:", response.status);
        if (!response.ok) throw new Error("Erro ao criar estudo");
        const newStudy = await response.json();
        setStudies(prev => [...prev, newStudy]);
      }
    } catch (err) {
      console.error('Erro ao salvar estudo:', err);
      setError('Falha ao salvar o estudo. Por favor, tente novamente.');
    }
  };

  const handleUpdateStudyTimer = async (studyId: string, seconds: number, isActive: boolean, isPaused: boolean) => {
    try {
      // Comportamento normal com persistência
      console.log(`🔍 Atualizando timer do estudo com ID ${studyId}`);
      const response = await fetch(`${API_BASE_URL}/api/studies/${studyId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          seconds,
          isActive,
          isPaused
        }),
      });
      console.log("🔍 Status da resposta de atualização do timer:", response.status);
      if (!response.ok) throw new Error("Erro ao atualizar timer");
      const updatedStudy = await response.json();
      setStudies(prev => 
        prev.map(s => s.id === studyId ? updatedStudy : s)
      );
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
