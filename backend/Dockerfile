# Use an official Node.js runtime as a parent image
FROM node:16

# Install Git
RUN apt-get update && apt-get install -y git

# Set the working directory
WORKDIR /app

# Clone the latest code from GitHub
RUN git clone https://github.com/szankdav/bookWorms.git .

# Set the working directory to the backend folder inside the cloned repo
WORKDIR /app/backend

# Install Node.js dependencies
RUN npm install

# Run the server
CMD ["npm", "run", "start:dev"]
