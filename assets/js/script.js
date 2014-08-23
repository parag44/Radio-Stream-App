  // var radioURL = 'http://live.btvradio.bg/jazz-fm-lounge.mp3';
  var radioURL = 'http://188.165.132.54:8226/;stream.mp3';
  var MainAudioPlayer = new Audio();
  MainAudioPlayer.setAttribute('src', radioURL);
  MainAudioPlayer.setAttribute('preload', 'auto');
  MainAudioPlayer.setAttribute('mozaudiochannel', 'content');
  MainAudioPlayer.volume = 0;
  MainAudioPlayer.load();

  var needle = document.getElementById('needle');
  var button = document.getElementById('button');

  button.addEventListener('click', function(){
    if (MainAudioPlayer.paused) {
      MainAudioPlayer.play();
      fadeVolIn(MainAudioPlayer);
      needle.classList.add("play");
      button.classList.add("pause");
    } else {
      MainAudioPlayer.pause();
      needle.classList.remove("play");
      button.classList.remove("pause");
    }
  }, false);

  function fadeVolIn(el){
    var interval = 50;
    var vol = 0;
    var fadeIn = setInterval( function() {
      if (vol < 1) {
        vol += 0.01;
        el.volume = vol.toFixed(2);
      } else {
        clearInterval(fadeIn);
      }
    }, interval);
  }

