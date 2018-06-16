function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const hourDegrees = ((hours / 12) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');
    const hands = document.querySelectorAll('.hand');

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

    if(secondsDegrees >= 444) {
      hands.forEach(function(hand){
        secondHand.style.transition = 'none';
      }) 
    } else if(secondsDegrees < 96) {
      hands.forEach(function(hand){
        secondHand.style.transition = 'none';
      })
    } else {
      hands.forEach(function(hand){
        secondHand.style.transition = 'all 0.05s';
      })
    }

  } 

  setInterval(setDate, 1000);