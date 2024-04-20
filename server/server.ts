import path from "path";
import * as grpc from "@grpc/grpc-js";
import * as grpcProtoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./bidirectional";
import { BidirectionalHandlers } from "./bidirectional/Bidirectional";

const PORT = 50051;
const PROTO_FILE = "../proto/bidirectional.proto";

const pacakgeDef = grpcProtoLoader.loadSync(
  path.resolve(__dirname, PROTO_FILE)
);
const grpcObj = grpc.loadPackageDefinition(
  pacakgeDef
) as unknown as ProtoGrpcType;
const biDirPackage = grpcObj.bidirectional;

function main() {
  const server = getServer();
  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`Your server is running on PORT ${port}`);
    }
  );
}

function getServer() {
  const server = new grpc.Server();
  server.addService(biDirPackage.Bidirectional.service, {
    GetServerResponse: (call) => {
      call.write({ message: "Hello from the server" });
      call.on("data", (chunk) => {
        console.log(`Recieved message from the client ${JSON.stringify(chunk)}`);
      });
    },
  } as BidirectionalHandlers);

  return server;
}

main();
