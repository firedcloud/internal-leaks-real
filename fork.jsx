export default function fork (fn) {
    return function (value) {
        return fn(value)
    }
    }