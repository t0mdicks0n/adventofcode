var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(err, data) {
  if (err) throw err;
  var newArr = [];
  data
  	.split('\n')
  	.map(num => {
  		newArr.push(parseInt(num))
  	});

  var stepCounter = 0;
  var numSteps = 0;
  var currentPosition = 0;
  // while (currentPosition >= 0 || currentPosition < newArr.length) {
  // 	numSteps++;
  // 	var newPosition = currentPosition + newArr[currentPosition];
  // 	newArr[currentPosition] =+ 1;
  // 	currentPosition = newPosition;
  // }

  while (true) {
  	console.log("To add ", newArr[currentPosition])
  	
  	var newPosition = currentPosition + newArr[currentPosition];
  	
  	console.log("New position ", newPosition)
  	
  	newArr[currentPosition] =+ 1;
  	currentPosition = newPosition;
  	console.log("currentPosition", currentPosition)	
  	
  	numSteps++;
  	if (currentPosition < 0 || currentPosition > newArr.length) {
  		console.log("I broke free in " + stepCounter + " number of steps!");
  		break;
  	}

  }
});