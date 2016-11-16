function fizzBuzz(countTo) {
  var myGame = [];
  
  for(var x = 1; x <= countTo; x++)
{
	myGame.push(x);
}
for(var x = 0; x < countTo; x++)
{
	if(myGame[x] % 15 === 0)
	{
		myGame[x] = "fizzbuzz";
	}
	else if(myGame[x] % 3 === 0)
	{
		myGame[x] = "fizz";
	}
	else if(myGame[x] % 5 === 0)
	{
		myGame[x] = "buzz";
	}
}

  
  return myGame;
}

/* From here down, you are not expected to 
   understand.... for now :)  
   
   
   Nothing to see here!
   
*/



// tests
(function testFizzBuzz() {
  // we'll use the variables in our test cases
  var countTo = 16;
  var expected = [
    1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
    'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
  ];

  var actual = fizzBuzz(countTo) || [];
  
  if (
    expected.length === actual.length &&
    expected.every(function(item, index) {
      return actual[index] === item;}) ) {
    
      console.log('SUCCESS: fizzBuzz is working');
  }
  else {
    console.log('FAILURE: fizzBuzz is not working');
  }  
})();