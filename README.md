# Greenhouse Backend

<p align="center">
  <strong>API REST para gerenciamento de e-commerce de produtos verdes</strong>
</p>

<p align="center">
  <img alt="NestJS" src="https://img.shields.io/badge/NestJS-11.0-ea2845?style=flat-square&logo=nestjs" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript" />
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-15-336791?style=flat-square&logo=postgresql" />
  <img alt="Prisma" src="https://img.shields.io/badge/Prisma-7.4-2d3748?style=flat-square&logo=prisma" />
  <img alt="License" src="https://img.shields.io/badge/License-UNLICENSED-blue?style=flat-square" />
</p>

---

## 📋 Sobre o Projeto

O **Greenhouse Backend** é uma API REST desenvolvida com **NestJS** para gerenciar uma plataforma de e-commerce especializada em produtos sustentáveis e orgânicos. A aplicação fornece funcionalidades completas para autenticação, gerenciamento de usuários, catálogo de produtos, carrinho de compras e processamento de pedidos.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **NestJS** | 11.0.1 | Framework Node.js progressivo e modular |
| **TypeScript** | 5.x | Tipagem estática e desenvolvimento seguro |
| **PostgreSQL** | 15 | Banco de dados relacional |
| **Prisma** | 7.4.2 | ORM para gerenciamento de dados |
| **JWT (JSON Web Tokens)** | 11.0.2 | Autenticação e autorização |
| **Bcrypt** | 6.0.0 | Criptografia de senhas |
| **Swagger/OpenAPI** | 11.2.6 | Documentação interativa de API |
| **Class Validator** | 0.15.1 | Validação de dados com decoradores |
| **Class Transformer** | 0.5.1 | Transformação de objetos |
| **Passport** | 0.7.0 | Autenticação estratégica |

---

## 📁 Estrutura de Pastas

```
greenmarket-backend/
├── src/
│   ├── common/
│   │   ├── dto/                    # Data Transfer Objects reutilizáveis
│   │   ├── enums/                  # Enumerações da aplicação
│   │   ├── filters/                # Filtros de exceção globais
│   │   ├── interfaces/             # Interfaces customizadas
│   │   └── swagger/                # Documentação Swagger dos endpoints
│   ├── database/
│   │   ├── prisma.module.ts        # Módulo de configuração Prisma
│   │   └── prisma.service.ts       # Serviço de integração com Prisma
│   ├── modules/                    # Módulos da aplicação
│   │   ├── auth/                   # Autenticação e autorização
│   │   │   ├── dto/                # DTOs de login e criação de usuário
│   │   │   ├── jwt-auth.guard.ts   # Guard para proteção de rotas
│   │   │   ├── jwt.strategy.ts     # Estratégia JWT do Passport
│   │   │   └── repositories/       # Camada de dados
│   │   ├── users/                  # Gerenciamento de usuários
│   │   ├── products/               # Catálogo de produtos
│   │   ├── categories/             # Categorias de produtos
│   │   ├── cart/                   # Carrinho de compras
│   │   ├── order/                  # Processamento de pedidos
│   │   └── address/                # Gerenciamento de endereços
│   ├── app.module.ts               # Módulo raiz da aplicação
│   └── main.ts                     # Ponto de entrada da aplicação
├── prisma/
│   ├── schema.prisma               # Schema do banco de dados
│   └── migrations/                 # Histórico de migrações do banco
├── test/
│   ├── app.e2e-spec.ts            # Testes end-to-end
│   └── jest-e2e.json              # Configuração Jest para E2E
├── docker-compose.yml              # Orquestração de containers
├── package.json                    # Dependências do projeto
├── tsconfig.json                   # Configuração TypeScript
└── nest-cli.json                   # Configuração NestJS CLI
```

### Padrão Arquitetural

Cada módulo segue a arquitetura em camadas:

```
Module/
├── <module>.controller.ts     # Endpoints HTTP
├── <module>.service.ts        # Lógica de negócios
├── <module>.module.ts         # Configuração do módulo
├── dto/                       # Classes de transferência de dados
└── repositories/              # Abstração de acesso a dados
```

---

## 🚀 Como Começar

### Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** 9+ ou **yarn** (vem com Node.js)
- **Docker** e **Docker Compose** ([Download](https://www.docker.com/))
- **Git**

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/greenhouse-backend.git
cd greenhouse-backend
```

### 2️⃣ Instalar Dependências

```bash
npm install
```

### 3️⃣ Configurar o Banco de Dados

#### Iniciando o PostgreSQL com Docker:

```bash
docker-compose up -d
```

Isso iniciará um container PostgreSQL com as seguintes credenciais:
- **Usuário**: postgres
- **Senha**: postgres
- **Database**: greenhousedb
- **Porta**: 8080

#### Executar Migrações:

```bash
npx prisma migrate dev
```

#### (Opcional) Visualizar Dados com Prisma Studio:

```bash
npx prisma studio
```

### 4️⃣ Criar Arquivo `.env`

Crie um arquivo `.env` na raiz do projeto:

```env
# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:8080/greenhousedb"

# JWT
JWT_SECRET="sua_chave_secreta_muito_segura_aqui"
JWT_EXPIRATION="7d"

# Application
NODE_ENV="development"
PORT=3000
```

### 5️⃣ Executar a Aplicação

```bash
# Modo desenvolvimento (com hot-reload)
npm run start:dev

# Modo produção
npm run start:prod

# Debug mode
npm run start:debug
```

A API estará disponível em: **http://localhost:3000**

---

## 📚 Documentação da API

Com a aplicação rodando, acesse a documentação interativa:

- **Swagger UI**: http://localhost:3000/swagger

> A documentação é gerada automaticamente pelo Swagger/OpenAPI baseada nos decoradores do código.

---

<p align="center">
  Desenvolvido com ❤️ usando <a href="https://nestjs.com/">NestJS</a>
</p>
