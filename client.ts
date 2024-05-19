import {
  ClientReadableStream,
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

/*
client.read({}, (e: ServiceError | null, res: Items__Output | undefined) => {
  try {
    console.log(`Received from server: ${JSON.stringify(res)}`);
  } catch {
    console.error(`Error in receiving: ${JSON.stringify(e?.message)}`);
  }
});
Shoves everything at once lot of processing in big case
*/

const call: ClientReadableStream<Item__Output> = client.readStream({});
call.on("data", (item) =>
  console.log(`Received from server: ${JSON.stringify(item)}`),
);

call.on("end", () => console.log(`Server ended stream`));
