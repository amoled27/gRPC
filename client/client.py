from __future__ import print_function

import grpc
import bidirectional_pb2_grpc as bidirectional_pb2_grpc
import bidirectional_pb2 as bidirectional_pb2

def create_message(message):
    return bidirectional_pb2.Message (
        message= message
    )

def generate_random_messages():
    messages = [
        create_message("--First--"),
        create_message("--Second--"),
        create_message("--Third--"),
        create_message("--Fourth--")
    ]
    for msg in messages:
        print("Sending %s Message from the client. " % msg.message)
        yield msg

def send_messages(data):
    responses = data.GetServerResponse(generate_random_messages())
    for response in responses:
        print("Recieved message from the server --- %s" % response.message)

def run():
    with grpc.insecure_channel('localhost:50051') as channel:
        data = bidirectional_pb2_grpc.BidirectionalStub(channel)
        send_messages(data)

if __name__ == '__main__':
    run()