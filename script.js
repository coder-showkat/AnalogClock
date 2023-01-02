console.log('Analog Clock')

const changeClock = document.getElementById('changeClock')
let setClock = document.querySelector('.clockContainer');
let n = 0;
let clock = [
    "url('clock1.png')",
    "url('clock2.png')",
    "url('clock3.png')",
    "url('clock4.png')",
    "url('clock5.png')",
    "url('clock6.jpg')"
]

setClock.style.backgroundImage = clock[0];
setInterval(() => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let hr = 30 * h + m / 2;
    let min = 6 * m;
    let sec = 6 * s;
    document.getElementById('hour').style.transform = `rotate(${hr}deg)`
    document.getElementById('minute').style.transform = `rotate(${min}deg)`
    document.getElementById('second').style.transform = `rotate(${sec}deg)`
    let sound = new Audio('tick.mp3')
    sound.play();
}, 1000)


changeClock.addEventListener('click', () => {
    if (n == clock.length - 1) {
        n = 0;
        setClock.style.backgroundImage = clock[n];
    } else {
        n++
        setClock.style.backgroundImage = clock[n];
    }
})
