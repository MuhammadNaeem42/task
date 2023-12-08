# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY . . 

# Install dependencies
RUN npm install

# Copy the rest 
# Expose port 3000 (or the port your Next.js app is configured to use)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "dev"]
