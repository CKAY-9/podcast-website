# Podcast Website

Simple podcast website for hosting your podcast episodes.

## Customization / Adding Episodes

### Adding Member Images

1. Select a picture you want for the member
2. Move the picture to the `./content` folder
3. Edit index.js and find `const members`
4. Find the member you want to change
5. Change the `image` value to whatever the image file is called
6. Edit any other information
7. Save index.js
8. Refresh website

### Adding Podcast Episodes

1. Select your podcast audio file and image
2. Move the files to the `./content` folder
3. Edit index.js and find `const podcast_episodes`
4. Add a new entry following the structure of the other ones
5. Fill in the information and put the proper file name
6. Save index.js
7. Refresh website

### Changing General Information
1. Edit index.js
2. Find `podcast_name` or `podcast_description`, or social links (leave blank for invisible)
3. Change to whatever you want
4. Save index.js
5. Refresh website
