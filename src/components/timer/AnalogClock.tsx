'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

interface AnalogClockProps {
  paused: boolean;
  seconds?: number;
}

const AnalogClock: React.FC<AnalogClockProps> = ({ paused, seconds = 0 }) => {
  // Calcular rotações dos ponteiros
  const secondRotation = (seconds % 60) * 6; // 6 graus por segundo (360/60)
  const minuteRotation = ((seconds / 60) % 60) * 6; // 6 graus por minuto
  const hourRotation = ((seconds / 3600) % 12) * 30; // 30 graus por hora (360/12)

  return (
    <Box
      sx={{
        position: 'relative',
        width: 280,
        height: 280,
        borderRadius: '50%',
        backgroundColor: '#202020',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        mt: 2,
        mb: 3,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '160%',
          height: '160%',
          transform: 'translate(-50%, -50%)',
          background: 'repeating-conic-gradient(rgba(255,255,255,0.07) 0deg, rgba(255,255,255,0) 2deg, rgba(255,255,255,0) 5deg)',
          zIndex: 0,
          opacity: 0.8
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          width: 10,
          height: 10,
          borderRadius: '50%',
          backgroundColor: '#888',
          zIndex: 6
        }
      }}
    >
      {/* Brilho central radial */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 50%, rgba(0,0,0,0) 70%)',
          zIndex: 1
        }}
      />
      
      {/* Números das horas - corrigidos */}
      {[...Array(12)].map((_, i) => {
        const hour = i === 0 ? 12 : i;
        const angle = i * 30;
        const radians = (angle - 90) * (Math.PI / 180);
        const x = 120 * Math.cos(radians);
        const y = 120 * Math.sin(radians);
        
        return (
          <Typography
            key={i}
            variant="body2"
            component="div"
            sx={{
              position: 'absolute',
              width: 30,
              height: 30,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${x}px)`,
              transform: 'translate(-50%, -50%)',
              color: '#ffffff',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              textAlign: 'center',
              zIndex: 2,
              textShadow: '0px 0px 4px rgba(0,0,0,0.5)'
            }}
          >
            {hour}
          </Typography>
        );
      })}

      {/* Marcações dos minutos */}
      {[...Array(60)].map((_, i) => 
        i % 5 !== 0 && (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              width: '1px',
              height: '8px',
              backgroundColor: 'rgba(255,255,255,0.25)',
              top: '10px',
              left: 'calc(50% - 0.5px)',
              transformOrigin: '0.5px 130px',
              transform: `rotate(${i * 6}deg)`,
              zIndex: 1
            }}
          />
        )
      )}

      {/* Padrão de Grade Triangular */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0.7,
          borderRadius: '50%',
          background: `repeating-conic-gradient(
            from 0deg,
            transparent 0deg 5deg,
            rgba(255, 255, 255, 0.03) 5deg 6deg
          )`,
          zIndex: 1
        }}
      />
      
      {/* Ponteiro das horas */}
      <Box
        sx={{
          position: 'absolute',
          height: '60px',
          width: '4px',
          backgroundColor: '#ffffff',
          transformOrigin: 'bottom center',
          borderRadius: '2px',
          transform: `translateX(-50%) rotate(${hourRotation}deg)`,
          bottom: '50%',
          left: '50%',
          zIndex: 3,
          transition: paused ? 'none' : 'transform 0.5s linear'
        }}
      />

      {/* Ponteiro dos minutos */}
      <Box
        sx={{
          position: 'absolute',
          height: '80px',
          width: '3px',
          backgroundColor: '#aaaaaa',
          transformOrigin: 'bottom center',
          borderRadius: '2px',
          transform: `translateX(-50%) rotate(${minuteRotation}deg)`,
          bottom: '50%',
          left: '50%',
          zIndex: 4,
          transition: paused ? 'none' : 'transform 0.3s linear'
        }}
      />
      
      {/* Ponteiro dos segundos (vermelho) */}
      <Box
        sx={{
          position: 'absolute',
          height: '100px',
          width: '2px',
          backgroundColor: '#f44336',
          transformOrigin: 'bottom center',
          borderRadius: '2px',
          transform: `translateX(-50%) rotate(${secondRotation}deg)`,
          bottom: '50%',
          left: '50%',
          zIndex: 5,
          transition: paused ? 'none' : 'transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44)',
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#f44336',
            bottom: '-3px',
            left: '-2px'
          }
        }}
      />

      {/* Círculo decorativo central */}
      <Box
        sx={{
          position: 'absolute',
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          border: '2px solid #888',
          backgroundColor: '#333',
          zIndex: 5
        }}
      />

      {/* Status do cronômetro */}
      {paused && (
        <Typography
          variant="subtitle2"
          sx={{
            position: 'absolute',
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: '3px 10px',
            borderRadius: '4px',
            color: '#aaa',
            fontWeight: 'bold',
            top: '60%',
            zIndex: 5,
            letterSpacing: '1px'
          }}
        >
          PAUSED
        </Typography>
      )}
    </Box>
  );
};

export default AnalogClock; 