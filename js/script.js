/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// setup()
//
// Description of setup

let currentFrame = 1;




function setup() {

  let canvasElement = createCanvas(18,24).elt;
  let context = canvasElement.getContext('2d');
  context.mozImageSmoothingEnabled = false;
  context.webkitImageSmoothingEnabled = false;
  context.msImageSmoothingEnabled = false;
  context.imageSmoothingEnabled = false;


  body = loadImage('assets/images/body/' + (Math.floor(Math.random() * 10) + 1) + '.png');
  face = loadImage('assets/images/face/' + (Math.floor(Math.random() * 10) + 1) + '.png');
  head = loadImage('assets/images/head/' + (Math.floor(Math.random() * 7) + 1) + '.png');

  head_face_y_static_offset = Math.floor(Math.random() * 3);
  face_x_offset = Math.floor(Math.random() * 2);
  face_y_offset = Math.floor(Math.random() * 2);


}


// draw()
//
// Description of draw()

function draw() {

  //image(test, 0, 0);

  //fatcats are tallest right away
  //maybe roll a dice and move the head+face combination down by 0-2 pixels
  //maybe roll a dice and move the face up or down by -1 to 1 pixel - probably not
  //flip a coin and flip if the facial + head expression is horizontal right or left
  //maybe move the head left or right or down by one pixel




  if (frameCount % 10 === 0){

    switch(currentFrame) {
          case 1:
            render(0);
            currentFrame++;
            break;
          case 2:
            render(0);
            currentFrame++;
            break;
          case 3:
            render(1);
            currentFrame++;
            break;
          case 4:
            render(1);
            currentFrame++;
            break;
          case 5:
            render(0);
            currentFrame++;
            break;
          case 6:
            render(0);
            currentFrame++;
            break;
          case 7:
            render(0);
            currentFrame++;
            break;
          case 8:
            render(0);
            currentFrame = 1;
            break;
      default:
        // code block
    }



  }
}


function render(head_face_y_offset, body_offset){

  clear();
  image(head, 0, 0 + head_face_y_offset + head_face_y_static_offset);
  image(face, 0, 0 + head_face_y_offset + head_face_y_static_offset);
  image(body, 0, 0);

}
