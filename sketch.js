let arr = [],
    i = 0,
    j = 1,
    start = false;

function setup() {
  createCanvas(800, 600);
  
  for (let i = 0; i < width; i++) {
    arr.push(random(height));
  }
}
		
function draw() {
  background(32, 194, 14);
  
  for (let i = 0; i < width; i++) {
    line(i, height - arr[i], i, height);
    stroke(0);
  }
	
  if(start){
  for (let n = 0; n < width / 2; n++) {
  	if(arr[j - 1] > arr[j]){
    	    swap(arr, j - 1, j);
  	}
  	j++;
  	if(j >= arr.length){
    	    j = 1;
    	    i++;
  	}
  }
  }
}

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function mousePressed() {
  start = start ? false : true;
}
