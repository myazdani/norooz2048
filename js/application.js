// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = ['http://i.imgur.com/uGpF7sx.gif',
 '../img/212/norooz-10-212.gif',
 '../img/212/norooz-11-212.gif',
 '../img/212/norooz-2-212.gif',
 '../img/212/norooz-3-212.gif',
 '../img/212/norooz-4-212.gif',
 '../img/212/norooz-5-212.gif',
 '../img/212/norooz-6-212.gif',
 '../img/212/norooz-7-212.gif',
 '../img/212/norooz-8-212.gif',
 '../img/212/norooz-9-212.gif'];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
