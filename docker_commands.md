

docker images -a

docker rmi $(docker images -a -q)

single container 

cd -> <service directory>

docker build -t <service name>_blueprint:<version> <path to directory with docker file>

docker build -t file-manager-blueprint:v2 .
docker build -t proxy_blueprint:v1 .

docker run -p 3333:3333 file-manager-blueprint:v2

docker images 

docker run -p <Free port on your machine or select port on remote machine>:<Exposed PORT from Docker file> <IMAGE ID>

docker run -p 3002:3002 70d767d07e54 (for example)

kubectl

-deployment 

kubectl apply -f deployment.yaml

use/ un use kubernetes as place for images 

minikube docker-env -> ....

eval $(minikube docker-env -u)