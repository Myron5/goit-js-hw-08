import Player from '@vimeo/player';
import trottle from 'lodash.throttle';

const player = new Player('vimeo-player');

const time = localStorage.getItem('videoplayer-current-time') || 0;
player.setCurrentTime(time);

player.on(
  'timeupdate',
  trottle(data => {
    player
      .getCurrentTime()
      .then(seconds =>
        localStorage.setItem(
          'videoplayer-current-time',
          JSON.stringify(seconds)
        )
      )
      .catch(error => console.log(error));
  }, 1000)
);
