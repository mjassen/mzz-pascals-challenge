
// start with two "1"s.

var pascalSeed=[1,1];

// make a loop that loops through 10 iterations, each time calling the function on itself with the previous row as input while outputting the next row.

var h=0;

while (h<10)

{

pascalSeed = computeNextPascalRow(pascalSeed);

h++;

}


// the function. it contains a loop that takes input: an array containing a series of integers representing a row of a pascals triangle, and outputs the corresponding series of integers calculated as the next row of the pascals triangle.

function computeNextPascalRow(pascalInputRow)

{

// for the first one have a special case: it is always "1" so write "1" to the output array.

var pascalResult=[1];

// for each iteration, calculate how many integers in this series.

var seriesLength = pascalInputRow.length;

// write the first special case to the screen.

document.write( pascalResult[0] + "-");

// step through the second through "n"th integers in the input series, have a loop to calculate this:

for (var i=1; i < seriesLength ; i++)

{

//add its value plus the value of the previous integer in the series, and output the result onto the output array.

pascalResult.push( pascalInputRow[i-1] + pascalInputRow[i] );

document.write( pascalResult[i] + "-");

}

// for the last one have a special case: it is always "1" so write "1" to the output array.

pascalResult.push(1);

document.write( pascalResult[pascalInputRow.length] + "<br>");

return pascalResult;

//end loop that inputs series of integers and outputs series of integers

}
