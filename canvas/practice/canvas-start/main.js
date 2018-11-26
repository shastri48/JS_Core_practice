var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");


// // c.fillStyle = "green";
// // c.fillRect(100,100,100,100);
// // c.fillStyle = "skyblue";
// // c.fillRect(200,200,100,100);
// // c.fillStyle = "blue";
// // c.fillRect(300,100,100,100);
// // c.fillStyle = "cyan";
// // c.fillRect(300,300,100,100);
// // c.fillStyle = "pink";
// // c.fillRect(100,300,100,100);


// // // line maing
// //   c.beginPath();
// //   c.moveTo(100,100);
// //   c.lineTo(400,100);
// //   c.lineTo(400,400);
// //   c.lineTo(100,400);
// //   c.lineTo(100,100);
// //   c.strokeStyle = "red";
// //   c.stroke();

// // var body = document.querySelector("body");


// // var num = 5;
// //   function increaseCircle(){
  
// //     for(i = 0; i < num; i++){
// //       var x = Math.random() * window.innerWidth;
// //       var y = Math.random() * window.innerHeight;
// //       c.beginPath();
// //       c.arc(x, y, 80, 0, Math.PI * 2, false);
// //       c.strokeStyle = `rgb(${x},${y},0)`;
// //       c.stroke();
// //     }
// //     num = num + Math.random() * 10; 
// //   }

  
  // constructor(x, y, bx, by, radius){
  //   this.x = x;
  //   this.y = y;
  //   this.bx = bx;
  //   this.by = by;
  //   this.radius = radius;
  // }

var mouse = {
  x: undefined,
  y: undefined
}

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = `rgb(${this.x},${this.y}, ${this.x})`;
    c.stroke();
    c.fillStyle = `rgb(${this.x},${this.y}, 46)`; 
    c.fill();
  }

  this.update = function(){
    if(this.y+this.radius > innerHeight || this.y-this.radius < 0){
      this.dy = -this.dy;
    }
    if(this.x+this.radius > innerWidth || this.x-this.radius < 0){
      this.dx = -this.dx;
    }
    this.y = this.y + this.dy;
    this.x = this.x + this.dx;

    if(mouse.x - this.x > 50){
      this.radius += 1;
    }
    this.draw();
  }
}

var circleArray = [];
for(i = 0;i<100; i++){
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  var dx = 4;
  var dy = 4;

  circleArray.push(new Circle(x,y,dx,dy,30))
}



function animate(){
  c.clearRect(0,0,innerWidth,innerHeight);
  requestAnimationFrame(animate);
  for(i = 0; i < circleArray.length; i++){
    circleArray[i].update();
  }
}
animate(); 

window.addEventListener("mousemove", (event) => {
  console.log("mouesemove");
  mouse.x = event.x;
  mouse.y = event.y;
})

// // var x = 0;
// // var dx = 4;
// // var y = 0;
// // var dy = 4;

//   // c.beginPath();
//   // c.arc(x, y, 30, 0, Math.PI * 2, false);
//   // c.strokeStyle = "blue";
//   // c.stroke();
//   // if(y > innerHeight || y < 0){
//   //   dy = -dy;
//   // }
//   // if(x > innerWidth || x < 0){
//   //   dx = -dx;
//   // }
//   // y = y + dy;
//   // x = x + dx;


// // canvas.addEventListener("click", cancelAnimationFrame(animate));

// // c.beginPath();
// // c.arc(200, 200, 30, 0, Math.PI * 2, false);
// // c.strokeStyle = "blue";
// // c.stroke();

// class Circle {
//   constructor(x, y, dx, dy, radius) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius;
//   }
//   draw() {
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     c.strokeStyle = "blue";
//     c.stroke();
//   }
//   update() {
//     if(this.x > innerWidth || this.x < 0){
//       this.dx = -this.dx;
//     }
//     if(this.y > innerHeight || this.y < 0){
//       this.dy = -this.dy;
//     }
//     this.y = this.y + this.dy;
//     this.x = this.x + this.dx;

//     this.draw();
//   }
// }

// let c1 = new Circle(200, 200, 3, 3, 30);

// function animate(){
//   console.log('animate');
//   c.clearRect(0,0,innerWidth,innerHeight);
//   requestAnimationFrame(animate);
//   c1.update();
// }
// animate(); 
