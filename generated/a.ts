import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { MessageClient as _example_MessageClient, MessageDefinition as _example_MessageDefinition } from './example/Message';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  example: {
    Item: MessageTypeDefinition
    Items: MessageTypeDefinition
    Message: SubtypeConstructor<typeof grpc.Client, _example_MessageClient> & { service: _example_MessageDefinition }
    Novoid: MessageTypeDefinition
  }
}

