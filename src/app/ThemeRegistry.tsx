'use client';

import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect, useMemo } from 'react';
import { useMediaQuery } from '@mui/material';
import { blue, lightBlue, indigo, grey } from '@mui/material/colors';

// Função auxiliar para criar o cache de emotion
const createEmotionCache = () => {
  return createCache({ key: 'css' });
};

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  // Detectar preferência de tema do sistema
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light');

  // Atualizar o modo quando a preferência do sistema mudar
  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  // Criar tema baseado no modo atual
  const theme = useMemo(() => 
    createTheme({
      palette: {
        mode,
        primary: {
          main: mode === 'dark' ? lightBlue[400] : blue[600],
          light: mode === 'dark' ? lightBlue[300] : blue[400],
          dark: mode === 'dark' ? lightBlue[500] : blue[800],
          contrastText: mode === 'dark' ? '#000000' : '#ffffff',
        },
        secondary: {
          main: mode === 'dark' ? indigo[300] : indigo[500],
          contrastText: mode === 'dark' ? '#000000' : '#ffffff',
        },
        background: {
          // Fundo PRETO no modo escuro, BRANCO no modo claro para máximo contraste
          default: mode === 'dark' ? '#000000' : '#ffffff',
          // Papel com contraste maior contra o fundo
          paper: mode === 'dark' ? '#121212' : '#f5f5f5',
        },
        text: {
          primary: mode === 'dark' ? '#ffffff' : '#121212',
          secondary: mode === 'dark' ? '#aaaaaa' : '#505050',
        },
        divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.12)',
        action: {
          active: mode === 'dark' ? '#ffffff' : '#000000',
          hover: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.04)',
          selected: mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.08)',
        },
      },
      typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
          fontSize: '2.5rem',
          fontWeight: 700,
        },
        h2: {
          fontSize: '2rem',
          fontWeight: 600,
        },
        h3: {
          fontSize: '1.5rem',
          fontWeight: 600,
        },
        button: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 8,
              fontWeight: 600,
            },
            contained: {
              boxShadow: 'none',
            },
            containedPrimary: {
              '&:hover': {
                boxShadow: mode === 'dark' 
                  ? '0 0 12px rgba(144, 202, 249, 0.5)' 
                  : '0 0 8px rgba(30, 136, 229, 0.6)',
              }
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              borderRadius: 8,
              // Adicionar uma sombra que destaca contra o fundo preto
              boxShadow: mode === 'dark' 
                ? '0px 3px 10px rgba(255, 255, 255, 0.15)' 
                : '0px 3px 8px rgba(0, 0, 0, 0.1)',
            },
          },
        },
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundColor: mode === 'dark' ? '#121212' : blue[700],
              // Adicionar uma borda brilhante na AppBar no modo escuro
              borderBottom: mode === 'dark' 
                ? '1px solid rgba(255, 255, 255, 0.12)' 
                : 'none',
              boxShadow: mode === 'dark' 
                ? '0px 2px 8px rgba(0, 0, 0, 0.5)' 
                : '0px 2px 4px rgba(0, 0, 0, 0.2)',
            },
          },
        },
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              scrollbarColor: mode === 'dark' ? '#555555 #111111' : '#959595 #f5f5f5',
              '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                backgroundColor: mode === 'dark' ? '#111111' : '#f5f5f5',
                width: 8,
              },
              '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                borderRadius: 8,
                backgroundColor: mode === 'dark' ? '#555555' : '#959595',
                minHeight: 24,
              },
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.23)' : 'rgba(0, 0, 0, 0.23)',
                },
                '&:hover fieldset': {
                  borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
                },
              },
            },
          },
        },
      },
    }),
  [mode]);

  const [{ cache, flush }] = useState(() => {
    const cache = createEmotionCache();
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = '';
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
} 