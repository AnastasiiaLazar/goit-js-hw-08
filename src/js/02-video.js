import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', setWatchingTime);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

function setWatchingTime(e) {
    localStorage.setItem('videoplayer-current-time', e.seconds)    
}

