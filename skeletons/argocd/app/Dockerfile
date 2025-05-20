# Use an OpenJDK base image for Java
FROM openjdk:17

# Set working directory
# WORKDIR /app

# Use ADD to download the JAR directly from GitHub
ADD https://github.com/${{ values.orgName }}/${{ values.repoName }}/raw/refs/heads/main/target/weather-0.0.1-SNAPSHOT.jar main.jar

# Copy application JAR file
# COPY /target/*.jar main.jar

EXPOSE ${{ values.port }}
RUN chmod +x main.jar
CMD ["java", "-Dserver.port=${{ values.port }}", "-jar", "main.jar"]
