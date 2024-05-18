import { loadPackageDefinition } from "@grpc/grpc-js";
import { PackageDefinition, loadSync } from "@grpc/proto-loader";
import { ProtoGrpcType } from "./generated/a";

const packageDef: PackageDefinition = loadSync("a.proto", {});
const grpcObj = loadPackageDefinition(packageDef) as unknown as ProtoGrpcType;

const example = grpcObj.example;
