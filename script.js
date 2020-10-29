window.onload = start

/**
 * The position of the bird relative to the left side of the page
 */

let left = 0

/**
 * Starts the progress on page load.
 */
function start() {
    fly()
    
}

/** Sets an interval to make the bird "fly" */
function fly() {
    setInterval(moveBirdToTheRight, 10)
}
/** Moves bird a small step in percentage to the right */
function moveBirdToTheRight() {
    const bird = document.querySelector('img')
    console.log(bird)
    left += 0.2
    bird.style.left = left + '%'
}





/*
function testForLoop() {
    console.time('loop');

    const iterations = 10000000
    for (let i = 0; 1 < iterations; 1++) {

    }
}
*/