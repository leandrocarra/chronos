'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Layout from '@/components/layout/Layout';
import Timer from '@/components/timer/Timer';
import SessionsList, { Session } from '@/components/sessions/SessionsList';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [sessions, setSessions] = useState<Session[]>([]);

  // Carregar sessões do localStorage ao iniciar
  useEffect(() => {
    const savedSessions = localStorage.getItem('chronos-sessions');
    if (savedSessions) {
      const parsedSessions = JSON.parse(savedSessions);
      // Converter strings de data para objetos Date
      const formattedSessions = parsedSessions.map((session: any) => ({
        ...session,
        date: new Date(session.date)
      }));
      setSessions(formattedSessions);
    }
  }, []);

  // Salvar sessões no localStorage quando mudar
  useEffect(() => {
    if (sessions.length > 0) {
      localStorage.setItem('chronos-sessions', JSON.stringify(sessions));
    }
  }, [sessions]);

  const handleSessionComplete = (duration: number, subject: string) => {
    if (duration <= 0 || !subject.trim()) return;
    
    const newSession: Session = {
      id: uuidv4(),
      subject: subject.trim(),
      duration,
      date: new Date()
    };
    
    setSessions(prevSessions => [newSession, ...prevSessions]);
  };

  return (
    <Layout>
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          textAlign="center" 
          fontWeight="bold"
          color="primary"
          sx={{ mb: 1 }}
        >
          Cronômetro de Estudos
        </Typography>
        <Typography 
          variant="subtitle1" 
          component="p" 
          textAlign="center" 
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Registre o tempo dedicado aos seus estudos
        </Typography>
      </Box>

      <Timer onSessionComplete={handleSessionComplete} />
      
      <SessionsList sessions={sessions} />
    </Layout>
  );
}
