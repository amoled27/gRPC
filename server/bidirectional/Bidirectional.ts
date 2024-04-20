// Original file: ../proto/bidirectional.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Message as _bidirectional_Message, Message__Output as _bidirectional_Message__Output } from '../bidirectional/Message';

export interface BidirectionalClient extends grpc.Client {
  GetServerResponse(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_bidirectional_Message, _bidirectional_Message__Output>;
  GetServerResponse(options?: grpc.CallOptions): grpc.ClientDuplexStream<_bidirectional_Message, _bidirectional_Message__Output>;
  getServerResponse(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_bidirectional_Message, _bidirectional_Message__Output>;
  getServerResponse(options?: grpc.CallOptions): grpc.ClientDuplexStream<_bidirectional_Message, _bidirectional_Message__Output>;
  
}

export interface BidirectionalHandlers extends grpc.UntypedServiceImplementation {
  GetServerResponse: grpc.handleBidiStreamingCall<_bidirectional_Message__Output, _bidirectional_Message>;
  
}

export interface BidirectionalDefinition extends grpc.ServiceDefinition {
  GetServerResponse: MethodDefinition<_bidirectional_Message, _bidirectional_Message, _bidirectional_Message__Output, _bidirectional_Message__Output>
}
