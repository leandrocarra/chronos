-- Politicas RLS para usuários autenticados

-- Configuração para a tabela 'studies'
ALTER TABLE studies ENABLE ROW LEVEL SECURITY;

-- Política para permitir usuários lerem apenas seus próprios estudos
CREATE POLICY "Usuários podem ler seus próprios estudos" 
ON studies FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- Política para permitir usuários criarem seus próprios estudos
CREATE POLICY "Usuários podem criar seus próprios estudos" 
ON studies FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Política para permitir usuários atualizarem seus próprios estudos
CREATE POLICY "Usuários podem atualizar seus próprios estudos" 
ON studies FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

-- Política para permitir usuários excluírem seus próprios estudos
CREATE POLICY "Usuários podem excluir seus próprios estudos" 
ON studies FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Configuração para a tabela 'timer_sessions'
ALTER TABLE timer_sessions ENABLE ROW LEVEL SECURITY;

-- Política para permitir usuários lerem apenas suas próprias sessões
CREATE POLICY "Usuários podem ler suas próprias sessões" 
ON timer_sessions FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- Política para permitir usuários criarem suas próprias sessões
CREATE POLICY "Usuários podem criar suas próprias sessões" 
ON timer_sessions FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Política para permitir usuários atualizarem suas próprias sessões
CREATE POLICY "Usuários podem atualizar suas próprias sessões" 
ON timer_sessions FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

-- Política para permitir usuários excluírem suas próprias sessões
CREATE POLICY "Usuários podem excluir suas próprias sessões" 
ON timer_sessions FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Configuração para a tabela 'tags'
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;

-- Permitir leitura de tags para todos os usuários autenticados
CREATE POLICY "Usuários autenticados podem ler todas as tags" 
ON tags FOR SELECT 
TO authenticated
USING (true);

-- Permitir criação de tags para usuários autenticados
CREATE POLICY "Usuários autenticados podem criar tags" 
ON tags FOR INSERT 
TO authenticated
WITH CHECK (true);

-- Política para relação entre timer_sessions e tags
ALTER TABLE timer_sessions_tags ENABLE ROW LEVEL SECURITY;

-- Permitir usuários autenticados verem associações de tags de suas próprias sessões
CREATE POLICY "Usuários podem ver associações de tags das suas sessões" 
ON timer_sessions_tags FOR SELECT 
TO authenticated
USING (EXISTS (
  SELECT 1 FROM timer_sessions
  WHERE timer_sessions.id = timer_session_id
  AND timer_sessions.user_id = auth.uid()
));

-- Permitir usuários autenticados criarem associações de tags para suas próprias sessões
CREATE POLICY "Usuários podem criar associações de tags para suas sessões" 
ON timer_sessions_tags FOR INSERT 
TO authenticated
WITH CHECK (EXISTS (
  SELECT 1 FROM timer_sessions
  WHERE timer_sessions.id = timer_session_id
  AND timer_sessions.user_id = auth.uid()
));

-- Permitir usuários excluírem associações de tags para suas próprias sessões
CREATE POLICY "Usuários podem excluir associações de tags das suas sessões" 
ON timer_sessions_tags FOR DELETE 
TO authenticated
USING (EXISTS (
  SELECT 1 FROM timer_sessions
  WHERE timer_sessions.id = timer_session_id
  AND timer_sessions.user_id = auth.uid()
)); 