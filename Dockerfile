FROM node:22-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy dependency files first to maximize Docker cache optimization
COPY package*.json ./

# Install project dependencies cleanly using 'npm ci'
RUN rm -f package-lock.json \
  && npm install --package-lock-only \
  && npm ci

# Copy the remaining project source code
COPY . .

# Build the project into optimized static assets (dist/ or build/)
RUN npm run build

FROM nginx:1.27-alpine

# Remove default NGINX public files
RUN rm -rf /usr/share/nginx/html/*

# Copy static assets from the builder stage
# Change "dist" to "build" if your setup uses Create React App instead of Vite
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to access the application outside the container
EXPOSE 80

# Start NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]