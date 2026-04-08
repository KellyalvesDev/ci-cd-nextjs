# CI/CD Next.js com GitHub Actions

Aplicação Next.js com pipeline completo de CI/CD configurado com GitHub Actions e deploy automático na Vercel.

## 🔗 Link do projeto publicado

> Adicione aqui o link da Vercel após o deploy: ci-cd-nextjs-phi.vercel.app

## 🚀 Como rodar localmente

### Pré-requisitos
- Node.js 18+
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/KellyalvesDev/lista-de-tarefass

# Entre na pasta
cd ci-cd-nextjs

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

Acesse: http://localhost:3000

## 🧪 Como rodar o lint e build

```bash
# Lint
npm run lint

# Build
npm run build
```

## ⚙️ Pipeline CI/CD

O arquivo `.github/workflows/main.yml` configura a pipeline completa:

### CI (Integração Contínua)
Roda automaticamente a cada push ou pull request na branch `main`:
1. Instala dependências (`npm ci`)
2. Roda o lint (`npm run lint`)
3. Roda os testes (`npm run test`)
4. Roda o build (`npm run build`)

### CD (Deploy Contínuo)
Após o CI passar, faz deploy automático na Vercel.

## 🔐 Secrets necessários

Configure no repositório GitHub em Settings → Secrets:

| Secret | Descrição |
|--------|-----------|
| `VERCEL_TOKEN` | Token de acesso da Vercel |
| `VERCEL_ORG_ID` | ID da organização na Vercel |
| `VERCEL_PROJECT_ID` | ID do projeto na Vercel |

## 📁 Estrutura do projeto

```
.github/
  workflows/
    main.yml       ← Pipeline CI/CD
src/
  app/
    page.tsx       ← Página principal
    layout.tsx     ← Layout da aplicação
package.json
next.config.ts
tsconfig.json
```
