function currentTime() {
  const ho = document.querySelector(".h");
  const mi = document.querySelector(".m");
  const se = document.querySelector(".s");
  const ap = document.querySelector(".ap");

  const da = document.querySelector(".d");
  const mo = document.querySelector(".mo");
  const ye = document.querySelector(".y");

  const seconds = document.querySelector(".seconds");
  const minuts = document.querySelector(".minuts");
  const hours = document.querySelector(".hours");

  const addAlrm = document.querySelector(".addAlarmBtn");
  const tf = document.querySelector(".timeForm");
  // const afterSaveAlrm = document.querySelector(".saveAlarm");
  const setAlrm = document.querySelector(".setTimeAlarm");

  //   addAlrm.onclick = function () {
  //     tf.innerHTML = `
  //         <input type="time" class="setTimeAlarm" value="12:00" id="">
  //         <button class="saveAlarm">Save</button>
  //     `;
  //   };

  // afterSaveAlrm.onclick = () => {

  // };

  let tim = new Date();
  let hour = tim.getHours();
  let mint = tim.getMinutes();
  let seco = tim.getSeconds();

  let dat = tim.getDate();
  let mon = tim.getMonth();
  let yr = tim.getFullYear();

  const swtch = document.querySelector(".switch");
  const swtchBd = document.querySelector(".switchBody");
  const timInp = document.querySelector(".time");
  let ti = timInp.value;
  swtch.onclick = (e) => {
    if (swtchBd.style.justifyContent == "left") {
      swtchBd.style.justifyContent = "right";
      swtchBd.style.backgroundColor = "#76a762";
      localStorage.setItem("alarm", setAlrm.value);
      if(timInp.value != ti){
          swtchBd.style.justifyContent = "left";
          swtchBd.style.backgroundColor = "#3c3c3c";
      }
    } else {
      swtchBd.style.justifyContent = "left";
      swtchBd.style.backgroundColor = "#3c3c3c";
      localStorage.removeItem("alarm");
    }
    e.preventDefault();
  };

  const ca = document.querySelector(".closeAlarm");
  let audio;
  function alarmPlay() {
    audio = new Audio("alarm.mp4");
    let time;
    if (hour > 9) {
      if (mint > 9) {
        time = `${hour}:${mint}`;
      } else {
        time = `${hour}:0${mint}`;
      }
    } else {
      if (mint > 9) {
        time = `0${hour}:${mint}`;
      } else {
        time = `0${hour}:0${mint}`;
      }
    }
    const ls = localStorage.getItem("alarm");
    if (time === ls) {
      audio.play();
      ca.innerHTML = `<button class="sa">Stop Alarm</button>`;
    }
  }
  
  if (seco === 0) {
    alarmPlay();
  }

  function month(mon) {
    if (mon == 0) {
      mo.innerHTML = "January";
    } else if (mon == 1) {
      mo.innerHTML = "February";
    } else if (mon == 2) {
      mo.innerHTML = "March";
    } else if (mon == 3) {
      mo.innerHTML = "April";
    } else if (mon == 4) {
      mo.innerHTML = "May";
    } else if (mon == 5) {
      mo.innerHTML = "June";
    } else if (mon == 6) {
      mo.innerHTML = "July";
    } else if (mon == 7) {
      mo.innerHTML = "August";
    } else if (mon == 8) {
      mo.innerHTML = "September";
    } else if (mon == 9) {
      mo.innerHTML = "October";
    } else if (mon == 10) {
      mo.innerHTML = "November";
    } else if (mon == 11) {
      mo.innerHTML = "December";
    }
  }

  ho.innerHTML = hour;
  if (hour >= 12) {
    ap.innerHTML = "PM";
    ho.innerHTML = hour - 12;
  }
  mi.innerHTML = mint;
  se.innerHTML = seco;

  da.innerHTML = dat;
  month(mon);
  ye.innerHTML = yr;

  const hr_rotation = 30 * hour + mint / 2; //converting current time
  const min_rotation = 6 * mint;
  const sec_rotation = 6 * seco;

  hours.style.transform = `rotate(${hr_rotation}deg)`;
  minuts.style.transform = `rotate(${min_rotation}deg)`;
  seconds.style.transform = `rotate(${sec_rotation}deg)`;

  setTimeout(() => {
    currentTime();
  }, 1000);
}
currentTime();
