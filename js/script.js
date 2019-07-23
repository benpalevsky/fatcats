/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// setup()
//
// Description of setup





function setup() {

  let canvasElement = createCanvas(24,24).elt;
  let context = canvasElement.getContext('2d');
  context.mozImageSmoothingEnabled = false;
  context.webkitImageSmoothingEnabled = false;
  context.msImageSmoothingEnabled = false;
  context.imageSmoothingEnabled = false;


  body = loadImage('assets/images/body/' + (Math.floor(Math.random() * 3) + 1) + '.png');
  face = loadImage('assets/images/face/' + (Math.floor(Math.random() * 3) + 1) + '.png');
  head = loadImage('assets/images/head/' + (Math.floor(Math.random() * 3) + 1) + '.png');

}


// draw()
//
// Description of draw()

function draw() {

  //image(test, 0, 0);

  image(head, 0, 0);
  image(face, 0, 0);
  image(body, 0, 0);


}
