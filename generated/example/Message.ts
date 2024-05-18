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
  void_example as _example_void,
  void__Output as _example_void__Output,
} from "../example/void";

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
    argument: _example_void,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_example_Items__Output>,
  ): grpc.ClientUnaryCall;
  read(
    argument: _example_void,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_example_Items__Output>,
  ): grpc.ClientUnaryCall;
  read(
    argument: _example_void,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_example_Items__Output>,
  ): grpc.ClientUnaryCall;
  read(
    argument: _example_void,
    callback: grpc.requestCallback<_example_Items__Output>,
  ): grpc.ClientUnaryCall;
}

export interface MessageHandlers extends grpc.UntypedServiceImplementation {
  add: grpc.handleUnaryCall<_example_Item__Output, _example_Item>;

  read: grpc.handleUnaryCall<_example_void__Output, _example_Items>;
}

export interface MessageDefinition extends grpc.ServiceDefinition {
  add: MethodDefinition<
    _example_Item,
    _example_Item,
    _example_Item__Output,
    _example_Item__Output
  >;
  read: MethodDefinition<
    _example_void,
    _example_Items,
    _example_void__Output,
    _example_Items__Output
  >;
}
