# Research: Home Page Inspirada no Medium

## Decision 1: Layout em tres colunas com topbar fixa
**Rationale**: A referencia indica hierarquia clara: navegacao lateral para
orientacao, feed central como foco e coluna direita para curadoria e topicos.
**Alternatives considered**: Layout em duas colunas (sem coluna direita) reduziria
curadoria e pontos de descoberta; grid de cards reduziria a leitura sequencial.

## Decision 2: Feed central com cards de conteudo informativos
**Rationale**: Cards com titulo, resumo curto e contexto permitem escaneabilidade
rapida e escolha informada.
**Alternatives considered**: Lista minimalista apenas com titulo foi rejeitada
por reduzir a compreensao do conteudo.

## Decision 3: Dados provenientes do indexador de conteudo existente
**Rationale**: O projeto ja e orientado por Markdown e indexacao local; nao ha
necessidade de backend adicional para a home.
**Alternatives considered**: API dedicada para feed, destaques e topicos foi
considerada, mas aumenta escopo e custo sem beneficio imediato.

## Decision 4: Comportamento responsivo
**Rationale**: Em telas menores, a hierarquia deve manter o feed como foco,
com colunas laterais reduzidas ou colapsadas.
**Alternatives considered**: Manter tres colunas em telas pequenas foi rejeitado
por comprometer legibilidade.
