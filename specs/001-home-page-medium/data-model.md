# Data Model: Home Page Inspirada no Medium

## Entities

### Conteudo
- **Descricao**: Item exibido no feed principal.
- **Campos**:
  - slug (identificador derivado do nome do arquivo)
  - title
  - summary (resumo curto)
  - area
  - subarea
  - category
  - tags
  - author (opcional, quando existir)
  - coverImage (opcional, referencia em /public)
- **Relacionamentos**:
  - pode aparecer em Destaque
  - pode estar associado a Topicos (tags)
- **Regras de validacao**:
  - metadados obrigatorios devem existir
  - referencias em `prerequisites` e `next_topics` devem ser slugs validos

### Destaque
- **Descricao**: Conteudo curado exibido na coluna direita.
- **Campos**:
  - conteudoSlug (referencia para Conteudo)
  - label (ex.: "Staff Picks")
  - motivo (contexto curto)
- **Relacionamentos**:
  - referencia 1 Conteudo

### Topico
- **Descricao**: Categoria recomendada para exploracao.
- **Campos**:
  - name
  - slug
  - quantidadeItens (opcional)
- **Relacionamentos**:
  - associa-se a Conteudos por tags/area/subarea

### SecaoNavegacao
- **Descricao**: Item da sidebar.
- **Campos**:
  - label
  - iconName
  - targetPath
  - ordem
