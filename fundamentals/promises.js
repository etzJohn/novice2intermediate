/*
    Asynchronous operations is what makes JavaScript what it is.
    In the past, it was handled with callbacks in a style called
    continuation-passing style(CPS)

    CPS works by telling a function how to continue by passing callbacks,
    which leads to deeply nested and confusing code(aka Callback hell)
*/
get resultsFromServer(data, function(error, results) {
    if(error) {
        // ui.render(results, function(error) {
            //...
        });
        if(error) {
            //handle other error
            //ui.sendNotificationToServer(data, results, function(error, response) {
                //...
            });
            if (error) {
                // etc
            });
        });
    });
});

/*
    SOLUTION: Promise Object

    The Promise object is used for asynchronous actions

    A Promise represents a value which may be available now,
    in the future, or never (aka Proxy)

    The executor initiates async work and once complete, calls either
    resolve(successful) or reject(error)

    We call resolve() handler upon a successful response

    We call then() to continue to our next step (simpler to understand callback),
    can be chained in a syncronous manner

    We call reject() when error occurs, which then passes control to

    catch(), which will handle the error

    Both .then() and .catch() return promises, and can be chained

    Ultimately, promises let us write async operations in a
    syncronous way, which makes it far easier to reason about

    LIFECYCLE:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

let myPromise = new Promise(function(resolve, reject) {
    if(/* good condition */) {
		resolve('Success!');
	}
	else {
		reject('Failure!');
	}
});

myPromise.then(function() {
	/* do something with result */
}).catch(function() {
	/* error :( */
})
