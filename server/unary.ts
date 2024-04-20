import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { UnaryClient as _unary_UnaryClient, UnaryDefinition as _unary_UnaryDefinition } from './unary/Unary';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  unary: {
    Message: MessageTypeDefinition
    MessageResponse: MessageTypeDefinition
    Unary: SubtypeConstructor<typeof grpc.Client, _unary_UnaryClient> & { service: _unary_UnaryDefinition }
  }
}

