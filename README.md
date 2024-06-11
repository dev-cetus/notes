# Notes app
An easy-to-use note-taking application. <br>
Entirely offline application, all notes are stored locally. Speech recognition uses the Web Speech API in the browser (on some browsers, the Web Speech API needs a server and does not work offline).
## Deploiment
I'm using docker to deploy the application.
Just run this command :
```
sudo docker run -p 3000:3000 -d ghcr.io/dev-cetus/notes:latest
```
