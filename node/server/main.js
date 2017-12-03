const grpc = require('grpc');

const run = () => {
  const server = new grpc.Server();
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
};

run();
