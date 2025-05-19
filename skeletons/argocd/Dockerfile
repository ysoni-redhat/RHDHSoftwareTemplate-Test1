# Use an OpenJDK base image for Java
FROM openjdk:17

# Set working directory
WORKDIR /app

# Copy application JAR file
COPY /target/*.jar main.jar

EXPOSE 8070
RUN chmod +x main.jar
CMD ["java", "-Dserver.port=8070", "-jar", "main.jar"]
