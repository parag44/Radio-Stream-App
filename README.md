Radio-Stream-App
================

An Firefox OS App to stream audio
To enable Background media play on Firefox OS App follow this:

If you want to run your music application at background,you need to use Audio Channel Permission.
I have seen that, many Firefox os app has this problem due to not using Audio Channel Permission. You need to specify this permission in the manifest of your app.

"permissions": {
    "audio-channel-content": {
      "description": "Use the audio channel for the music player"
    }

In your html page you can call it like that:

<audio mozaudiochannel="content" preload="none" src="http://my-stream-url"></audio>
or in javascript:
var radioURL = 'systreamurl';
  var MainAudioPlayer = new Audio();
  MainAudioPlayer.setAttribute('src', radioURL);
  MainAudioPlayer.setAttribute('preload', 'auto');
  MainAudioPlayer.setAttribute('mozaudiochannel', 'content');
  MainAudioPlayer.volume = 0;
  MainAudioPlayer.load();

 
