pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "minhaappweb20261"
        VERSION = "latest"
    }

    stages {
        stage('Preparando') {
            echo "Iniciando processo de CI."
        }
        
        stage('Build Image') {
            steps {
                sh "docker build -t $DOCKER_IMAGE:$VERSION ."
            }
        }
    }
}