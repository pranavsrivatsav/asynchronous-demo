const promise1 = ()=> new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('resp1')},2000)
})
const promise2 = ()=> new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('resp2')},2000)
})
const promise3 = ()=> new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('resp3')},2000)
})

function callback() {
    console.log('api response received');
}
function callback2() {
    console.log('api2 response received');
}
function callback3() {
    console.log('api3 response received');
}

const makeAllApiCalls = async ()=> {
    const response1 = await promise1();
    callback();
    const response2 = await promise2();
    callback2();
    const response3 = await promise3();
    callback3();
    console.log(response1,response2,response3)
}

makeAllApiCalls();
console.log('Hi');
console.log('Bye');


