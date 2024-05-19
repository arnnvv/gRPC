import {
  loadPackageDefinition,
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
  ServerWritableStream,
} from "@grpc/grpc-js";
import { PackageDefinition, loadSync } from "@grpc/proto-loader";
import { ProtoGrpcType } from "./generated/a";
import { MessageHandlers } from "./generated/example/Message";
import { Item, Item__Output } from "./generated/example/Item";
import { Novoid__Output } from "./generated/example/Novoid";
import { Items } from "./generated/example/Items";

const packageDef: PackageDefinition = loadSync("./a.proto", {});
const grpcObj = loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;

const example = grpcObj.example;

const todos: {
  id: number;
  text: string;
}[] = [];

const handler: MessageHandlers = {
  add: (
    call: ServerUnaryCall<Item__Output, Item>,
    callback: sendUnaryData<Item>,
  ) => {
    const item = {
      id: todos.length + 1,
      text: call.request.text,
    };
    todos.push(item);
    callback(null, item);
  },
  read: (
    call: ServerUnaryCall<Novoid__Output, Items>,
    callback: sendUnaryData<Items>,
  ) => {
    console.log(call);
    callback(null, { items: todos });
  },
  readStream: (call: ServerWritableStream<Novoid__Output, Item>) => {
    todos.forEach((todo: { id: number; text: string }): boolean =>
      call.write(todo),
    );
    call.end();
  },
};

const server = new Server();

server.addService(example.Message.service, handler);
server.bindAsync("0.0.0.0:40000", ServerCredentials.createInsecure(), () =>
  server.start(),
);
