const turnOn = document.getElementById ("turnOn")
const turnOff = document.getElementById("turnOff")
const lamp = document.getElementById("lamp")

function isBroken (){
    return lamp.src.indexOf('lampada3') > - 1


}

function lampOn (){
    if(!isBroken () ){
    lamp.src ='./img/lampada2.jpg'
  }    
}

function lampOff(){
  if(!isBroken () ){
    lamp.src ='./img/lampada1.jpg'
  }
}

function lampBroken (){
    lamp.src='./img/lampada3.jpg'
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
