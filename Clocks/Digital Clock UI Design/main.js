function clock() {
  const hours = document.querySelector(".digital-clock__time-hours");
  const minutes = document.querySelector(".digital-clock__time-minutes");
  const seconds = document.querySelector(".digital-clock__time-seconds");

  console.log(hours);

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}

const interval = setInterval(clock, 1000);
