const secondHand = document.querySelector('.clock__second'),
    minuteHand = document.querySelector('.clock__minute'),
    hourHand = document.querySelector('.clock__hour');

let now = new Date(),
    secRotation = now.getSeconds() * 6,
    minRotation;

// console.log(`hour: ${now.getHours()}`);
// console.log(`minute: ${now.getMinutes()}`);
// console.log(`second: ${now.getSeconds()}`);

secondHand.style.transform = `rotate(${secRotation}deg)`;

setInterval(() => {
    secRotation += 6;
    secondHand.style.transform = `rotate(${secRotation}deg)`;

    minRotation = now.getMinutes() * 6 + (secRotation * 6) / 360;
    minuteHand.style.transform = `rotate(${minRotation}deg)`;

    hourHand.style.transform = `rotate(${
        now.getHours() * 30 + (minRotation * 30) / 360
    }deg)`;
}, 1000);
