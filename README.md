# Portfolio (React + Vite)

This project is ready to run locally and deploy to Dokploy with a Docker-based workflow.

## Local development

```bash
npm install
npm run dev
```

## Docker

Build and run locally:

```bash
docker compose up --build -d
```

The app will be available on `http://localhost`.

## Dokploy auto-deploy on push

1. Push this repository to GitHub/GitLab.
2. In Dokploy, create a new **Application** from your Git repository.
3. Set build method to **Dockerfile** (Dockerfile path: `Dockerfile`).
4. Expose container port **80**.
5. Enable **Auto Deploy** (webhook) in Dokploy for your branch (for example `main`).
6. Add the webhook in your Git provider (if Dokploy doesn’t add it automatically).

After this, each push to the selected branch will trigger Dokploy to rebuild and redeploy automatically.
