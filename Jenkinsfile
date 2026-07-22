pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "minhaappweb20261"
        VERSION = "latest"
    }

    stages {
        stage('Build Image') {
            steps {
                sh "docker build -t $DOCKER_IMAGE:$VERSION ."
            }
        }

        stage('Test') {
            steps {
                echo "Executando a bateria de teste."
            }
        }


        stage('Deploy') {
            steps {
                echo "Enviando imagem da aplicação para Deploy."
            }
        }
    }
}