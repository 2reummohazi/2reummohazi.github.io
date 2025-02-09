const playList = [
    {
        song: "Xdinary Heroes - FEELING NICE",
        url: "https://youtu.be/vKOY7noRz2s",
    },
    {
        song: "Xdinary Heroes - Night before the end",
        url: "https://youtu.be/eAy16rbQkvQ",
    },
    {
        song: "Xdinary Heroes - Save me",
        url: "https://youtu.be/hiOKCQq4-tM",
    },
    {
        song: "Xdinary Heroes - LOVE and FEAR",
        url: "https://youtu.be/YD_KixAviis",
    },
    {
        song: "Xdinary Heroes - 소년만화",
        url: "https://youtu.be/-nq5T6bBnCE",
    },
    {
        song: "Xdinary Heroes - No Matter",
        url: "https://youtu.be/W2ke8TMZHKg",
    },
    {
        song: "Xdinary Heroes - PLUTO",
        url: "https://youtu.be/YvkS2I_EPkI",
    },
    {
        song: "Xdinary Heroes - Break the Brake",
        url: "https://youtu.be/wrnEc1cq3mc",
    },
    {
        song: "Xdinary Heroes - Bicycle",
        url: "https://youtu.be/gVm99JqG8f0",
    },
]

const song = document.querySelector("#song p");
const url = document.querySelector("#song a");

const todaysSong = playList[Math.floor(Math.random() * playList.length)];

song.innerText = todaysSong.song;
url.innerText = "go";
url.href = todaysSong.url;
url.target = "_blank";