

# **Autospace Workshop**

This repository contains the Autospace Workshop project, which includes multiple applications and libraries. This guide will help you set up the project locally and run the applications.

## **Prerequisites**

Before you begin, ensure you have the following installed on your system:

- Node.js (>= 14.x)
- Yarn (>= 1.22.x)
- Docker
- Git

## **Getting Started**

### **1. Clone the Repository**

Clone the repository to your local machine using Git.

```bash
git clone https://github.com/karthickthankyou/autospace-workshop.git
cd autospace-workshop
```

### **2. Install Dependencies**

Install the project dependencies using Yarn.

```bash
yarn install
```

### **3. Set Up Environment Variables**

Create a .env file in the root directory and add the necessary environment variables. Refer to .env.example for the required variables.

### **4. Run the Database with Docker Compose**

Start the PostgreSQL database using Docker Compose.

```bash
docker-compose up -d
```

### **5. Run Prisma Migrations**

After the database is running, apply Prisma migrations to set up the database schema.

```bash
yarn prisma migrate dev

```

### **6. Run the Applications**

You can run the individual applications using the following commands:

**API Application**

Navigate to the apps/api directory and start the API server.

```bash
cd apps/api
yarn dev
```

**WEB Applications**

Navigate to the apps/web directory and start the WEB server.

```bash
cd apps/web
yarn dev
```

# Technologies:

The Autospace monorepo leverages a range of modern technologies and libraries to provide a comprehensive and efficient parking management solution. Below is a breakdown of the primary technologies used in the project:

## Frontend:

- ✨ **React**: A JavaScript library for building user interfaces.
- **🔥 Next.js**: A React framework for server-side rendering and static site generation.
- **💎 Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **✅ Material UI**: The world's most popular React UI framework.
- **📏 @tabler/icons-react**: Icon set for React applications.
- **💖 react-hook-form**: A library for managing form state in React.
- 🎾 **zod**: TypeScript-first schema validation with static type inference.
- 📔 **@react-three/fiber**: A React renderer for Three.js.
- 🖊️ **@react-three/drei**: Useful helpers for React-Three-Fiber.

## Backend:

- 💻 **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- 📚 **GraphQL**: A query language for your API.
- 🧾 **REST API**: Standard for creating APIs using HTTP requests.
- 🎁 **Prisma**: A next-generation ORM for Node.js and TypeScript.
- 🍎 **Swagger**: A tool for documenting REST APIs.
- ✏️ **Stripe**: A suite of APIs for handling online payments and transactions.

## Shared Libraries:

- 🏠 **@autospace/network**: Manages network requests and GraphQL code generation.
- 🌄 **@autospace/forms**: Provides reusable form components and validation using react-hook-form and Zod.
- ⛵ **@autospace/3d**: Utilizes React-Three-Fiber and Drei for 3D graphics.

## Tools and Utilities:

- 🥇 **Nx**: A smart, fast, and extensible build system with first-class monorepo support.
- 🎓 **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- 💯 **Prettier**: An opinionated code formatter.
- 🖥️ **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **🦊 Husky**: A tool for managing Git hooks.