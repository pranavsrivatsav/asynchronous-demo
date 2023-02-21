function callback() {
    console.log('api response received');
}
function callback2() {
    console.log('api2 response received');
}
function callback3() {
    console.log('api3 response received');
}

setTimeout(()=>{
    callback();
    setTimeout(()=>{
        callback2();
        setTimeout(callback3,2000);
    },2000)
},2000);

console.log('Hi');
console.log('Bye');