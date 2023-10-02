// Correction
let totalSeconds;
let interval;

const countDown = () => {
  console.log(totalSeconds);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const sec = seconds < 10 ? "0" + seconds : seconds;
  countdownDisplay.textContent = `${minutes} : ${sec}`;

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    countdownDisplay.textContent = "0 : 0";
    clearInterval(interval);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(choice.value)) {
    alert("Entrez un chiffre !!");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
    clearInterval(interval);
    interval = setInterval(countDown, 1000);
  }
});

// Exercice

// start.addEventListener("click", (e) => {
//   e.preventDefault();
//   let choiceUser = choice.value;
//   let totalSeconds = choice.value * 60;
//   let minutes = Math.floor(totalSeconds / 60);
//   let seconds = totalSeconds % 60;

//   if (choiceUser > 0) {
//     const interval = setInterval(() => {
//       countdownDisplay.innerHTML = `${minutes} : ${seconds--}`;
//       if (seconds < 0) {
//         minutes--;
//         seconds = 59;
//         console.log(seconds);
//       }
//       if (minutes == 0 && seconds == 0) {
//         countdownDisplay.innerHTML = `0 : 00`;
//         clearInterval(interval);
//       }
//     }, 1000);
//   }
// });
