FROM node:22
WORKDIR /app

# Install curl and unzip (needed to fetch and extract files from GitHub)
RUN apt-get update && apt-get install -y curl unzip && rm -rf /var/lib/apt/lists/*

# Copy the folder containing the React app
COPY ./react-app-frontend ./

# Install dependencies
RUN npm install

# Verify installed packages and directory content
RUN ls -la /app

# Build the React app for production
RUN npm run build

# Expose the port and start the app
EXPOSE 3000
CMD ["npm", "start"]
