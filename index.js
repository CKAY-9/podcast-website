const members = [
  {
    "name": "Some Dude #1",
    "description": "Some Dude #1 Description",
    "image": "sample.webp"
  },
  {
    "name": "Some Dude #2",
    "description": "Some Dude #2 Description",
    "image": "sample.webp"
  },
  {
  "name": "Some Dude #3",
  "description": "Some Dude #3 Description",
  "image": "sample.webp"
  },
];
const podcast_name = "The Podcast Name";
const podcast_description = "The Podcast Description. Write whatever you want here";

const podcast_episodes = [
  {
    "name": "Our First Podcast Episode",
    "description": "Very short brief description",
    "date": "2024-02-12",
    "thumbnail": "sample.webp",
    "audio_file": new Audio("./content/sample.mp3")
  },
  {
    "name": "Our Second Podcast Episode",
    "description": "Very short brief cool description",
    "date": "2024-02-12",
    "thumbnail": "sample.webp",
    "audio_file": new Audio("./content/sample.mp3")
  },
  {
    "name": "Our Third Podcast Episode",
    "description": "Very short brief very cool description",
    "date": "2024-02-12",
    "thumbnail": "sample.webp",
    "audio_file": new Audio("./content/sample.mp3")
  },
]

// DONT EDIT THIS STUFF
const members_splash = document.getElementById("members");
for (let i = 0; i < members.length; i++) {
  const member = members[i];
  members_splash.innerHTML += `
    <div class="member">
      <img src="./content/${member.image}" alt="Member Image" />
      <section>
        <h2>${member.name}</h2>
        <span>${member.description}</span>
      </section>
    </div>
  `;
}

const episodes_container = document.getElementById("episodes");

const play_podcast = (podcast) => {
  const play_button = document.getElementById("play-" + podcast);
  play_button.style.opacity = "0";
  play_button.style.zIndex = "1";
  const pause_button = document.getElementById("pause-" + podcast);
  pause_button.style.opacity = "1";
  pause_button.style.zIndex = "2"

  podcast_episodes[podcast].audio_file.play();
}

const stop_podcast = (podcast) => {
  const play_button = document.getElementById("play-" + podcast);
  play_button.style.opacity = "1";
  play_button.style.zIndex = "2";
  const pause_button = document.getElementById("pause-" + podcast);
  pause_button.style.opacity = "0";
  pause_button.style.zIndex = "1";

  podcast_episodes[podcast].audio_file.pause();
}

for (let i = 0; i < podcast_episodes.length; i++) {
  const episode = podcast_episodes[i];
  episodes_container.innerHTML += `
    <div class="episode">
      <div style="position: relative">
        <img src="./content/${episode.thumbnail}" alt="Episode Thumbnail" />
        <button class="play_podcast" style="opacity: 0;" id="pause-${i}" onclick="stop_podcast(${i})"><img src="./content/pause.svg" alt="Play" style="filter: invert(1)" /></button>
        <button class="play_podcast" id="play-${i}" onclick="play_podcast(${i})"><img src="./content/play.svg" alt="Play" style="filter: invert(1)" /></button>
      </div>
      <div class="info">
        <h2>${episode.name}</h2>
        <span>${episode.description}</span>
        <br />
        <span style="filter: opacity(0.5)">${episode.date}</span>
      </div>
    </div>
  `;
}

const scroll_down_img = document.getElementById("expand");
document.onscroll = () => {
  if (window.pageYOffset >= 100) {
    scroll_down_img.style.opacity = "0"
  } else {
    scroll_down_img.style.opacity = "1"
  }
}
