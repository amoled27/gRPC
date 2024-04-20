// Original file: ../proto/unary.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Message as _unary_Message, Message__Output as _unary_Message__Output } from '../unary/Message';
import type { MessageResponse as _unary_MessageResponse, MessageResponse__Output as _unary_MessageResponse__Output } from '../unary/MessageResponse';

export interface UnaryClient extends grpc.Client {
  GetServerResponse(argument: _unary_Message, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_unary_MessageResponse__Output>): grpc.ClientUnaryCall;
  GetServerResponse(argument: _unary_Message, metadata: grpc.Metadata, callback: grpc.requestCallback<_unary_MessageResponse__Output>): grpc.ClientUnaryCall;
  GetServerResponse(argument: _unary_Message, options: grpc.CallOptions, callback: grpc.requestCallback<_unary_MessageResponse__Output>): grpc.ClientUnaryCall;
  GetServerResponse(argument: _unary_Message, callback: grpc.requestCallback<_unary_MessageResponse__Output>): grpc.ClientUnaryCall;
  getServerResponse(argument: _unary_Message, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_unary_MessageResponse__Output>): grpc.ClientUnaryCall;
  getServerResponse(argument: _unary_Message, metadata: grpc.Metadata, callback: grpc.requestCallback<_unary_MessageResponse__Output>): grpc.ClientUnaryCall;
  getServerResponse(argument: _unary_Message, options: grpc.CallOptions, callback: grpc.requestCallback<_unary_MessageResponse__Output>): grpc.ClientUnaryCall;
  getServerResponse(argument: _unary_Message, callback: grpc.requestCallback<_unary_MessageResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UnaryHandlers extends grpc.UntypedServiceImplementation {
  GetServerResponse: grpc.handleUnaryCall<_unary_Message__Output, _unary_MessageResponse>;
  
}

export interface UnaryDefinition extends grpc.ServiceDefinition {
  GetServerResponse: MethodDefinition<_unary_Message, _unary_MessageResponse, _unary_Message__Output, _unary_MessageResponse__Output>
}
