import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const currentTime = localStorage.getItem("videoplayer-current-time");
if(currentTime) {
    player.setCurrentTime(Number(currentTime));
}


const onTimeUpdate = function(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds)
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));