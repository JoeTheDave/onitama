const Hapi = require('hapi');
const inert = require('inert');

const server = Hapi.server({
  host: '0.0.0.0',
  port: process.env.PORT || 3000,
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => reply.file('./dist/index.html'),
});

server.route({
  method: 'GET',
  path: '/main.bundle.js',
  handler: (request, reply) => reply.file('./dist/main.bundle.js'),
});

async function start() {
  try {
    await server.register(inert);
    await server.start();
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri); // eslint-disable-line no-console
}

start();
