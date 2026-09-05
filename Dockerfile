# syntax=docker/dockerfile:1

# ══════════════════════════════════════════════════════════════════
#  Brolly Exam Prep — Vite + React SPA
#
#  Two stages: Node builds the bundle, nginx serves it. The Node layer
#  and its ~200 MB of dependencies never reach the final image.
# ══════════════════════════════════════════════════════════════════

# ── Stage 1: build ────────────────────────────────────────────────
FROM node:20-alpine AS build

WORKDIR /app

# Dependencies first, so this layer stays cached until the lockfile
# actually changes. Copying the whole tree first would bust it on
# every source edit.
COPY package.json package-lock.json ./
RUN npm ci

# Then the sources, including public/ — Vite copies that into dist/.
COPY . .

RUN npm run build


# ── Stage 2: serve ────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runtime

# SPA fallback, caching and security headers. Mirrors public/.htaccess
# so the container behaves like the Apache and Netlify deployments.
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

# The container listens on 80; docker-compose maps that to 3200 on the
# host. Changing the published port needs no rebuild.
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
