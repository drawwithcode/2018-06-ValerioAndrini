var myData;
var check = 0;
var myImage;

function preload() {
  // put preload code here
  myData = loadJSON('assets/peopleinspace.json');
  myImage = loadImage('./assets/earth.png');
}

var balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < myData.people.length; i++) {
    var astro = myData.people[i];

    var x = random(width);
    var y = random(height);
    var d = astro.careerdays + 5;
    var l = astro.name;
    var s = astro.country;
    var launch = astro.launchdate;


    var newBall = new Ball(x, y, d, l, s, launch);
    balls.push(newBall);
  }
}


function draw() {
  //background(200);
  image(myImage, 0, 0, myImage.width, myImage.height);
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
  this.color = 'red';
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
    ellipse(this.x, this.y, this.size);
    if (check == 1) {
      fill('white');
      text(this.label, this.x, this.y);
    } else if (check == 2){
      fill('white');
      text(this.label, this.x, this.y);
      text(this.label2, this.x, this.y + 25);
    } else if (check == 3 ){
      fill('white');
      text(this.label, this.x, this.y);
      text(this.label2, this.x, this.y + 25);
      text(this.label3, this.x, this.y + 50);
    } else {
      fill('white');
      text('Click on the screen to see more info', width / 5*2, height / 6 * 5 + 50);
    }
  }
}

function mouseClicked() {
  check += 1;
}
