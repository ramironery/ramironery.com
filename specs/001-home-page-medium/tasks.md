# Tasks: Home Page Inspirada no Medium

**Input**: Design documents from `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/specs/001-home-page-medium/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Nenhum teste automatizado foi solicitado na spec.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Mapear o estado atual da home e pontos de substituicao em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/app/page.tsx`
- [x] T002 [P] Criar tipos de dados da home em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/types/home.ts`
- [x] T003 [P] Criar helper de extracao de resumo em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/lib/content-summary.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Implementar seletores de dados da home (feed, destaques, topicos) em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/lib/home-data.ts`
- [x] T005 Ajustar o indexador para expor resumo/autor quando disponivel em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/lib/content-index.ts`
- [x] T006 Definir configuracao inicial de destaques/topicos em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/lib/home-data.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Navegar pelo feed principal (Priority: P1) 🎯 MVP

**Goal**: Exibir feed central com cards escaneaveis e topbar com busca e acoes

**Independent Test**: Um usuario encontra tres conteudos no feed e identifica titulo/resumo antes de clicar

### Implementation for User Story 1

- [x] T007 [P] [US1] Criar componente de topbar em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/components/layout/Topbar.tsx`
- [x] T008 [P] [US1] Criar componente de card do feed em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/components/content/FeedCard.tsx`
- [x] T009 [P] [US1] Criar lista do feed central em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/components/content/FeedList.tsx`
- [x] T010 [US1] Atualizar a home para renderizar topbar e feed em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/app/page.tsx`

**Checkpoint**: User Story 1 fully functional and testable

---

## Phase 4: User Story 2 - Usar navegacao lateral para orientar-se (Priority: P2)

**Goal**: Exibir sidebar com secoes principais e icones

**Independent Test**: Um usuario identifica rapidamente as secoes principais pela sidebar

### Implementation for User Story 2

- [x] T011 [P] [US2] Criar componente de item de navegacao em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/components/layout/SidebarNavItem.tsx`
- [x] T012 [P] [US2] Criar componente de sidebar esquerda em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/components/layout/LeftSidebar.tsx`
- [x] T013 [US2] Integrar sidebar na home em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/app/page.tsx`

**Checkpoint**: User Stories 1 and 2 independently functional

---

## Phase 5: User Story 3 - Explorar destaques e topicos (Priority: P3)

**Goal**: Exibir coluna direita com destaques curados e topicos recomendados

**Independent Test**: Um usuario escolhe um destaque e um topico pela coluna direita

### Implementation for User Story 3

- [x] T014 [P] [US3] Criar lista de destaques em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/components/content/HighlightsList.tsx`
- [x] T015 [P] [US3] Criar lista de topicos recomendados em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/components/content/TopicsList.tsx`
- [x] T016 [P] [US3] Criar coluna direita em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/components/layout/RightRail.tsx`
- [x] T017 [US3] Integrar coluna direita na home em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/app/page.tsx`

**Checkpoint**: All user stories independently functional

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T018 [P] Refinar responsividade (colunas colapsadas) em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/app/page.tsx`
- [x] T019 [P] Ajustar tipografia/espacamento para hierarquia visual em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/app/page.tsx`
- [x] T020 [P] Revisar acessibilidade (roles, labels, foco) nos componentes em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/components/`
- [ ] T021 Validar home no dev server e registrar observacoes em `/home/ramiro/Documentos/Projetos/hub-ti/hub-ti/specs/001-home-page-medium/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - No dependencies on other stories

### Within Each User Story

- Componentes base antes de integracao na home
- Integracao na home antes de ajustes de responsividade

### Parallel Opportunities

- T002, T003 em paralelo
- T007, T008, T009 em paralelo
- T011, T012 em paralelo
- T014, T015, T016 em paralelo

---

## Parallel Example: User Story 1

```bash
Task: "Criar componente de topbar em /home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/components/layout/Topbar.tsx"
Task: "Criar componente de card do feed em /home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/components/content/FeedCard.tsx"
Task: "Criar lista do feed central em /home/ramiro/Documentos/Projetos/hub-ti/hub-ti/src/components/content/FeedList.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
