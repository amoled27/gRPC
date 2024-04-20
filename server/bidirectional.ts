import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { BidirectionalClient as _bidirectional_BidirectionalClient, BidirectionalDefinition as _bidirectional_BidirectionalDefinition } from './bidirectional/Bidirectional';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  bidirectional: {
    Bidirectional: SubtypeConstructor<typeof grpc.Client, _bidirectional_BidirectionalClient> & { service: _bidirectional_BidirectionalDefinition }
    Message: MessageTypeDefinition
  }
}

