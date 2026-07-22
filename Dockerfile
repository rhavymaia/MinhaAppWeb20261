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