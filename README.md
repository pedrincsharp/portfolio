# Portfólio Profissional - João Pedro Alves de Moraes

Portfólio profissional de página única (Single Page Application) desenvolvido com **Angular 22** e **Tailwind CSS v4**, projetado com um visual **Minimalista Tech** de alto contraste, sem degradês, com cantos vivos e forte presença de whitespace.

O site é 100% dinâmico e configurável através de um arquivo [`dados.json`](public/dados.json), permitindo editar dados pessoais, resumo de carreira, habilidades e projetos sem precisar alterar o código-fonte dos componentes.

---

## 🚀 Tecnologias Utilizadas

- **[Angular 22](https://angular.dev/):** Componentes Standalone, Signals Reativos e Angular SSR/Prerendering.
- **[Tailwind CSS v4](https://tailwindcss.com/):** Estilização moderna via `@theme` com paleta de cores personalizada.
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estrita de todas as estruturas de dados.
- **[Vitest](https://vitest.dev/):** Suite rápida de testes unitários integrada ao Angular CLI.

---

## 🎨 Paleta de Cores Oficial

A interface utiliza uma paleta sólida corporativa/tech:

| Cor | Hex | Aplicação |
| :--- | :--- | :--- |
| **Brand Dark** | `#122C34` | Fundo principal da página |
| **Brand Navy** | `#224870` | Superfícies dos cards e seções |
| **Brand Blue** | `#2A4494` | Bordas e divisores estruturais |
| **Brand Sky** | `#4EA5D9` | Títulos secundários e identificadores |
| **Brand Cyan** | `#44CFCB` | Botões de ação, tags e destaques |
| **Pure White** | `#FFFFFF` | Textos de alto contraste |

---

## ⚙️ Como Funciona o `dados.json`

Todas as seções do site são abastecidas pelo arquivo [`public/dados.json`](public/dados.json):

- **Header:** Logotipo e itens do menu de navegação.
- **Hero:** Nome, cargo, subtítulo, foto de perfil, links sociais (GitHub, LinkedIn, E-mail, Telefone) e botões de chamada (CTA).
- **About:** Visão geral da carreira, experiências profissionais com atribuições, formação acadêmica e habilidades técnicas categorizadas.
- **Projetos:** Lista de projetos. Caso o array esteja vazio (`"projetos": []`), o site exibe automaticamente um card elegante de status *"Projetos em desenvolvimento..."*.
- **Footer:** Data da última alteração, direitos autorais e contatos.

### Exemplo de inclusão de um projeto:
```json
{
  "projetos": [
    {
      "nome": "Sistema de Gestão & NF-e",
      "img": "assets/minha-imagem.png",
      "link": "https://github.com/pedrincsharp/meu-projeto",
      "desc": "Módulo de faturamento e integração com documentos fiscais eletrônicos.",
      "tags": ["C#", ".NET", "SQL Server", "REST API"]
    }
  ]
}
```

---

## 💻 Como Rodar o Projeto na sua Máquina

### 1. Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- **Node.js** (versão 20 LTS ou superior recomendada)
- **npm** (incluso com o Node.js)
- **Git**

### 2. Clonar o Repositório
```bash
git clone git@github.com:pedrincsharp/portfolio.git
cd portfolio
```

### 3. Instalar as Dependências
Execute na raiz do projeto:
```bash
npm install
```

### 4. Iniciar o Servidor de Desenvolvimento
```bash
npm start
```
ou:
```bash
ng serve
```

Abra o seu navegador e acesse:
👉 **`http://localhost:4200/`**

O servidor possui hot-reload automático: qualquer modificação salva nos arquivos será refletida imediatamente no navegador.

---

## 🧪 Como Rodar os Testes

Para executar a suite de testes unitários com o Vitest:
```bash
npm test -- --watch=false
```

---

## 📦 Como Gerar o Build de Produção

Para compilar o projeto para publicação (gera os arquivos estáticos otimizados na pasta `dist/`):
```bash
npm run build
```

---

## 👤 Autor

**João Pedro Alves de Moraes**
- GitHub: [@pedrincsharp](https://github.com/pedrincsharp)
- LinkedIn: [linkedin.com/in/jpadm-977a121b0](https://linkedin.com/in/jpadm-977a121b0)
- E-mail: [joaopedro2001moraes@gmail.com](mailto:joaopedro2001moraes@gmail.com)
