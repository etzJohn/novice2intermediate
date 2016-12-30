/*
    Now that we are using rest parameters, we need a way to convert our array into
    individual arguments upon a function call

    SOLUTION: Spread Operator

    The spread operator allows us to split an Array argument into individual elements

    it uses the same ... syntax as rest parameters, but rather used in the function body
    rather than function signature
*/

getSecret("/secrets/22/secret", function(data){
    let secrets = data.secrets;
    // equivalent to readSecrets(secret, secret, secret, etc...);
    readSecrets(...secrets);
})
