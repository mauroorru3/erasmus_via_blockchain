# Erasmus via blockchain

Erasmus+ programme through the use of Blockchain technology.

The submitted software is a blockchain built using [Cosmos SDK](https://v1.cosmos.network/sdk) and created with [Ignite CLI](https://ignite.com/cli).

The chain enables several possibilities. The main ones are as follows:
- entry of a student with all her/his related information and examinations from her/his study plan;
- assignment of an exam grade by a professor to a student;
- Erasmus+ programme request of a student to another university in a foreign chain.

N.B. the names, surnames and addresses present are fictitious.

## Installation

First of all, you need to install [Docker](https://www.docker.com/), which is a tool that is used to automate the deployment of applications in lightweight containers so that applications can work efficiently in different environments. The installation guide for the Ubuntu platform is available [here](https://docs.docker.com/desktop/install/ubuntu/).

## Usage



```go
# Create the image:
docker build -f Dockerfile-ubuntu . -t university_chain_it_i

# To run the chain:
docker run --rm -it -v $(pwd):/university_chain_it -w /university_chain_it -p 1317:1317 -p 3000:3000 -p 4500:4500 -p 5000:5000 -p 26657:26657 --name university_chain_it university_chain_it_i ignite chain serve --reset-once

# To interact with the running chain open another shell and try: 
docker exec -it university_chain_it university_chain_itd status

# To initialize the chain
export bob=$(sudo docker exec university_chain_it university_chain_itd keys show bob -a) 
sudo docker exec -it university_chain_it university_chain_itd tx universitychainit configure-chain --from $bob --gas auto 

To show the chain info
sudo docker exec -it university_chain_it university_chain_itd query universitychainit show-chain-info 

# To insert a new student
sudo docker exec -it university_chain_it university_chain_itd tx universitychainit register-new-student unipi Mario Rossi master cs "Computer Science" --from $bob --gas auto 

# To show the inserted student
sudo docker exec -it university_chain_it university_chain_itd query universitychainit show-stored-student unipi_1 
```

## Contributing



## License

[MIT](https://choosealicense.com/licenses/mit/)