# Use an OpenJDK base image for Java
FROM openjdk:17

# Use ADD to download the JAR directly from GitHub
ADD https://github.com/${{ values.orgName }}/${{ values.repoName }}/raw/refs/heads/main/backend/target/weather-0.0.1-SNAPSHOT.jar main.jar

EXPOSE ${{ values.port }}
RUN chmod 755 main.jar
CMD ["java", "-Dserver.port=${{ values.port }}", "-jar", "main.jar"]
