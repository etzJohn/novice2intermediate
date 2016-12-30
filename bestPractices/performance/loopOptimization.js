// Loop Optimization

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (let i = 0; i < alphabet.length; i++) {
  console.log(alphabet[i])
}
/*
  Memory access is not ideal in normal for-loop struct
  @start of each iteration, program must find and retrieve:
  - val of counter var
  - obj iterating through
  - obj propertie(s)
  - list pointed to by property
  - length property of array
*/

/*
  How can we optimize?
  - use cached values
  - place var assignments w/in loop (JS does not scope to blocks, so this is recommended)
*/

for (let i = 0, listLength = alphabet.length; i < listLength; i++) {
  console.log(alphabet[i]);
}

/*
  For-loop vs For-In Loop

  Use for-in for enumerated objects, (key-value props)
  NOTE: If we have added methods to the prototype of the object we are iterating over,
    these methods will be accessible and iterated over
    Solution is to add a condition to check if (obj.prototype hasOwnProperty x),
    filter accordingly
*/
