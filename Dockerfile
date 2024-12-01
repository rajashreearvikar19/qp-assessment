# Use official Node.js image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Install TypeScript globally
RUN npm install -g typescript

# Copy the rest of the application code
COPY . .

# Build TypeScript code into dist folder
RUN tsc

# Expose the port the app will run on
EXPOSE 3000

# Run the app
CMD ["node", "dist/server.js"]
