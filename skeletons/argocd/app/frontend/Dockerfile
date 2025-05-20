FROM node:22
WORKDIR /app

# Install curl and unzip (needed to fetch and extract files from GitHub)
RUN apt-get update && apt-get install -y curl unzip && rm -rf /var/lib/apt/lists/*

# Download package.json from GitHub
ADD https://github.com/${{ values.orgName }}/${{ values.repoName }}/raw/refs/heads/main/frontend/package.json .

# Install dependencies
RUN npm install

# Download and extract the zip file containing the React app
ADD https://github.com/${{ values.orgName }}/${{ values.repoName }}/raw/refs/heads/main/frontend/react-frontend.zip .
RUN unzip react-frontend.zip && rm react-frontend.zip

# Move extracted content to /app (if not already directly in /app)
# Adjust this command based on the ZIP's folder structure
RUN mv react-frontend/* . && rmdir react-frontend || true

# Verify installed packages and directory content
RUN ls -la /app

# Build the React app for production
RUN npm run build

# Expose the port and start the app
EXPOSE 3000
CMD ["npm", "start"]
