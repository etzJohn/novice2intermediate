/*
    Template strings are string literals allowing embedded expressions.
    Allows for much easier string interpolation(variables, functions, objects, etc)

    Your string is wrapped in ``, and variables to be interpolated are
    placed within ${}

    Template strings make it much easier to create multi-line strings, and
    even preserve whitespace and newlines
*/

function singSong(verse1, hook, verse2) {
    'use strict';
    let song = `
                ${verse1}

                ${hook}

                ${verse2}

                ${hook}`

    return song;
}

console.log(singSong('hi', 'k', 'bye'));
