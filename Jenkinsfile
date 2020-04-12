pipeline {
    agent { docker { image 'node:6.3' }}
    stages {
        stage('build') {
            steps {
                sh 'sudo npm i'
            }
        }
        stage('test') {
            steps {
                sh 'sudo npm run test'
            }
        }
    }
    post {
        always {
            junit 'junit.xml'
        }
    }
}