const localTimeOutput = document.querySelector('.local-time');
const londonTimeOutput = document.querySelector('.london-time');

const intervalCurrentTime = setInterval( () => {
    const currentDate = new Date();
    localTimeOutput.innerHTML = currentDate.toLocaleTimeString();
}, 1000);

const intervalLondonTime = setInterval( () => {
    const currentDate = new Date();
    londonTimeOutput.innerHTML = currentDate.toLocaleTimeString('en-GB', {timeZone: 'Europe/London'});
}, 1000);
