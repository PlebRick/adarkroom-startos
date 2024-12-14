# Use the latest stable Node.js version
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the necessary files
COPY ./adarkroom .

# Install dependencies
RUN npm install

# Expose the correct port (8080)
EXPOSE 8080

# Define the default command to run the application
CMD ["npm", "start"]




# A simpler Dockerfile from Lucy
# FROM node:20-alpine

# COPY ./adarkroom .

# RUN npm install

