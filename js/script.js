$(document).ready(function(){
  var header = $('body');
  
  var backgrounds = new Array(
      'url(/images/AndhraPradesh.png)'
    , 'url(/images/Assam.jpg)'
    , 'url(/images/gujarat.jpg)'
    , 'url(/images/karnataka.png)'
    , 'url(/images/kerala.png)'
    , 'url(/images/Maharashtra.jpg)'
    , 'url(/images/odisha.png)'
    , 'url(/images/tamilNadu.png)'
    , 'url(/images/Telangana.jpg)'
    , 'url(/images/Uttarakhand.png)'
    , 'url(/images/UttarPradesh.png)'
    , 'url(/images/WestBengal.jpg)'
  );
  
  var current = 0;
  
  function nextBackground() {
      current++;
      current = current % backgrounds.length;
      header.css('background-image', backgrounds[current]);
  }
  setInterval(nextBackground, 1000);
  
  header.css('background-image', backgrounds[0]);
});