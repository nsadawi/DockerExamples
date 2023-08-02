# Use an official Node.js runtime as the base image
FROM node:14-alpine
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install application dependencies
RUN npm install --only=production
# Copy the rest of the application source code
COPY . .
# Expose a port that the application listens on
EXPOSE 3000
# Define the command to run the application when the container starts
CMD ["node", "app.js"]

