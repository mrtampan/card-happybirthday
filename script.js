(function() {
  function $(id) {
    return document.getElementById(id);
  }

  
  var card = $("card"),
    openB = $("open"),
    closeB = $("close"),
    txtHbd = $("textHbd"),
    myAudio = new Audio
    timer = null;

    myAudio.src = "music.mp3";
  console.log("wat", card);
  openB.addEventListener("click", function() {

    if(myAudio.paused){
      myAudio.play();
    }else{
      myAudio.pause();
    }
    document.title = 'Happy Birthday Mina';
    txtHbd.setAttribute("class", "d-none");
    card.setAttribute("class", "open-half");
    if (timer) clearTimeout(timer);
    timer = setTimeout(function() {
      card.setAttribute("class", "open-fully");
      timer = null;
    }, 1000);
  });

  closeB.addEventListener("click", function() {
    txtHbd.setAttribute("class", "animated infinite swing")
    card.setAttribute("class", "close-half");
    if (timer) clearTimerout(timer);
    timer = setTimeout(function() {
      card.setAttribute("class", "");
      timer = null;
    }, 1000);
  });

})();