pipeline {
    agent { 
        docker { 
                image 'node:6.3'
                args '-p 3000:3000' 
            }
        }
    environment {
        CI = 'true'
    }
    stages {
        stage('build') {
            steps {
                sh 'npm i'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test'
            }
        }
    }
    post {
        always {
            junit 'junit.xml'
        }
    }
}