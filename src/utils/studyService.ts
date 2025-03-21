// Interface para o modelo Study
export interface Study {
  id: string;
  subject: string;
  userId: string;
  seconds: number;
  isActive: boolean;
  isPaused: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Tipo para um novo estudo que será enviado ao servidor
export type NewStudy = {
  subject: string;
  userId: string;
};

// Tipo para atualização de um estudo
export type UpdateStudy = Partial<
  Omit<Study, "id" | "createdAt" | "updatedAt" | "userId">
>;

// Serviço para interagir com as APIs de estudo
export const studyService = {
  // Obter todos os estudos
  async getAllStudies() {
    try {
      const response = await fetch("/api/studies");
      if (!response.ok) {
        throw new Error("Falha ao buscar os estudos");
      }
      return await response.json();
    } catch (error) {
      console.error("Erro ao buscar estudos:", error);
      throw error;
    }
  },

  // Obter um estudo específico por ID
  async getStudyById(id: string) {
    try {
      const response = await fetch(`/api/studies/${id}`);
      if (!response.ok) {
        throw new Error("Falha ao buscar o estudo");
      }
      return await response.json();
    } catch (error) {
      console.error(`Erro ao buscar estudo com ID ${id}:`, error);
      throw error;
    }
  },

  // Criar um novo estudo
  async createStudy(studyData: NewStudy) {
    try {
      const response = await fetch("/api/studies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studyData),
      });

      if (!response.ok) {
        throw new Error("Falha ao criar o estudo");
      }

      return await response.json();
    } catch (error) {
      console.error("Erro ao criar estudo:", error);
      throw error;
    }
  },

  // Atualizar um estudo existente
  async updateStudy(id: string, studyData: UpdateStudy) {
    try {
      const response = await fetch(`/api/studies/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studyData),
      });

      if (!response.ok) {
        throw new Error("Falha ao atualizar o estudo");
      }

      return await response.json();
    } catch (error) {
      console.error(`Erro ao atualizar estudo com ID ${id}:`, error);
      throw error;
    }
  },

  // Excluir um estudo
  async deleteStudy(id: string) {
    try {
      const response = await fetch(`/api/studies/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Falha ao excluir o estudo");
      }

      return await response.json();
    } catch (error) {
      console.error(`Erro ao excluir estudo com ID ${id}:`, error);
      throw error;
    }
  },
}; 