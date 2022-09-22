function sum(num1, num2) {
    return num1 + num2;
};

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2, 2, sum));

setTimeout(() => {
    console.log("Helo, Javascript!")
}, 5000);

function greeting(name) {
    console.log(`Hello, ${name}!`);
}
// function, timeout, funtion's args
setTimeout(greeting, 2000, 'Juan Amedh');