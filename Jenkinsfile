pipeline {
    agent any

    stages {
        stage("Clone Code") {
            steps {
                echo "Cloning the code"
                git url: "https://github.com/rahatislamld/DevopsTest.git", branch: "Testing"
            }
        }

        stage("Build Server Image") {
            steps {
                echo "Building the server image"
                script {
                    // Add server-specific build steps as needed
                    sh "docker build -t merncrudserver1 ./server"
                }
            }
        }

        stage("Build Client Image") {
            steps {
                echo "Building the client image"
                script {
                    // Add client-specific build steps as needed
                    sh "docker build -t merncrudclient1 ./client"  
                }
            }
        }

        stage("Push to Docker Hub") {
            steps {
                echo "Pushing images to Docker Hub"
                script {
                    withCredentials([usernamePassword(credentialsId: "dockerHub", passwordVariable: "dockerHubPass", usernameVariable: "dockerHubUser")]) {
                        sh "docker tag merncrudserver1 ${env.dockerHubUser}/merncrudserver1:latest"
                        sh "docker tag merncrudclient1 ${env.dockerHubUser}/merncrudclient1:latest"
                        sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                        sh "docker push ${env.dockerHubUser}/merncrudserver1:latest"
                        sh "docker push ${env.dockerHubUser}/merncrudclient1:latest"
                    }
                }
            }
        }

        stage("Deploy") {
            steps {
                echo "Deploying the containers"
                script {
                    sh "docker-compose down && docker-compose up -d"
                }
            }
        }
    }
}
