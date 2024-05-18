import {
  loadPackageDefinition,
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from "@grpc/grpc-js";
import { PackageDefinition, loadSync } from "@grpc/proto-loader";
import { ProtoGrpcType } from "./generated/a";
import { MessageHandlers } from "./generated/example/Message";
import { Item, Item__Output } from "./generated/example/Item";
import { void__Output } from "./generated/example/void";
import { Items } from "./generated/example/Items";

const packageDef: PackageDefinition = loadSync("a.proto", {});
const grpcObj = loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;

const example = grpcObj.example;

const handler: MessageHandlers = {
  add: (
    call: ServerUnaryCall<Item__Output, Item>,
    callback: sendUnaryData<Item>,
  ) => {
    console.log(call);
  },
  read: (
    call: ServerUnaryCall<void__Output, Items>,
    callback: sendUnaryData<Items>,
  ) => {
    console.log(call);
  },
};

const server = new Server();

server.addService(example.Message.service, handler);
server.bind("0.0.0.0:40000", ServerCredentials.createInsecure());

server.start();
