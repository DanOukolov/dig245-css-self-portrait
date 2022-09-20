
/* javascript */

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);
function mousemove(event){
  console.log("pageX: ",event.pageX, 
  "pageY: ", event.pageY, 
  "clientX: ", event.clientX, 
  "clientY:", event.clientY)
}

window.addEventListener('mousemove', mousemove);


var sumTops = document.querySelectorAll(".top");
var sumBottoms = document.querySelectorAll('bottom');
var sumRights = document.querySelectorAll('.right');
var sumLefts = document.querySelectorAll('.left');
var sumMiddles = document.querySelectorAll('.middle');
var sumStandalones = document.querySelectorAll('.standalone');
var sumElements = (sumTops + sumBottoms + sumRights + sumLefts + sumMiddles + sumMiddles + sumStandalones);
