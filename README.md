# 🕒 Chronos - Cronômetro de Estudos

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Material UI](https://img.shields.io/badge/Material_UI-6-blue?style=for-the-badge&logo=mui)](https://mui.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6-blue?style=for-the-badge&logo=prisma)](https://www.prisma.io/)

**Chronos** é um aplicativo web moderno desenvolvido para ajudar estudantes e profissionais a gerenciar seu tempo de estudo de forma eficiente e organizada.

![Chronos Screenshot](https://via.placeholder.com/800x400?text=Chronos+App+Screenshot)

## ✨ Funcionalidades

- ⏱️ **Cronômetro Preciso**: Controle o tempo de estudo com precisão
- 📝 **Registro de Assuntos**: Documente o que está estudando
- 📊 **Histórico de Sessões**: Visualize e acompanhe seu progresso
- 💾 **Persistência em Banco de Dados**: Seus dados são salvos no PostgreSQL
- 🔄 **Sincronização Automática**: O estado dos cronômetros é atualizado em tempo real
- 📱 **Responsivo**: Funciona em dispositivos móveis e desktop

## 🚀 Começando

### Pré-requisitos

- Node.js 18.0.0 ou superior
- npm ou yarn
- PostgreSQL 15 ou superior

### Instalação

1. Clone o repositório
   ```bash
   git clone https://github.com/seu-usuario/chronos.git
   cd chronos
   ```

2. Instale as dependências
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure o arquivo `.env` com as credenciais de banco de dados
   ```
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/chronos?schema=public"
   DIRECT_URL="postgresql://usuario:senha@localhost:5432/chronos?schema=public"
   ```

4. Execute as migrações do Prisma
   ```bash
   npx prisma migrate dev
   # ou
   npx prisma db push
   ```

5. Crie um usuário de teste (opcional)
   ```bash
   node add-test-user.js
   ```

6. Inicie o servidor de desenvolvimento
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

7. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🛠️ Tecnologias

- **[Next.js](https://nextjs.org/)**: Framework React para aplicações web
- **[Material UI](https://mui.com/)**: Biblioteca de componentes para interfaces modernas
- **[TypeScript](https://www.typescriptlang.org/)**: Superset JavaScript com tipagem estática
- **[PostgreSQL](https://www.postgresql.org/)**: Sistema de gerenciamento de banco de dados relacional
- **[Prisma](https://www.prisma.io/)**: ORM para acesso ao banco de dados
- **[Emotion](https://emotion.sh/)**: Biblioteca CSS-in-JS para estilização
- **[UUID](https://github.com/uuidjs/uuid)**: Geração de identificadores únicos

## 📱 Uso

1. **Adicionar um novo estudo**:
   - Clique em "Adicionar Estudo"
   - Digite o assunto que você está estudando e confirme

2. **Gerenciar o cronômetro**:
   - Clique em "Iniciar" para começar o cronômetro
   - Use "Pausar" para interromper temporariamente (o estado será salvo automaticamente)
   - Use "Zerar" para reiniciar o cronômetro

3. **Visualização e persistência**:
   - Todos os estudos são armazenados no banco de dados
   - O estado do cronômetro (tempo, status de pausa) é sincronizado automaticamente
   - Seus estudos estarão disponíveis mesmo depois de fechar e reabrir o navegador

## 🛡️ Banco de Dados

O Chronos utiliza um esquema de banco de dados PostgreSQL com os seguintes modelos:

- **User**: Armazena informações do usuário
- **Study**: Armazena os estudos e o estado atual do cronômetro
- **TimerSession**: Armazena sessões de estudo finalizadas
- **Tag**: Categorias para organizar as sessões de estudo

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Faça um fork do projeto
2. Crie sua branch de feature (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add some amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📧 Contato

Nome - [email@example.com](mailto:email@example.com)

Link do Projeto: [https://github.com/seu-usuario/chronos](https://github.com/seu-usuario/chronos)

---

⭐️ Desenvolvido com ❤️ para otimizar seu tempo de estudo
