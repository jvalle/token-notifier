var fb       = require('firebase'),
    open     = require('open'),
    notifier = require('node-notifier'),
    config   = require('./config');

if (config.firebaseUrl) {
    var rooms = new fb(config.firebaseUrl + '/rooms');

    rooms.on('child_added', function (m) {
        sendNotification({
            title: 'Token Badlands Alert!',
            message: 'Someone wants to play dawg!',
            icon: __dirname + '/token-icon.jpg',
            sound: true,
            wait: true,
            // open: 'https://ss15-token-badlands.divshot.io/'
        });
    });
}

function sendNotification (notice) {
    notifier.notify(notice);
    notifier.on('click', function () {
        open('https://ss15-token-badlands.divshot.io/');
    });
}