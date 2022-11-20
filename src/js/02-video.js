import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(setWatchingTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

function setWatchingTime(e) {
    localStorage.setItem('videoplayer-current-time', e.seconds)    
};