'use client';

import React from 'react';
import { 
  Paper, 
  Typography,
  List, 
  ListItem, 
  ListItemText, 
  Divider, 
  Box,
  Chip
} from '@mui/material';
import { TimerOutlined, SubjectOutlined } from '@mui/icons-material';
import { formatDurationText } from '@/utils/timeUtils';

export interface Session {
  id: string;
  subject: string;
  duration: number;
  date: Date;
}

interface SessionsListProps {
  sessions: Session[];
}

const SessionsList: React.FC<SessionsListProps> = ({ sessions }) => {
  if (sessions.length === 0) {
    return (
      <Paper elevation={1} sx={{ p: 3, mt: 3, borderRadius: 2 }}>
        <Typography variant="body1" textAlign="center" color="text.secondary">
          Nenhuma sessão de estudo registrada ainda.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={1} sx={{ mt: 3, borderRadius: 2 }}>
      <Box sx={{ p: 2, pb: 0 }}>
        <Typography variant="h6" component="h3" fontWeight="600">
          Histórico de sessões
        </Typography>
      </Box>
      <List>
        {sessions.map((session, index) => (
          <React.Fragment key={session.id}>
            {index > 0 && <Divider component="li" />}
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={
                  <Box display="flex" alignItems="center">
                    <SubjectOutlined fontSize="small" color="primary" sx={{ mr: 1 }} />
                    {session.subject}
                  </Box>
                }
                secondary={
                  <Box mt={1}>
                    <Box display="flex" alignItems="center" mb={1}>
                      <TimerOutlined fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                      >
                        {formatDurationText(session.duration)}
                      </Typography>
                    </Box>
                    <Chip
                      label={new Date(session.date).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                      size="small"
                      variant="outlined"
                    />
                  </Box>
                }
              />
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default SessionsList; 