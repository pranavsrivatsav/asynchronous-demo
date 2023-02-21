function callback(response) {
    console.log('api response received',response);
    return promise2();
}
function callback2(response) {
    console.log('api2 response received',response);
    return promise3();
}
function callback3(response) {
    console.log('api3 response received',response);
}

function errorCalback() {
    console.log('error failed');
}



const promise1 = ()=> new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('resp1')},2000)
})
const promise2 = ()=> new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('resp2')},2000)
})
const promise3 = ()=> new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('resp3')},2000)
})

// promise1().then(callback,errorCalback)
//     .then(callback2,errorCalback)
//     .then(callback3,errorCalback)

promise1().then(callback)
    .then(callback2)
    .then(callback3)
    .catch(errorCalback)

console.log('Hi');
console.log('Bye');

