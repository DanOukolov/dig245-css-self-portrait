
/* javascript */
console.log(sumElements);
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

