import {
  ServiceError,
  credentials,
  loadPackageDefinition,
} from "@grpc/grpc-js";
import { PackageDefinition, loadSync } from "@grpc/proto-loader";
import { ProtoGrpcType } from "./generated/a";
import { Item__Output } from "./generated/example/Item";

const packageDef: PackageDefinition = loadSync("a.proto", {});
const grpcObj = loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;

const example = grpcObj.example;

const client = new example.Message(
  "localhost:40000",
  credentials.createInsecure(),
);

client.add(
  {
    id: 1,
    text: "hello",
  },
  (e: ServiceError | null, res: Item__Output | undefined) => {
    try {
      console.log(`Received from server: ${JSON.stringify(res)}`);
    } catch {
      console.error(`Error in receiving: ${JSON.stringify(e)}`);
    }
  },
);
