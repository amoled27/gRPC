# gRPC communication between Python & Typescript

Demo for gRPC communication between Python and Typescript

## Usage
**Step 1**:  Open two separate terminals and **cd** into client and server folder respectively
**Step 2**:  In client folder (Python code) run : 

    python3 client.py

**Step 3**: In Server folder, install the dependencies by running :

    yarn install

**Step 4**: Run server by using the following command:

    yarn start

## Modifiying Proto

If you modify proto run following command to update your files for python: 

    python -m grpc_tools.protoc --proto_path=../proto ../proto/bidirectional.proto --python_out=. --grpc_python_out=.

For Typescript simply run

    yarn run gen-proto

or 

    yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=. ../proto/*.proto
