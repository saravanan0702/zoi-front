import io from 'socket.io-client';

var connections = {};

export const getSocketConnection = (socketName) => {
    console.log('connections', connections)
    if (connections[socketName]) {
        //database connection already exist. Return connection object
        console.log(socketName);
        return connections[socketName];
    } else {
        try {
            connections[socketName] = io('http://localhost:5000');
            connections[socketName].on('connect', () => {
                console.log('Wahey -> connected!', connections, connections[socketName]);
            });
            connections[socketName].on('error', (data) => {
                console.log('error occured!', data);
            });
        } catch (e) {
            console.log('catch exception', e)
        }
        return connections[socketName]
    }
}