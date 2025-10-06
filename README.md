# 🧠 Movio Terapia Lara

> Plataforma moderna de agendamento e gestão de consultas terapêuticas

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

## 📋 Sobre o Projeto

**Movio Terapia Lara** é uma solução completa para agendamento e gestão de consultas terapêuticas, oferecendo uma experiência moderna e intuitiva tanto para pacientes quanto para profissionais da área de saúde mental.

### ✨ Características

- 🌐 **Aplicação Web**: Interface responsiva e moderna
- 📱 **Aplicação Mobile**: App nativo para iOS e Android
- 📅 **Sistema de Agendamento**: Processo intuitivo em 4 etapas
- 🎨 **Design Moderno**: UI/UX profissional com tema claro e escuro
- ♿ **Acessível**: Seguindo diretrizes WCAG 2.1
- 🚀 **Performance**: Otimizado para velocidade e eficiência

## 🏗️ Estrutura do Projeto

```
movio-terapialara/
├── app/                          # Aplicação Next.js (App Router)
│   ├── page.tsx                  # Página inicial
│   ├── agendamento/              # Fluxo de agendamento
│   └── dashboard/                # Dashboard administrativo
│
├── movio-terapialara-mobile/     # Aplicação mobile (Expo)
│   ├── app/                      # Telas do app
│   └── components/               # Componentes React Native
│
├── components/                   # Componentes React compartilhados
│   └── ui/                       # Biblioteca de componentes UI
│
├── lib/                          # Utilitários e helpers
├── hooks/                        # Custom React hooks
├── public/                       # Assets estáticos
└── styles/                       # Estilos globais
```

## 🛠️ Tecnologias

### Web Application

| Tecnologia | Propósito |
|------------|-----------|
| **Next.js 15** | Framework React com SSR/SSG |
| **React 19** | Biblioteca UI |
| **TypeScript** | Type safety |
| **Tailwind CSS 4** | Framework CSS utility-first |
| **Shadcn/ui** | Biblioteca de componentes |
| **React Hook Form** | Gestão de formulários |
| **Zod** | Validação de schemas |
| **date-fns** | Manipulação de datas |
| **Vercel Analytics** | Analytics e métricas |

### Mobile Application

| Tecnologia | Propósito |
|------------|-----------|
| **Expo** | Framework React Native |
| **Expo Router** | Sistema de navegação |
| **NativeWind** | Tailwind CSS para React Native |
| **React Native** | Framework mobile |

## 🚀 Getting Started

### Pré-requisitos

- Node.js 18.x ou superior
- npm, yarn ou pnpm
- Git

### Instalação - Web App

```bash
# Clone o repositório
git clone https://github.com/psiclaramovio/psiclaramovio.git
cd psiclaramovio

# Instale as dependências
npm install
# ou
pnpm install

# Inicie o servidor de desenvolvimento
npm run dev
# ou
pnpm dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

### Instalação - Mobile App

```bash
# Navegue até o diretório mobile
cd movio-terapialara-mobile

# Instale as dependências
npm install

