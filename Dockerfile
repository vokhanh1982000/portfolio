# Use an official Node.js runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --f

# Copy the rest of the application code to the working directory
COPY . .

# RUN npm run build

# Expose port 3000
EXPOSE 3000

# Run the Next.js development server
CMD ["npm", "run", "dev"]