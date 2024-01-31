pipeline {
    agent any
    
    stages {
        stage("Clone Code") {
            steps {
                echo "Cloning the code"
                git url: "https://github.com/rahatislamld/DevopsTest.git", branch: "Testing"
            }
        }

        stage("Deploy") {
            steps {
                echo "Deploying the container"
                sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}
