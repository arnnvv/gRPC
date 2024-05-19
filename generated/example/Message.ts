// Original file: a.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  Item as _example_Item,
  Item__Output as _example_Item__Output,
} from "../example/Item";
import type {
  Items as _example_Items,
  Items__Output as _example_Items__Output,
} from "../example/Items";
import type {
  Novoid as _example_Novoid,
  Novoid__Output as _example_Novoid__Output,
} from "../example/Novoid";

export interface MessageClient extends grpc.Client {
  add(
    argument: _example_Item,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_example_Item__Output>,
  ): grpc.ClientUnaryCall;
  add(
    argument: _example_Item,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_example_Item__Output>,
  ): grpc.ClientUnaryCall;
  add(
    argument: _example_Item,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_example_Item__Output>,
  ): grpc.ClientUnaryCall;
  add(
    argument: _example_Item,
    callback: grpc.requestCallback<_example_Item__Output>,
  ): grpc.ClientUnaryCall;

  read(
    argument: _example_Novoid,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_example_Items__Output>,
  ): grpc.ClientUnaryCall;
  read(
    argument: _example_Novoid,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_example_Items__Output>,
  ): grpc.ClientUnaryCall;
  read(
    argument: _example_Novoid,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_example_Items__Output>,
  ): grpc.ClientUnaryCall;
  read(
    argument: _example_Novoid,
    callback: grpc.requestCallback<_example_Items__Output>,
  ): grpc.ClientUnaryCall;

  readStream(
    argument: _example_Novoid,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_example_Item__Output>;
  readStream(
    argument: _example_Novoid,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_example_Item__Output>;
}

export interface MessageHandlers extends grpc.UntypedServiceImplementation {
  add: grpc.handleUnaryCall<_example_Item__Output, _example_Item>;

  read: grpc.handleUnaryCall<_example_Novoid__Output, _example_Items>;

  readStream: grpc.handleServerStreamingCall<
    _example_Novoid__Output,
    _example_Item
  >;
}

export interface MessageDefinition extends grpc.ServiceDefinition {
  add: MethodDefinition<
    _example_Item,
    _example_Item,
    _example_Item__Output,
    _example_Item__Output
  >;
  read: MethodDefinition<
    _example_Novoid,
    _example_Items,
    _example_Novoid__Output,
    _example_Items__Output
  >;
  readStream: MethodDefinition<
    _example_Novoid,
    _example_Item,
    _example_Novoid__Output,
    _example_Item__Output
  >;
}
