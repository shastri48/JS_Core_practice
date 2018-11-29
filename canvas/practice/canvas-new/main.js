var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");


// c.fillStyle = "green";
// c.fillRect(100,100,100,100);
// c.fillStyle = "skyblue";
// c.fillRect(200,200,100,100);
// c.fillStyle = "blue";
// c.fillRect(300,100,100,100);
// c.fillStyle = "cyan";
// c.fillRect(300,300,100,100);
// c.fillStyle = "pink";
// c.fillRect(100,300,100,100);



// line maing
  c.beginPath();
  c.moveTo(200,200);
  c.lineTo(300,100);
  c.lineTo(400,200);
  c.lineTo(500,200);
  c.lineTo(100,100);
  c.strokeStyle = "red";
  c.stroke();





var start = 50;
function animate() {
  c.clearRect(0,0,innerWidth,innerHeight);
  requestAnimationFrame(animate);
  for(i = 0; i < 100; i++){
    c.beginPath();
    c.arc(start+i, 200+i, 40, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
  }
  if(start > canvas.width){
    start = 50;
  }
  start += 200;
}
// animate();