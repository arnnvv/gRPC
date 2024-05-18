import {
  loadPackageDefinition,
  Server,
  ServerCredentials,
} from "@grpc/grpc-js";
import { PackageDefinition, loadSync } from "@grpc/proto-loader";
import { ProtoGrpcType } from "./generated/a";

const packageDef: PackageDefinition = loadSync("a.proto", {});
const grpcObj = loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;

const example = grpcObj.example;

const server = new Server();
server.bind("0.0.0.0:40000", ServerCredentials.createInsecure());

server.addService(example.Message.service, {
  add: (call, callback) => {
    console.log(call);
  },
  read: (call, callback) => {
    console.log(call);
  },
});

server.start();
