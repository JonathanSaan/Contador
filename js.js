const today = new Date().toISOString().split('T')[0];
let data = document.getElementsByName("setTodaysDate")[0].setAttribute('min', today);
let botao = document.querySelector('button');
let first_div = document.querySelector('#first');
let second_div = document.querySelector('#second');
let myInterval = -1;
second_div.style.display = "none";

function verifique() {
  const daysEL = document.querySelector("#dia");
  const hoursEL = document.querySelector("#hora");
  const minsEL = document.querySelector("#minuto");
  const secondsEL = document.querySelector("#segundo");

  const inputdata = document.querySelector('#setTodaysDate').value;

  function countdown () {
    const newYearsDate = new Date(inputdata);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEL.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minsEL.innerHTML = formatTime(mins);
    secondsEL.innerHTML = formatTime(seconds);
  }
  function formatTime(time) {
    return time < 10 ? `0${time}`: time;
  }

  if (inputdata == '' || inputdata == today) {
    return false;
  }

  if (second_div.style.display === "none") {
    first.style.display = "none";
    second_div.style.display = "block";
    countdown();
    myInterval = setInterval(countdown, 100);
  }
}
botao.addEventListener("click", verifique);


function reiniciar_do_zero() {
  reiniciar = document.querySelector("#reiniciar");
  first.style.display = "block";
  second_div.style.display = "none";
  clearInterval(myInterval)
}
reiniciar.addEventListener("click", reiniciar_do_zero);
