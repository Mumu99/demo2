
function sum(...args) {
    let result = args.reduce((previous, current) => {
        return previous + current;
    }, 0);
    return result;
}
module.exports = sum;