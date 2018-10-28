var myData;
var check = 0;
var checkBG = 0;
var myImage;
var myImage2;
var myDelta = 0;

function preload() {
  // put preload code here
  myData = loadJSON('./assets/peopleinspace.json');
  myImage = loadImage('./assets/earth.png');
  myImage2 = loadImage('./assets/earth_sunrise.png');
}

var balls = [];

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  //cnv.mousePressed(changeBackground);
  for (var i = 0; i < myData.people.length; i++) {
    var astro = myData.people[i];

    var x = random(width);
    var y = random(height);
    var d = astro.careerdays + 25;
    var l = astro.name;
    var s = astro.country;
    var launch = astro.launchdate;

    var newBall = new Ball(x, y, d, l, s, launch);
    balls.push(newBall);
  }
}

function draw() {
  //background(200);
  if (mouseIsPressed && check > 3){
    bg = image(myImage2, 0, 0, [width], [height]);
  } else {
    bg = image(myImage, 0, 0, [width], [height]);
  }
  for (var j = 0; j < balls.length; j++) {
    balls[j].move();
    balls[j].display();
  }
}

function Ball(_x, _y, _diameter, _label, _label2, _label3) {
  // Properties defined by constructor
  this.size = _diameter;
  this.x = _x;
  this.y = _y;
  this.label = _label;
  this.label2 = _label2
  this.label3 = _label3

  // Hardcoded properties
  this.color = '#EB8258';
  this.speed = 1;
  this.yDir = 1;
  this.xDir = 1;

  // Methods
  this.move = function() {
    this.x += this.speed * this.xDir;
    this.y += this.speed * this.yDir;

    if (this.y >= height || this.y <= 0) {
      // if 1, set to -1, if -1, set to 1
      this.yDir *= -1;
    }
    if (this.x >= width || this.x <= 0) {
      this.xDir *= -1;
    }
  }

  this.display = function() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size);
    if (check == 1) {
      fill('white');
      text(this.label, this.x + 25, this.y);
    } else if (check == 2) {
      fill('white');
      text(this.label, this.x + 25, this.y);
      text(this.label2, this.x + 25, this.y + 25);
    } else if (check == 3) {
      fill('white');
      text(this.label, this.x + 25, this.y);
      text(this.label2, this.x + 25, this.y + 25);
      text(this.label3, this.x + 25, this.y + 50);
    } else if (check > 3){
      fill('white');
      text('Keep pressed to make the sun rise', width / 5 * 2, height / 6 * 5 + 50);
    } else {
      fill('white');
      text('Click to make appear more info', width / 5 * 2, height / 6 * 5 + 50);
    }



  }
}

function mouseClicked() {
  check += 1;
}
// function mouseis() {
//   checkBG = 1;
// }
