pipeline {
    agent {
        dockerContainer {
            image 'node:latest'
        }
    }
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Adicione aqui os comandos para deploy
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline concluída - limpeza pode ser feita aqui'
        }
        success {
            echo 'Pipeline executada com sucesso!'
        }
        failure {
            echo 'Pipeline falhou'
        }
    }
}