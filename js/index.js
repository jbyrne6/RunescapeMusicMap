var id;
function play(id){
  console.log(id);
  let audioFileName = id.id + "Audio";
  let audio = document.getElementById(audioFileName);

  if(audio.paused){
    audio.load();
    //$audio.animate({volume: newVolume}, 1000);
    //fade in sound
    audio.play();
  }else{
    audio.pause();
    audio.currentTime = 0;
  }
}

// Don't use window.onLoad like this in production, because it can only listen to one function.
window.onload = function() {
  svgPanZoom('#RunescapeMap', {
    zoomEnabled: true,
    dblClickZoomEnabled: false,
    controlIconsEnabled: true

  });
};

document.addEventListener('play', function(e){
  var audios = document.getElementsByTagName('audio');
  for(var i = 0, len = audios.length; i < len;i++){
      if(audios[i] != e.target){
          audios[i].pause();
      }
  }
}, true);
