import io from 'socket.io-client';
import feathers from '@feathersjs/client';

// socket.io is exposed as the "socket" global
const socket = io('http://localhost:3030');
// @feathersjs/client is exposed as the "client" global
const client = feathers();

client.configure(feathers.socketio(socket));
client.configure(
  feathers.authentication({
    storage: window.localStorage,
  })
);

export default client;
