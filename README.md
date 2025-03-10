# Coder Backend 3 - Preentrega

## Autor
Emanuel Rigo

## Descripción
Preentrega del proyecto de backend para el curso de Coderhouse.

## Docker Hub
[Docker Hub - Emanuel Rigo](https://hub.docker.com/repository/docker/emanuelrigo91/entregafinalcoder/general)

## Instrucciones

### Requisitos
- Docker
- Docker Compose

### Pasos
1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2. Crea un archivo [.env](http://_vscodecontentref_/1):
    ```properties
    MONGO_URI=mongodb://mongo:27017/pet-adoption
    ```

3. Construye y levanta los contenedores:
    ```sh
    docker-compose up --build
    ```

4. Accede a `http://localhost:8080`.

## Endpoints
- `/api/users`
- `/api/pets`
- `/api/adoptions`
- `/api/sessions`
- `/api/mocks`

## Tecnologías
- Node.js
- Express
- MongoDB
- Mongoose
- Docker

## Contacto
[GitHub - Emanuel Rigo](https://github.com/tu-usuario)