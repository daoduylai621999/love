const yourDate = new Date("July 11 2021 00:00:00 GMT+0700");
const songName = {
  "baku": "Baku",
};

const music = [
  "baku",
];

const quotes = [
  "I love Boruto",
];

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    const quote = document.getElementById("quote-content");
    const rootTime = document.querySelector("time");
    const audio = document.getElementById("audio");
    let currtentQuote = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[currtentQuote];
    document.querySelector("anni").textContent = `${
      yourDate.getDate() > 9 ? yourDate.getDate() : "0" + yourDate.getDate()
    }-${
      yourDate.getMonth() > 8
        ? yourDate.getMonth() + 1
        : "0" + (yourDate.getMonth() + 1)
    }-${yourDate.getFullYear()}`;

    document.querySelector("date").textContent =
      Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) +
      " DAYS";

    function olock() {
      var today = new Date(),
        hrs = Math.floor(Math.floor((today - yourDate) / 1000) / 60 / 60) % 24,
        min = Math.floor(Math.floor((today - yourDate) / 1000) / 60) % 60,
        sec = Math.floor((today - yourDate) / 1000) % 60;
      rootTime.textContent = `${hrs > 9 ? hrs : "0" + hrs}:${
        min > 9 ? min : "0" + min
      }:${sec > 9 ? sec : "0" + sec}`;
    }
    setInterval(function () {
      olock();
    }, 1000);
    let currentSong = Math.floor(Math.random() * music.length);
    const scrollToSong = () => {
      const currentSongEl = document.getElementById(music[currentSong]);
      currentSongEl.scrollIntoView();
    };
    const play = () => {
      audio.setAttribute("src", `music/${music[currentSong]}.mp3`);
      let htmlRender = "";
      Object.values(songName).map((item, index) => {
        htmlRender += `<div class="song-name-container" id=${music[index]}>
        ${
          index === currentSong
            ? `<img id="dvd-icon-spin" src="./img/boruto_img.jpg"/>    <p>
              ${index === currentSong ? `<strong>${item}</strong>` : item}
            </p>`
            : ""
        }
        </div>
        `;
      });
      document.getElementById(
        "song-name"
      ).innerHTML = `<div>${htmlRender}<div/>`;
      songName[music[currentSong]];
      scrollToSong();
      olock();
    };
    play();
    const playNext = () => {
      currentSong = currentSong === music.length - 1 ? 0 : currentSong + 1;
      play();
    };
    document
      .getElementById("btn-next")
      .addEventListener("click", () => playNext());
    const playPrev = () => {
      currentSong = currentSong ? currentSong - 1 : music.length - 1;
      play();
    };
    document
      .getElementById("btn-prev")
      .addEventListener("click", () => playPrev());
    audio.onended = () => {
      playNext();
    };
    document
      .getElementsByTagName("body")[0]
      .insertAdjacentHTML("beforeend", "<div id='mask'></div>");
  },
  false
);

$(document).ready(function () {
  setInterval(function () {
    var screenHeight = $(document).height();
    var screenWidth = $(document).width();

    var startLeft = getRandomArbitrary(0, screenWidth);

    var timeRun = getRandomArbitrary(4000, 6000);
    var opacityR = Math.random() * (1 - 0.2) + 0.2;
    var sizeR = getRandomArbitrary(5, 20);

    var endLeft = getRandomArbitrary(startLeft - 100, startLeft + 100);

    var snow = document.createElement("span");

    $(snow)
      .addClass("snow-item fa fa-heart")
      .css({
        position: "absolute",
        "z-index": "2000",
        color: "#ff0000",
        display: "block",
        top: 0,
        left: startLeft,
        opacity: opacityR,
        "font-size": sizeR + "px",
      })
      .appendTo("body")
      .animate(
        {
          top: screenHeight - sizeR,
          left: endLeft,
        },
        {
          duration: timeRun,
          easing: "linear",
          complete: function () {
            $(this).fadeOut("fast", function () {
              $(this).remove();
            });
          },
        }
      );
  }, 400);
});
