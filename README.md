# 🎓 Site Institucional UNIESP

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Projeto desenvolvido para a disciplina de **Frontend Avançado** do curso de **Sistemas para Internet**

**UNIESP Centro Universitário** | Professor: **Kelson Almeida**

[Demo](#) • [Documentação](#-funcionalidades) • [Instalação](#-como-executar-o-projeto)

</div>

---

## 📖 Sobre o Projeto

Site institucional responsivo da Faculdade UNIESP desenvolvido com as tecnologias mais modernas do ecossistema React. O projeto apresenta informações completas sobre a instituição, sistema de notícias dinâmico, políticas de proteção de dados (LGPD) e uma interface intuitiva e acessível.

### 🎯 Objetivos de Aprendizagem

- Aplicação prática de React e seus hooks (useState, useEffect, useParams)
- Implementação de roteamento SPA com React Router DOM
- Desenvolvimento de interfaces responsivas com React Bootstrap
- Consumo de APIs REST com Axios
- Organização de código e componentização
- Boas práticas de versionamento com Git/GitHub

---

## 🚀 Tecnologias Utilizadas

### Core
- **React 18.3** - Biblioteca JavaScript para construção de interfaces de usuário
- **React Router DOM 7.1** - Gerenciamento de rotas e navegação SPA
- **Vite 6.0** - Build tool de nova geração e servidor de desenvolvimento ultra-rápido
- **JavaScript (ES6+)** - Linguagem de programação com recursos modernos

### UI/UX
- **React Bootstrap 2.10** - Componentes de interface responsivos e acessíveis
- **Bootstrap 5.3** - Framework CSS para design responsivo
- **Bootstrap Icons** - Biblioteca de ícones

### Requisições HTTP
- **Axios 1.7** - Cliente HTTP para requisições à API REST

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para identificação de problemas no código
- **Vite DevServer** - Hot Module Replacement (HMR) para desenvolvimento ágil

---

## 📁 Estrutura do Projeto

```
site-uniesp/
├── 📂 public/                    # Arquivos públicos estáticos
│   ├── 📂 noticias/             # Imagens das notícias
│   │   ├── calendario.jpg
│   │   ├── bolsa.jpg
│   │   ├── empregabilidade.jpg
│   │   └── 📂 natacao/          # Galeria de fotos
│   │       ├── foto1.jpg
│   │       ├── foto2.jpg
│   │       ├── foto3.jpg
│   │       └── foto4.jpg
│   └── uniesp.jpg               # Logo institucional
│
├── 📂 src/
│   ├── 📂 components/           # Componentes reutilizáveis
│   │   ├── CustomNavbar.jsx    # Barra de navegação responsiva
│   │   ├── CustomFooter.jsx    # Rodapé institucional
│   │   └── BanerAd.jsx          # Banner promocional
│   │
│   ├── 📂 pages/                # Páginas da aplicação
│   │   ├── Inicial.jsx          # Página inicial (Landing Page)
│   │   ├── Faculdade.jsx        # Sobre a instituição
│   │   ├── Dpo.jsx              # DPO & LGPD
│   │   ├── Noticias.jsx         # Listagem de notícias
│   │   └── VisualizaNoticia.jsx # Detalhes da notícia individual
│   │
│   ├── App.jsx                  # Componente raiz com rotas
│   ├── main.jsx                 # Ponto de entrada da aplicação
│   └── index.css                # Estilos globais
│
├── 📄 index.html                # HTML principal
├── 📄 package.json              # Dependências e scripts
├── 📄 vite.config.js            # Configuração do Vite
├── 📄 eslint.config.js          # Configuração do ESLint
└── 📄 README.md                 # Documentação do projeto
```

---

## 🎨 Funcionalidades

### 🏠 Página Inicial
- ✅ Banner de boas-vindas institucional
- ✅ Cards informativos sobre infraestrutura
- ✅ Seções: Vida no Campus, Biblioteca, Prédio Principal
- ✅ Parcerias com empresas e foco em inovação

### 🧭 Navegação
- ✅ Navbar responsiva com logo institucional
- ✅ Menu hambúrguer para dispositivos móveis (Offcanvas)
- ✅ Links de navegação: A Faculdade, DPO & LGPD, Notícias
- ✅ Transições suaves entre páginas

### 📰 Sistema de Notícias
- ✅ Listagem de notícias em grid responsivo (3 colunas → 2 → 1)
- ✅ Cards com imagem, data, título e descrição
- ✅ Badge de data estilizado no canto inferior esquerdo
- ✅ Efeito hover nos cards
- ✅ Página individual de notícia com:
  - Título completo
  - Data de publicação
  - Conteúdo formatado com parágrafos e citações
  - Galeria de fotos responsiva
  - Textos em negrito para destaques
  - Citações estilizadas com borda lateral

### 🔒 DPO & LGPD
- ✅ Informações sobre proteção de dados
- ✅ Políticas de privacidade
- ✅ Contato do Data Protection Officer

### 🦶 Rodapé
- ✅ Informações institucionais
- ✅ Links úteis para navegação rápida
- ✅ Dados de contato (endereço, telefone, e-mail)
- ✅ Copyright e direitos reservados
- ✅ Layout responsivo em 3 colunas

### 📱 Responsividade
- ✅ Design mobile-first
- ✅ Breakpoints otimizados (xs, sm, md, lg, xl)
- ✅ Imagens adaptativas
- ✅ Grid system do Bootstrap
- ✅ Testado em múltiplos dispositivos

---

## 🔧 Como Executar o Projeto

### 📋 Pré-requisitos

Antes de começar, você precisará ter instalado:

- **Node.js** (versão 14 ou superior) - [Download](https://nodejs.org/)
- **npm** (gerenciador de pacotes, vem com Node.js) ou **yarn**
- **Git** - [Download](https://git-scm.com/)

### 📥 Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/MarceloNobrega29/site-uniesp.git
```

2. **Acesse a pasta do projeto:**
```bash
cd site-uniesp
```

3. **Instale as dependências:**
```bash
npm install
```
ou
```bash
yarn install
```

### ▶️ Executando em Desenvolvimento

```bash
npm run dev
```
ou
```bash
yarn dev
```

O projeto será aberto automaticamente em:
```
http://localhost:5173
```

### 🏗️ Build para Produção

Para gerar a versão otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### 👁️ Preview da Build

Para visualizar a build de produção localmente:

```bash
npm run preview
```

---

## 🗂️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria a build de produção |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run lint` | Executa o ESLint para verificar o código |

---

## 🛣️ Rotas da Aplicação

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | Inicial | Página inicial com apresentação |
| `/a-faculdade` | Faculdade | Informações sobre a instituição |
| `/dpo-lgpd` | Dpo | Políticas de proteção de dados |
| `/noticias` | Noticias | Listagem de todas as notícias |
| `/noticias/:id` | VisualizaNoticia | Detalhes de uma notícia específica |

---

## 📦 Dependências Principais

```json
{
  "dependencies": {
    "axios": "^1.7.9",
    "bootstrap": "^5.3.3",
    "react": "^18.3.1",
    "react-bootstrap": "^2.10.7",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.1.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.17.0",
    "vite": "^6.0.5"
  }
}
```

---

## 🎓 Informações Acadêmicas

<table>
  <tr>
    <td><strong>Instituição:</strong></td>
    <td>UNIESP Centro Universitário</td>
  </tr>
  <tr>
    <td><strong>Curso:</strong></td>
    <td>Sistemas para Internet</td>
  </tr>
  <tr>
    <td><strong>Disciplina:</strong></td>
    <td>Frontend Avançado</td>
  </tr>
  <tr>
    <td><strong>Professor:</strong></td>
    <td>Kelson Almeida</td>
  </tr>
  <tr>
    <td><strong>Desenvolvedor:</strong></td>
    <td>Kamilly Freire</td>
  </tr>
  <tr>
    <td><strong>Período:</strong></td>
    <td>2025.1</td>
  </tr>
</table>

---

## 📚 Conceitos Aplicados

### React Fundamentals
- ✅ Componentes funcionais
- ✅ JSX e renderização condicional
- ✅ Props e composição
- ✅ useState para gerenciamento de estado
- ✅ useEffect para efeitos colaterais
- ✅ useParams para captura de parâmetros de rota

### React Router
- ✅ BrowserRouter para navegação SPA
- ✅ Routes e Route para definição de rotas
- ✅ Link para navegação sem reload
- ✅ Rotas dinâmicas com parâmetros

### React Bootstrap
- ✅ Container, Row, Col para layout
- ✅ Card para apresentação de conteúdo
- ✅ Navbar e Offcanvas para navegação
- ✅ Badge para elementos visuais
- ✅ Responsividade com breakpoints

---

## 🌐 Deploy

O projeto pode ser facilmente publicado em plataformas como:

- **Vercel** - [vercel.com](https://vercel.com)
- **Netlify** - [netlify.com](https://netlify.com)
- **GitHub Pages** - [pages.github.com](https://pages.github.com)

### Deploy na Vercel (Recomendado)

```bash
# Instale a CLI da Vercel
npm i -g vercel

# Faça o deploy
vercel
```

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas!

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---


## 🙏 Agradecimentos

- Professor Kelson Almeida pela orientação
- UNIESP Centro Universitário pelo suporte
- Comunidade React pela documentação

---

<div align="center">

Desenvolvido com ❤️ e ☕ por **Kamilly Freire**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kamillyfreire00)

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

</div>