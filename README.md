
# 🤝 Smart Collaboration Platform

An open, verifiable, and agent-oriented platform to enable secure data exchange, fallback orchestration, and agent graph execution across organizations.

---

## 📁 Project Structure

```
smart-collab-platform/
├── backend/     # Node.js Express API with PostgreSQL
├── frontend/    # React app with agent graph + auth
├── docker-compose.yml
```

---

## 🚀 Getting Started

### 1. Prerequisites

- Node.js 18+
- Docker & Docker Compose
- Git

---

### 2. Clone & Install

```bash
git clone https://github.com/KunalGarg-PEC/Encrypt.git
cd smart-collab-platform
```

---

### 3. Start PostgreSQL

```bash
docker compose up -d db
```

> Starts PostgreSQL on port `5432` with user `postgres` / `password`

---

### 4. Run the Backend

```bash
cd backend
npm install
npm run dev
```

> Runs Express on `http://localhost:4000`

---

### 5. Run the Frontend

In a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

> Launches Vite dev server at `http://localhost:3000`

---

## 🔑 Login Credentials

| Username | Password |
|----------|----------|
| admin    | password |

---

## 📦 Features

- ✅ JWT-based login system
- 🔐 Tenant-aware data access (row-level security)
- 🧾 Upload signed capability sheets (with public key verification)
- 🧠 Graph-based agent orchestration (plan DAG)
- 🛡 Fallback agent handling
- 📈 Visualize agent graph on dashboard
- ✨ React Flow for DAG, JSONEditor for schema input

---

## 📬 API Endpoints

| Method | Endpoint                  | Description                          |
|--------|---------------------------|--------------------------------------|
| POST   | `/auth/login`             | Login and receive JWT token          |
| POST   | `/agentsheets`            | Upload signed capability sheet       |
| GET    | `/orchestrator/plan`      | Return agent DAG for frontend graph  |

---

## 🔧 Environment Variables

### 📄 backend/.env

```
PORT=4000
DB_URL=postgres://postgres:password@localhost:5432/registry
JWT_SECRET=supersecretkey
```

---

## 🧪 Sample Test Flow

1. **Login** at `http://localhost:3000/login`
2. **Upload a Capability Sheet** at `/upload`
3. **View Agent Graph** at `/`

---

## 🛠 To Do

- Connect OpenID/OAuth2 auth (e.g. Keycloak)
- Replace mock orchestrator with real planning logic
- Add ElasticSearch for capability search
- Build multi-tenant admin UI

---

## 📄 License

MIT License — © 2025 YourName or Org
