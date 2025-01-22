# Kubernetes Project Documentation

## Project Overview

This project demonstrates a simple Kubernetes setup with two services: `web` and `nginx`. The `web` service is a Node.js application that serves a basic webpage, while the `nginx` service is another Node.js application that fetches data from the `nginx` service and displays it.

## Project Structure

```
combined.yaml
deployment.yaml
kubectl.txt
nginx/
    Dockerfile
    index.mjs
    package.json
nginx.yaml
service.yaml
web/
    Dockerfile
    index.mjs
    package.json
```

### `web` Service

- **Dockerfile**: Defines the Docker image for the `web` service.
- **index.mjs**: The main application file for the `web` service.
- **package.json**: Contains the dependencies and scripts for the 
`web` service.

### `nginx` Service

- **Dockerfile**: Defines the Docker image for the `nginx` service.
- **index.mjs**: The main application file for the `nginx` service.
- **package.json**: Contains the dependencies and scripts for the `nginx` service.

### Kubernetes Configuration

- **combined.yaml**: Contains the service and deployment configuration for the `web-to-nginx` service.
- **deployment.yaml**: Defines the deployment for the `simple` service.
- **nginx.yaml**: Contains the service and deployment configuration for the `nginx` service.
- **service.yaml**: Defines the service for the `simple` service.

### `kubectl.txt`

Contains various `kubectl` commands for managing the Kubernetes cluster.

## Setup Instructions

### Prerequisites

- Docker
- Kubernetes
- kubectl

### Building Docker Images

Navigate to the `web` and `nginx` directories and build the Docker images:

```sh
cd web
docker build -t your-dockerhub-username/web .

cd ../nginx
docker build -t your-dockerhub-username/nginx .
```

### Pushing Docker Images

Push the Docker images to Docker Hub:

```sh
docker push your-dockerhub-username/web
docker push your-dockerhub-username/nginx
```

### Deploying to Kubernetes

Apply the Kubernetes configurations:

```sh
kubectl apply -f combined.yaml
kubectl apply -f deployment.yaml
kubectl apply -f nginx.yaml
kubectl apply -f service.yaml
```

### Verifying the Deployment

Check the status of the pods and services:

```sh
kubectl get pods
kubectl get services
```

## Accessing the Services

- The `web` service will be available on port 3333.
- The `nginx` service will be available on port 80.

## Cleanup

To delete the deployments and services, run:

```sh
kubectl delete -f combined.yaml
kubectl delete -f deployment.yaml
kubectl delete -f nginx.yaml
kubectl delete -f service.yaml
```

## Additional Information

For more `kubectl` commands and usage, refer to the `kubectl.txt`
file.

