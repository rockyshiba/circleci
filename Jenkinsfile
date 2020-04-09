pipeline {
    agent { docker { image 'node:6.3' }}
    stages {
        stage('build') {
            steps {
                sh 'npm i yarn'
                sh 'yarn'
                sh 'yarn test'
            }
        }
        stage('test') {
            steps {
                sh 'yarn test'
            }
        }
    }
    post {
        always {
            junit 'junit.xml'
        }
    }
}