function setup() {
   resizeCanvas(500, 500);
   background(0);
    drawStars();
}

function drawPlanet(x, y, radius) {
  fill(random(150,255), random(0,200), random(0,150));
  ellipse(x, y, radius, radius);
}

function drawMoons(number, distance) {
  var segment = (Math.PI * 2) / number;
  for(var i = 0; i < number; i++) {
    var x = mouseX + cos(segment * i) * random(distance, distance* 1.2);
    var y = mouseY + sin(segment * i) * random(distance, distance*1.2);
    colourMode(HSB);
    fill(random(255), 100, 100);
    ellipse(x, y, random(20));
  }
}
function drawStars() {
  stroke(255);
  for(var i = 0; i < 1000; i++) {
    point(random(width), random(height));
  }

}


function drawRings(x, y) {
}

function drawMoons(x, y, radius) {
}


function mouseClicked() {
  var r = random(200,150);
  //this function allows your radius to vary between the two numbers
  drawPlanet(mouseX, mouseY, r);
  drawRings(mouseX, mouseY);
  drawMoons(mouseX, mouseY, r);
}



