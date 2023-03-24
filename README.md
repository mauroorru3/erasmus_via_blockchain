# erasmus_via_blockchain
Erasmus+ programme through the use of Blockchain technology.

Create the image:
docker build -f Dockerfile-ubuntu . -t university_chain_it_i

To run server on it:
docker run --rm -it -v $(pwd):/university_chain_it -w /university_chain_it -p 1317:1317 -p 3000:3000 -p 4500:4500 -p 5000:5000 -p 26657:26657 --name university_chain_it university_chain_it_i ignite chain serve --reset-once