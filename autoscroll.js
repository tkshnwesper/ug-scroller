function computeIncrement(maxTimeout) {
    return maxTimeout / 9.0
}

let interval = null
let maxTimeout = 50
let increment = computeIncrement(maxTimeout)
let lastNumber = 1
let delta = 3

function startScrolling(number) {
    if (interval) {
        clearInterval(interval)
    }
    interval = setInterval(
        window.scrollBy,
        1 + maxTimeout - increment * number,
        {
            top: 1,
        }
    )
}

document.addEventListener('keydown', function (event) {
    number = parseInt(event.key)
    if (number) {
        lastNumber = number
        startScrolling(number)
    } else if (event.key === 'Escape') {
        clearInterval(interval)
    }
});