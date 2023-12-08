# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the applications code
COPY . .

# Expose the port your app runs on
EXPOSE 5002

# Start the application
CMD ["node", "server.js"]
