let interval = null
let maxTimeout = 100
let increment = maxTimeout / 9.0

function startScrolling(number) {
    if (interval) {
        clearInterval(interval)
    }
    interval = setInterval(
        window.scrollBy,
        1 + maxTimeout - increment * number,
        0, 1
    )
}

document.addEventListener('keydown', function (event) {
    number = parseInt(event.key)
    if (number) {
        startScrolling(number)
    } else if (event.key === 'Escape') {
        clearInterval(interval)
    }
});
