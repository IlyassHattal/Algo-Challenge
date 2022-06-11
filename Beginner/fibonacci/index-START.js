/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
    let previous = 1,
        current = 1

    if (n <= 1) {
        return 1
    } else {
        let counter = n - 1

        while (counter) {
            let temp = current
            current += previous
            previous = temp
            counter --
        }
    }
    return current
}

module.exports = fibonacci