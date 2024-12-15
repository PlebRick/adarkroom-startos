# Use the latest stable Node.js version
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the necessary files into the container
COPY ./adarkroom . 

# Install dependencies
RUN npm install

# Install curl for health checks
RUN apk add --no-cache curl

# Create the data directory and set proper permissions
RUN mkdir -p /app/data && chown -R node:node /app/data

# Set user to non-root for security
USER node

# Declare the volume for persistent storage
VOLUME /app/data

# Expose the correct port (8081)
EXPOSE 8081

# Define the default command to run the application
CMD ["npm", "start"]
