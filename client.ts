import {
  ServiceError,
  credentials,
  loadPackageDefinition,
} from "@grpc/grpc-js";
import { PackageDefinition, loadSync } from "@grpc/proto-loader";
import { ProtoGrpcType } from "./generated/a";
import { Item__Output } from "./generated/example/Item";
import { Items__Output } from "./generated/example/Items";

const packageDef: PackageDefinition = loadSync("a.proto", {});
const grpcObj = loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;

const example = grpcObj.example;

const text: string = process.argv[2];

const client = new example.Message(
  "localhost:40000",
  credentials.createInsecure(),
);

client.add(
  {
    id: -1,
    text: text,
  },
  (e: ServiceError | null, res: Item__Output | undefined) => {
    try {
      console.log(`Added to server: ${JSON.stringify(res)}`);
    } catch {
      console.error(`Error in adding: ${JSON.stringify(e)}`);
    }
  },
);

client.read({}, (e: ServiceError | null, res: Items__Output | undefined) => {
  try {
    console.log(`Received from server: ${JSON.stringify(res)}`);
    //if (!res?.items)
    //  res?.items.forEach((a: Item__Output) => console.log(a.text));
  } catch {
    console.error(`Error in receiving: ${JSON.stringify(e?.message)}`);
  }
});
