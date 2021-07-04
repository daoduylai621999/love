const yourDate = new Date("Feb 27 2018 00:00:00 GMT+0700");
const songName = {
  "Doi-Loi-Hoang-Dung": "Đôi lời - Hoàng Dũng",
  "you-are-my-everything": "You Are My Everything",
  "vi-yeu-la-nho": "Vì yêu là nhớ",
  "tu-thich-thich-thanh-thuong-thuong": "Từ thích thích thành thương thương",
  "bach-nguyet-quang": "Bạch nguyệt quang và nốt chu sa",
  "ta-ten-truong-an": "Ta tên Trường An chàng tên Cố Lý",
  "cham-cham-thich": "Chầm chậm thích em",
};

const music = [
  "Doi-Loi-Hoang-Dung",
  "you-are-my-everything",
  "vi-yeu-la-nho",
  "tu-thich-thich-thanh-thuong-thuong",
  "bach-nguyet-quang",
  "ta-ten-truong-an",
  "cham-cham-thich",
];

const quotes = [
  "I don’t need a burning sun and a cooling moon to show me my way. Just want you to hold me whenever I tumble.",
  "Love does not consists of gazing at each other, but in looking together in the same direction",
  "Bees love honey…people love money…but I LOVE YOU",
  "Psychology says, you relaize you love someone when you want them to be happy, even if its not with you",
  "When you are in love,you can’t fall asleep b’coz the reality is far better than your dreams.",
  "When someone else happiness is your happiness, it’s called true love.",
  "We fall in love by chance but we stay in love by choice.",
  "The person who loves you truly is the most precious thing in your life...",
  "My favourite place in this world is, “Next to You”",
  "I didn’t choose you, My heart did.",
  "If your heart was a prison, I would like to be sentenced for life",
  "Love is the only game never postponed due to darkness.",
  "We fight like a married couple, talk like best friends, and flirt like first loves..",
  "I’m scared to look at u.. B’coz the more I do.. The more I fall in love with u…!!!",
  "Life can give us lot of beautiful persons, But only one person is enough for a beautiful life…♥",
  "Real boyfriend sees no other females, Because his eyes are only dedicated for his girl….",
  "I have tested all sweet dishes but they are not sweet as my lover is… ",
  "Everybody wants a happy ending but except me i want a never ending happiness with u",
  "I kept my heart Strong like Iron but, I didn’t know that your heart is a Magnet.",
  "With you the hours become minutes.",
  "Love is the only thing which makes you cry even more u laugh",
  "I shall love you till i take my last breathe on EARTH",
];
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
            ? `<img id="dvd-icon-spin" src="./img/couple.jpg"/>    <p>
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
