import { Injectable, inject, signal, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { PortfolioData } from '../models/portfolio.model';
import { catchError, of, tap } from 'rxjs';

export const DEFAULT_PORTFOLIO_DATA: PortfolioData = {
  header: {
    logo: 'JP',
    menu: [
      { nome: 'Início', link: '#hero' },
      { nome: 'Sobre', link: '#about' },
      { nome: 'Projetos', link: '#projects' },
      { nome: 'Contato', link: '#footer' }
    ]
  },
  hero: {
    nome: 'João Pedro Alves de Moraes',
    cargo: 'Desenvolvedor de Software Backend & Full Stack',
    subtitulo: 'Especialista em C#, .NET e ecossistema SQL com mais de 5 anos de experiência em sistemas ERP e PDV, APIs REST de alta confiabilidade e arquiteturas modernas.',
    foto: 'assets/minha-imagem.png',
    ctaProjetos: 'Ver Projetos',
    ctaContato: 'Fale Comigo',
    github: 'https://github.com/pedrincsharp',
    linkedin: 'https://linkedin.com/in/jpadm-977a121b0',
    email: 'joaopedro2001moraes@gmail.com',
    telefone: '(14) 99765-4173'
  },
  about: {
    titulo: 'Sobre Mim',
    resumo: 'Desenvolvedor de Software com mais de 5 anos de experiência no desenvolvimento e manutenção de sistemas ERP e PDV. Atuo principalmente no desenvolvimento Backend utilizando C#, .NET, SQL Server e PostgreSQL, criando APIs REST, integrações entre sistemas e soluções voltadas para regras de negócio complexas. Possuo experiência com Docker, Entity Framework Core, Dapper, Git e arquitetura DDD, além de manutenção de aplicações legadas em VB.NET e VB6.',
    experiencias: [
      {
        empresa: 'JN Moura Soluções Tecnológicas',
        local: 'Araraquara/SP',
        cargo: 'Desenvolvedor de Software',
        periodo: 'Ago 2023 – Atualmente',
        atividades: [
          'Desenvolvimento e manutenção de sistemas ERP e PDV.',
          'Desenvolvimento de novas funcionalidades utilizando C#, VB.NET e SQL Server.',
          'Criação e manutenção de APIs REST.',
          'Desenvolvimento de integrações entre sistemas internos.',
          'Implementação de regras de negócio para contratos, faturamento e plano de saúde pet.',
          'Desenvolvimento de consultas SQL e otimização de desempenho.',
          'Correção de bugs e manutenção evolutiva com versionamento via Git.',
          'Participação em levantamento de requisitos com Product Owners.'
        ]
      },
      {
        empresa: 'Smart Inovações',
        local: 'Ipaussu/SP',
        cargo: 'Desenvolvedor de Software',
        periodo: 'Ago 2021 – Jul 2023',
        atividades: [
          'Desenvolvimento e manutenção de sistemas comerciais.',
          'Atendimento e suporte técnico aos clientes.',
          'Integração com documentos fiscais eletrônicos (NFSe, NFCe, NFe e SAT).',
          'Desenvolvimento de novas funcionalidades utilizando C#.',
          'Criação e manutenção de consultas SQL.',
          'Correção de falhas e melhorias de performance.'
        ]
      }
    ],
    formacao: [
      {
        curso: 'Análise e Desenvolvimento de Sistemas',
        instituicao: 'Faculdade de Tecnologia de Ourinhos (FATEC) - Ourinhos/SP',
        periodo: '2026 – Cursando'
      },
      {
        curso: 'Ensino Médio Integrado ao Técnico em Informática (ETIM)',
        instituicao: 'Etec Pedro Leme Brisolla Sobrinho - Ipaussu/SP',
        periodo: '2017 – 2019'
      }
    ],
    habilidades: [
      {
        categoria: 'Backend',
        items: ['.NET 10', 'ASP.NET Core', 'C#', 'REST API', 'Entity Framework Core', 'Dapper', 'VB.NET', 'VB6']
      },
      {
        categoria: 'Frontend',
        items: ['Angular', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
      },
      {
        categoria: 'Banco de Dados',
        items: ['SQL Server', 'PostgreSQL', 'MySQL', 'MariaDB', 'SQLite']
      },
      {
        categoria: 'DevOps, Ferramentas & Arquitetura',
        items: ['Docker', 'Git', 'JWT', 'Swagger', 'IIS', 'DDD (Domain Driven Design)', 'Clean Code', 'POO']
      }
    ]
  },
  projetos: [],
  footer: {
    ultimaAlteracao: '30/09/2026',
    direitos: 'João Pedro Alves de Moraes',
    email: 'joaopedro2001moraes@gmail.com',
    telefone: '(14) 99765-4173',
    github: 'https://github.com/pedrincsharp',
    linkedin: 'https://linkedin.com/in/jpadm-977a121b0'
  }
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly http = inject(HttpClient);
  private readonly platformId = inject(PLATFORM_ID);

  public readonly data = signal<PortfolioData>(DEFAULT_PORTFOLIO_DATA);

  constructor() {
    this.carregarDados();
  }

  public carregarDados(): void {
    if (
      isPlatformBrowser(this.platformId) &&
      typeof window !== 'undefined' &&
      window.location &&
      window.location.origin &&
      window.location.origin !== 'null' &&
      !window.location.origin.startsWith('http://localhost:3000') // evita ruído durante testes unitários jsdom sem servidor ativo
    ) {
      const url = `${window.location.origin}/dados.json?t=${Date.now()}`;
      this.http.get<PortfolioData>(url).pipe(
        tap((dadosCarregados) => {
          if (dadosCarregados) {
            this.data.set(dadosCarregados);
          }
        }),
        catchError(() => of(DEFAULT_PORTFOLIO_DATA))
      ).subscribe();
    }
  }
}
