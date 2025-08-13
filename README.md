
# Ossean

**Ocean of Open Source — Discover the best GitHub repositories blazingly fast.**  

Ossean is a free and open-source tool to explore trending and curated open source projects across GitHub. Built to help developers quickly find and filter repositories by language, popularity, and more — all without complex GitHub queries or bloated UIs.  
Made for speed. Free for everyone. Open for contributors.

<img width="1920" height="1020" alt="dashboard" src="https://github.com/user-attachments/assets/bf1b7d5a-f2e8-41f9-8a42-8c6a1a92c63a" />

---

## Features

- **Technologies:** Next.js + Tailwind CSS + PostgreSQL + GithubAPI  
- **Auth:** BetterAuth

---

## Prerequisites

Make sure the following are installed on your system before running the project:

- Node.js (v18 or later)
- Bun (v1.2.7 or later) – used for development and script execution
- PostgreSQL – required for database operations via Drizzle ORM
- A package manager – Bun, npm, or pnpm (Bun recommended)

To verify installation:

```sh
node --version
bun --version
psql --version
```

---

## Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the Repository

```sh
git clone https://github.com/faizshaikh17/ossean.git
cd ossean
```

### 2. Install Dependencies

```sh
bun install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following:

```sh
DATABASE_URL=postgresql://:@localhost:5432/ossean
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-random-secret
```

Make sure to replace the placeholders with actual values.

### 4. Run Database Migrations

```sh
bunx drizzle-kit push
```

This will sync your schema to the PostgreSQL database.

### 5. Start the Development Server

```sh
bun run dev
```

The app will start at:  
[http://localhost:3000](http://localhost:3000)

---

## Usage

Once the app is running, you can use Ossean to explore GitHub repositories with ease:

- **Login:** Sign in using your Google account via the authentication page to access personalized features.
- **Discover YC-Backed Projects:** Browse a curated list of Y Combinator-backed open-source projects.
- **Explore Trending Projects:** View trending repositories based on stars, forks, or recent activity.
- **Filter Projects:** Use filters to find projects by programming language, popularity, or other criteria directly from the dashboard.

---

## Project Structure

Below is a simplified structure of the Ossean project:

```sh
app/
├── api/
│   ├── auth/[...all]/route.ts
│   ├── githubDiscover/
│   ├── githubOverview/
│   ├── githubTrending/
├── auth/page.tsx
├── home/
│   ├── (overview)/
│   ├── discover/
│   ├── trending/
│   └── layout.tsx
├── globals.css
├── layout.tsx
├── page.tsx
components/
lib/
├── db/
│   └── schema.ts
├── auth.ts
├── db.ts
├── githubTokens.ts
├── session.ts
├── YC.json
public/
.env
.gitignore
drizzle.config.ts
next.config.ts
package.json
README.md
tsconfig.json
```

---

**Enjoy discovering open-source projects!**
