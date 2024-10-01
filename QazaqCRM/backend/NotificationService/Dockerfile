FROM maven:3.9-amazoncorretto-21 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests
RUN ls -l target/notification-service-1.0-SNAPSHOT.jar

FROM openjdk:21-jdk-slim
WORKDIR /app
ARG JAR_FILE=target/notification-service-1.0-SNAPSHOT.jar
COPY --from=build app/${JAR_FILE} /app/notification-service.jar
ENTRYPOINT ["java", "-jar", "/app/notification-service.jar"]
