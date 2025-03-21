'use client';

/**
 * Formata o tempo em segundos para o formato HH:MM:SS
 */
export const formatTime = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

/**
 * Formata a duração em segundos para texto legível 
 */
export const formatDurationText = (totalSeconds: number): string => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  let text = '';
  
  if (hours > 0) {
    text += `${hours} hora${hours > 1 ? 's' : ''}`;
  }
  
  if (minutes > 0) {
    text += text ? ' e ' : '';
    text += `${minutes} minuto${minutes > 1 ? 's' : ''}`;
  }
  
  if (seconds > 0 && hours === 0) {
    text += text ? ' e ' : '';
    text += `${seconds} segundo${seconds > 1 ? 's' : ''}`;
  }
  
  return text || '0 segundos';
}; 