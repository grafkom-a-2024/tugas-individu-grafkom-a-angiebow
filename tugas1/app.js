var InitDemo = function () {
  console.log('THis is working');

  var canvas = document.getElementById('game-surface');
  var gl = canvas.getContext('webgl');

  if(!gl){
    console.log('webgl not supported');
    gl = canvas.getContext('experimental-webgl');
  }

  if(!gl){
    alert('Your browser does not support webGL');
  }

  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;
  // gl.viewport(0, 0, window.innerWidth, window.innerHeight);

  gl.clearColor(0.75, 0.85, 0.8, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
};

function vertexShader(vertPosition, vertColor){

};