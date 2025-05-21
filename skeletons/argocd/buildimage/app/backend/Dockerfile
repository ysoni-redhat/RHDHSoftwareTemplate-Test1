# Use an OpenJDK base image for Java
FROM openjdk:17

# Use ADD to download the JAR directly from GitHub
ADD https://github.com/${{ values.orgName }}/${{ values.repoName }}/raw/refs/heads/main/backend/target/weather-0.0.1-SNAPSHOT.jar main.jar

EXPOSE ${{ values.backendport }}
RUN chmod 755 main.jar
CMD ["java", "-Dserver.port=${{ values.backendport }}", "-jar", "main.jar"]
