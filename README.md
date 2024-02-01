Mern App CI/CD with GitHub,Docker,DockerHub,jenkins,Ec2
------------------

install docker 

sudo apt-get update
sudo apt install docker.io
docker ps
sudo chown $USER /var/run/docker.sock



install java 

sudo apt update
sudo apt install fontconfig openjdk-17-jre
java -version

install Jenkins 

sudo wget -O /etc/yum.repos.d/jenkins.repo \
https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key
sudo dnf upgrade
sudo dnf install fontconfig java-17-openjdk
sudo dnf install jenkins
sudo systemctl daemon-reload

I have made a documentation about this project 
here is the link https://docs.google.com/document/d/1U84_U3w1Cb_9WuzVkfXcOJ_bPfBxjMQ6Dn-A8IeHnwA/edit
