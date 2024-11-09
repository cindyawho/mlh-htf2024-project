# Step 1: Build the React app
FROM node:18-alpine as build

# Set the working directory for the build step
WORKDIR /app

# Copy the package.json and package-lock.json from the current directory (my-app)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your React app (including the src folder) from the current directory
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the React app using Nginx
FROM nginx:alpine

# Copy the built React app into the Nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
