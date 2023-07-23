# Build Stage
FROM node:16-alpine AS BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production Stage
FROM node:16-alpine AS PRODUCTION_STAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/package*.json ./
COPY --from=BUILD_IMAGE /app/.next ./.next

# Copying static files from our artifacts as per docs https://nextjs.org/docs/pages/api-reference/next-config-js/output

COPY --from=BUILD_IMAGE /app/public ./public
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules

COPY --from=BUILD_IMAGE /app/.next/static /app/.next/standalone/.next/static

#RUN ls -al -R /app/.next/standalone/_next/static

ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "/app/.next/standalone/server.js"]