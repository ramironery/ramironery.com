---
title: "O que é Sistema Operacional"
area: "infra"
subarea: "sistemas-operacionais"
category: "conceitos"
prerequisites:
  - fundamentos
next_topics:
  - linux
  - windows-server
  - usuarios-permissoes-processos
tags:
  - sistemas-operacionais
  - linux
  - windows
  - processos
  - permissoes
---

## O que é

Sistema Operacional (SO) é o software base que **gerencia o hardware** do computador e oferece um ambiente para que outros programas funcionem. Ele controla recursos como **CPU**, **memória**, **disco**, **rede**, **dispositivos** e define regras de **usuários e permissões**.

Sem um SO, o hardware é “mudo”: não existe interface, não existem processos rodando, não existe gerenciamento de recursos.

## Para que serve no mundo real

Em infraestrutura, o SO é importante porque ele determina:

- **Como servidores rodam serviços** (web, arquivos, banco de dados, autenticação)
- **Como você administra o ambiente** (terminal, logs, ferramentas)
- **Como a segurança é aplicada** (usuários, permissões, atualizações)
- **Como o desempenho é ajustado** (processos, memória, I/O)

## Onde isso aparece na Infra

- **Servidores Linux:** muito comum para web, bancos, automação e serviços de rede.
- **Windows Server:** comum em ambientes corporativos, especialmente com Active Directory, serviços Microsoft e integração com estações Windows.
- **Cloud:** a base de muitas instâncias é um SO (uma VM com Linux/Windows).
- **Virtualização e containers:** VMs rodam SOs; containers compartilham o kernel (conceito importante depois).

## Pré-requisitos

- Infraestrutura de TI (visão geral)

## Próximos passos

- O que é **Linux** e por que ele domina servidores
- O que é **Windows Server** e onde ele brilha
- Conceitos essenciais: **usuários, permissões e processos**
- Linha de comando (terminal) e leitura de logs (quando você estiver pronto)

## Fontes confiáveis para aprofundar

- Documentação oficial de Linux (Red Hat / Ubuntu / Debian — escolha uma distro para começar)
- Microsoft Learn (Windows Server e administração)
- Livros e guias introdutórios de sistemas operacionais (conceito, memória, processos, arquivos)
- Materiais de rede/infra que ensinem SO junto com prática (laboratórios)
