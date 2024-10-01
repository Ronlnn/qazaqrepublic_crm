FROM maven:3.9-amazoncorretto-21 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests
RUN ls -l target/authentication-service-1.0-SNAPSHOT.jar

FROM openjdk:21-jdk-slim
WORKDIR /app
ARG JAR_FILE=target/authentication-service-1.0-SNAPSHOT.jar
COPY --from=build app/${JAR_FILE} /app/authentication-service.jar
ENTRYPOINT ["java", "-jar", "/app/authentication-service.jar"]
