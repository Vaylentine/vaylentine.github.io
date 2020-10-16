let secret = document.querySelector(".shrex")

secret.addEventListener('ended', function(e) {

    secret.style.display = "none";
    secret.currentTime = 0;
    setTimeout(unmutefunction, 1000);

})
let allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
  };
  
  let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
  
  let konamiCodePosition = 0;
  
  document.addEventListener('keydown', function(e) {
    let key = allowedKeys[e.keyCode];
    let requiredKey = konamiCode[konamiCodePosition];
  
    if (key == requiredKey) {
  
      konamiCodePosition++;
  
      if (konamiCodePosition == konamiCode.length) {
       shrexit();
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
    }
  });
  
  function shrexit() {
    
    secret.style.display = "block";
    secret.load();
    secret.play();
    
    mutefunction();
  }