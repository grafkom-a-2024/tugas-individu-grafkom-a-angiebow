let canvas = document.getElementById("3d_canvas");
let gl = canvas.getContext("experimental-webgl");

let vertices = [-0.8, 0.8, -0.5, -0.5, 0.0, 0.5];
let vertexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
gl.bindBuffer(gl.ARRAY_BUFFER, null);

let vertexShader = gl.createShader(gl.VERTEX_SHADER);
let vertCode = 'attribute vec2 coordinates;' + 'void main() {' + 'gl_Position = vec4(coordinates,0.0, 1.0);' + 'gl_PointSize = 10.0;' + '}';
gl.shaderSource(vertexShader, vertCode);
gl.compileShader(vertexShader);
let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
let fragCode = 'void main() {' + 'gl_FragColor = vec4(1.0, 0.5, 0.0, 1.0);' + '}';
gl.shaderSource(fragmentShader, fragCode);
gl.compileShader(fragmentShader);
let shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);
gl.linkProgram(shaderProgram);
gl.useProgram(shaderProgram);

gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
let coord = gl.getAttribLocation(shaderProgram, "coordinates");
gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(coord);

gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.enable(gl.DEPTH_TEST);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.viewport(0, 0, canvas.width, canvas.height);
gl.drawArrays(gl.TRIANGLE_FAN, 0, 3);