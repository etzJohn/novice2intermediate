/*
  Syntax Error = Misspelling, missing keywords, etc

  Run-Time Error = Undefined vars

  It is important to know how to control flow of a program after run-time errors
  Built in method is through a try block

*/

try {
  // do stuff...
  // Within try block, add conditions such as:
  if (/*blah*/ === undefined) {
    // As soon as throw is reached, try passes control to catch
    throw new ReferenceError();
  } if (error instanceOf ReferenceError) {
    // log it with more detail
  } catch(error) {
  console.log(error);
  } finally {
  // here is code that should execute regardless of whether errors exist or not
}
