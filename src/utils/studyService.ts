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

// URL base da API - ajustada para funcionar tanto localmente quanto na Vercel
const API_BASE_URL = "";

// Serviço para interagir com as APIs de estudo
export const studyService = {
  // Obter todos os estudos
  async getAllStudies() {
    try {
      console.log("🔍 studyService: Iniciando busca de todos os estudos");
      const response = await fetch(`${API_BASE_URL}/api/studies`);
      console.log("🔍 studyService: Resposta da API:", response.status, response.statusText);
      if (!response.ok) {
        throw new Error("Falha ao buscar os estudos");
      }
      const data = await response.json();
      console.log("🔍 studyService: Estudos recebidos:", data.length);
      return data;
    } catch (error) {
      console.error("Erro ao buscar estudos:", error);
      throw error;
    }
  },

  // Obter um estudo específico por ID
  async getStudyById(id: string) {
    try {
      console.log(`🔍 studyService: Buscando estudo com ID ${id}`);
      const response = await fetch(`${API_BASE_URL}/api/studies/${id}`);
      console.log("🔍 studyService: Resposta da API:", response.status, response.statusText);
      if (!response.ok) {
        throw new Error("Falha ao buscar o estudo");
      }
      const data = await response.json();
      console.log("🔍 studyService: Estudo recebido:", data);
      return data;
    } catch (error) {
      console.error(`Erro ao buscar estudo com ID ${id}:`, error);
      throw error;
    }
  },

  // Criar um novo estudo
  async createStudy(studyData: NewStudy) {
    try {
      console.log("🔍 studyService: Criando novo estudo:", studyData);
      const response = await fetch(`${API_BASE_URL}/api/studies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studyData),
      });

      console.log("🔍 studyService: Resposta da API:", response.status, response.statusText);
      if (!response.ok) {
        throw new Error("Falha ao criar o estudo");
      }

      const data = await response.json();
      console.log("🔍 studyService: Estudo criado:", data);
      return data;
    } catch (error) {
      console.error("Erro ao criar estudo:", error);
      throw error;
    }
  },

  // Atualizar um estudo existente
  async updateStudy(id: string, studyData: UpdateStudy) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/studies/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
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
      const response = await fetch(`${API_BASE_URL}/api/studies/${id}`, {
        method: 'DELETE',
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