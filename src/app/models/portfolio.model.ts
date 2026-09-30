export interface MenuItem {
  nome: string;
  link: string;
}

export interface HeaderData {
  logo: string;
  menu: MenuItem[];
}

export interface HeroData {
  nome: string;
  cargo: string;
  subtitulo: string;
  foto: string;
  ctaProjetos: string;
  ctaContato: string;
  github: string;
  linkedin: string;
  email: string;
  telefone: string;
}

export interface ExperienciaItem {
  empresa: string;
  local: string;
  cargo: string;
  periodo: string;
  atividades: string[];
}

export interface FormacaoItem {
  curso: string;
  instituicao: string;
  periodo: string;
}

export interface HabilidadeCategoria {
  categoria: string;
  items: string[];
}

export interface AboutData {
  titulo: string;
  resumo: string;
  experiencias: ExperienciaItem[];
  formacao: FormacaoItem[];
  habilidades: HabilidadeCategoria[];
}

export interface ProjectItem {
  nome: string;
  img: string;
  link: string;
  desc: string;
  tags?: string[];
}

export interface FooterData {
  ultimaAlteracao: string;
  direitos: string;
  email: string;
  telefone: string;
  github: string;
  linkedin: string;
}

export interface PortfolioData {
  header: HeaderData;
  hero: HeroData;
  about: AboutData;
  projetos: ProjectItem[];
  footer: FooterData;
}
