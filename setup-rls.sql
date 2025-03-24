-- Configuração de RLS para a tabela 'studies'

-- Primeiro, ative a RLS para a tabela
ALTER TABLE studies ENABLE ROW LEVEL SECURITY;

-- Em seguida, crie uma política que permite leitura para usuários anônimos
CREATE POLICY "Permitir leitura anônima para studies" 
ON studies FOR SELECT 
TO anon
USING (true);

-- Política para permitir inserção de novos estudos
CREATE POLICY "Permitir inserção anônima para studies" 
ON studies FOR INSERT 
TO anon
WITH CHECK (true);

-- Política para permitir atualização de estudos
CREATE POLICY "Permitir atualização anônima para studies" 
ON studies FOR UPDATE
TO anon
USING (true);

-- Política para permitir exclusão de estudos
CREATE POLICY "Permitir exclusão anônima para studies" 
ON studies FOR DELETE
TO anon
USING (true);

-- Configuração de RLS para a tabela 'users'

-- Primeiro, ative a RLS para a tabela
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Política para permitir leitura de usuários
CREATE POLICY "Permitir leitura anônima para users" 
ON users FOR SELECT 
TO anon
USING (true);

-- Política para permitir inserção de novos usuários
CREATE POLICY "Permitir inserção anônima para users" 
ON users FOR INSERT 
TO anon
WITH CHECK (true);

-- Configuração de RLS para a tabela 'timer_sessions'

-- Primeiro, ative a RLS para a tabela
ALTER TABLE timer_sessions ENABLE ROW LEVEL SECURITY;

-- Política para permitir leitura de sessões de timer
CREATE POLICY "Permitir leitura anônima para timer_sessions" 
ON timer_sessions FOR SELECT 
TO anon
USING (true);

-- Política para permitir inserção de novas sessões
CREATE POLICY "Permitir inserção anônima para timer_sessions" 
ON timer_sessions FOR INSERT 
TO anon
WITH CHECK (true);

-- Configuração de RLS para a tabela 'tags'

-- Primeiro, ative a RLS para a tabela
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;

-- Política para permitir leitura de tags
CREATE POLICY "Permitir leitura anônima para tags" 
ON tags FOR SELECT 
TO anon
USING (true);

-- Política para permitir inserção de novas tags
CREATE POLICY "Permitir inserção anônima para tags" 
ON tags FOR INSERT 
TO anon
WITH CHECK (true);

-- Configuração de RLS para a tabela 'timer_sessions_tags'

-- Primeiro, ative a RLS para a tabela
ALTER TABLE timer_sessions_tags ENABLE ROW LEVEL SECURITY;

-- Política para permitir leitura de relações timer_sessions_tags
CREATE POLICY "Permitir leitura anônima para timer_sessions_tags" 
ON timer_sessions_tags FOR SELECT 
TO anon
USING (true);

-- Política para permitir inserção de novas relações
CREATE POLICY "Permitir inserção anônima para timer_sessions_tags" 
ON timer_sessions_tags FOR INSERT 
TO anon
WITH CHECK (true); 