# Inicie o Expo
npx expo start
```

Use o Expo Go app no seu dispositivo móvel para visualizar o aplicativo.

## 📦 Scripts Disponíveis

### Web Application

```bash
npm run dev      # Inicia servidor de desenvolvimento (Turbopack)
npm run build    # Build para produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa ESLint
```

### Mobile Application

```bash
npx expo start           # Inicia Expo Dev Server
npx expo start --ios     # Abre no iOS Simulator
npx expo start --android # Abre no Android Emulator
```

## 🎨 Design System

O projeto utiliza uma biblioteca de componentes customizada baseada em:

- **Shadcn/ui**: Componentes acessíveis e customizáveis
- **Radix UI**: Primitivos UI sem estilo
- **Tailwind CSS**: Sistema de design utility-first
- **Lucide Icons**: Ícones modernos e consistentes

### Temas

- 🌞 **Light Mode**: Tema claro padrão
- 🌙 **Dark Mode**: Tema escuro (em desenvolvimento)

## 📱 Funcionalidades

### ✅ Implementadas

- ✅ Landing page com informações sobre serviços
- ✅ Sistema de agendamento em 4 etapas:
  1. Cadastro do paciente
  2. Seleção do serviço terapêutico
  3. Escolha de data e horário
  4. Confirmação e resumo
- ✅ Dashboard administrativo (interface)
- ✅ Aplicação mobile com navegação por tabs
- ✅ Design responsivo
- ✅ Sistema de notificações toast

### 🔄 Em Desenvolvimento

- 🔄 Sistema de autenticação
- 🔄 Integração com banco de dados
- 🔄 Backend API
- 🔄 Sistema de pagamentos
- 🔄 Notificações por email
- 🔄 Integração mobile com backend

### 📋 Planejadas

Veja o arquivo [TODO.md](TODO.md) para a lista completa de funcionalidades planejadas.

## 🔒 Segurança

Este projeto leva segurança a sério. Se você descobrir alguma vulnerabilidade, por favor, entre em contato diretamente com a equipe de desenvolvimento.

### Práticas de Segurança (Em Implementação)

- Input sanitization em todos os formulários
- Content Security Policy (CSP)
- HTTPS enforcement
- Rate limiting
- CSRF protection
- XSS protection
- Data encryption

## 📚 Documentação

- [TODO.md](TODO.md) - Lista completa de tarefas e roadmap
- [ANALISE_PROJETO.md](ANALISE_PROJETO.md) - Análise técnica detalhada
- [CLAUDE.md](CLAUDE.md) - Guia de desenvolvimento com Claude AI

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, siga estas diretrizes:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: add amazing feature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Convenções de Commit

Utilizamos [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: formatação
refactor: refatoração de código
test: testes
chore: tarefas de manutenção
perf: melhoria de performance
security: correção de segurança
```

## 📊 Status do Projeto

- **Versão**: 0.1.0
- **Status**: Em Desenvolvimento
- **Branch Ativa**: `develop`
- **Issues Abertas**: 15

Veja [GitHub Issues](https://github.com/psiclaramovio/psiclaramovio/issues) para acompanhar o progresso.

## 🏆 Roadmap

### Sprint 1 - Fundação e Segurança (2-3 semanas)
- Setup de banco de dados
- Variáveis de ambiente
- Implementação de segurança básica

### Sprint 2 - Autenticação (2 semanas)
- Sistema de login/registro
- Gerenciamento de sessões
- Proteção de rotas

### Sprint 3 - Core Features (3 semanas)
- API CRUD completa
- Sistema de emails
- Gateway de pagamento

### Sprint 4 - UX & Performance (2 semanas)
- Otimização de performance
- Loading states
- PWA features

### Sprint 5 - Mobile App (3-4 semanas)
- Integração mobile-backend
- Push notifications
- Publicação nas stores

Veja [TODO.md](TODO.md) para detalhes completos.

## 👥 Equipe

- **Desenvolvimento**: Equipe Movio Terapia Lara
- **Design**: Interface criada com v0.app
- **Repositório**: [@psiclaramovio](https://github.com/psiclaramovio)

## 📄 Licença

Este projeto é propriedade privada. Todos os direitos reservados.

## 🔗 Links

- **Repositório**: [GitHub](https://github.com/psiclaramovio/psiclaramovio)
- **Documentação**: [Wiki do Projeto](https://github.com/psiclaramovio/psiclaramovio/wiki)
- **Issues**: [GitHub Issues](https://github.com/psiclaramovio/psiclaramovio/issues)

## 📞 Contato

Para dúvidas ou suporte, entre em contato através das issues do GitHub.

---

**Desenvolvido com ❤️ pela equipe Movio Terapia Lara**

*Última atualização: Janeiro 2025*