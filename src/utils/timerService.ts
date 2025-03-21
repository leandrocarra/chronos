// Definir nossa própria interface TimerSession em vez de importar do Prisma
export interface TimerSession {
  id: string;
  title: string;
  description?: string | null;
  seconds: number;
  startedAt: Date;
  endedAt?: Date | null;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  tags?: { id: string; name: string }[];
}

// Tipo para um novo timer que será enviado ao servidor
export type NewTimerSession = {
  title: string;
  description?: string;
  seconds: number;
  userId: string;
  tags?: string[];
};

// Tipo para atualização de um timer
export type UpdateTimerSession = Partial<
  Omit<TimerSession, "id" | "createdAt" | "updatedAt" | "userId" | "tags">
> & {
  tags?: string[];
};

// Serviço para interagir com as APIs de timer
export const timerService = {
  // Obter todos os timers
  async getAllTimers() {
    try {
      const response = await fetch("/api/timers");
      if (!response.ok) {
        throw new Error("Falha ao buscar os timers");
      }
      return await response.json();
    } catch (error) {
      console.error("Erro ao buscar timers:", error);
      throw error;
    }
  },

  // Obter um timer específico por ID
  async getTimerById(id: string) {
    try {
      const response = await fetch(`/api/timers/${id}`);
      if (!response.ok) {
        throw new Error("Falha ao buscar o timer");
      }
      return await response.json();
    } catch (error) {
      console.error(`Erro ao buscar timer com ID ${id}:`, error);
      throw error;
    }
  },

  // Criar um novo timer
  async createTimer(timerData: NewTimerSession) {
    try {
      const response = await fetch("/api/timers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(timerData),
      });

      if (!response.ok) {
        throw new Error("Falha ao criar o timer");
      }

      return await response.json();
    } catch (error) {
      console.error("Erro ao criar timer:", error);
      throw error;
    }
  },

  // Atualizar um timer existente
  async updateTimer(id: string, timerData: UpdateTimerSession) {
    try {
      const response = await fetch(`/api/timers/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(timerData),
      });

      if (!response.ok) {
        throw new Error("Falha ao atualizar o timer");
      }

      return await response.json();
    } catch (error) {
      console.error(`Erro ao atualizar timer com ID ${id}:`, error);
      throw error;
    }
  },

  // Excluir um timer
  async deleteTimer(id: string) {
    try {
      const response = await fetch(`/api/timers/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Falha ao excluir o timer");
      }

      return await response.json();
    } catch (error) {
      console.error(`Erro ao excluir timer com ID ${id}:`, error);
      throw error;
    }
  },
}; 