const members = [
  {
    "name": "Some Dude #1",
    "description": "Some Dude #1 Description",
    "image": "mE50sH.webp"
  },
  {
    "name": "Some Dude #2",
    "description": "Some Dude #2 Description",
    "image": "mE50sH.webp"
  },
  {
  "name": "Some Dude #3",
  "description": "Some Dude #3 Description",
  "image": "mE50sH.webp"
  }
];
const podcast_name = "The Podcast Name";
const podcast_description = "The Podcast Description. Write whatever you want here";

const podcast_episodes = [
  {
    "name": "Our First Podcast Episode",
    "description": "Very short brief description",
    "thumbnail": "",
    "audio_file": ""
  }
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

const episodes_container = document.getElementById("episodes")
for (let i = 0; i < podcast_episodes.length; i++) {
  const episode = podcast_episodes[i];
  episodes_container.innerHTML += `
    <div class="episode">
      <img src="./content/${episode.thumbnail}" alt="Episode Thumbnail" />
      <div class="info">
        <h2>${episode.name}</h2>
        <span>${episode.description}</span>
      </div>
    </div>
  `;
}
