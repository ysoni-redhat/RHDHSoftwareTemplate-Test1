# Use an OpenJDK base image for Java
FROM openjdk:17

# Set working directory
WORKDIR /app

# Copy application JAR file
COPY /target/*.jar main.jar

EXPOSE ${{ values.port }}
RUN chmod +x main.jar
CMD ["java", "-Dserver.port=${{ values.port }}", "-jar", "main.jar"]
