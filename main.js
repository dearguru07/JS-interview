// function Expression-------------

// Solution() --error
// add() --- error

// let add=function Solution(){
//         console.log('Hello to all')
// }
// add()



// function a() {
// let b = 20;
//     c()
//     function c(){
//         console.log(b);
//     }
// }
// a();


// let a =50
// let a=25
// console.log(a)



// function Download(){
//     console.log('btn clicked...')
//     console.log('feacthing the server')
//     console.log('downloading the movie')
//     let myPromise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         console.log('movoe downloaded')
//         resolve()
//         },5000)
//     })
//     myPromise.then(()=>{
//         console.log('movie storaded ur mbl')
//     }).catch(()=>{
//         console.log('server is broken')
//     }).finally(()=>{
//         console.log('fianally movie is watching')
//     })
// }

// console.log(3-'4')
// console.log('5'-3)
// console.log('5'+3)
// console.log(NaN===NaN)
// console.log(typeof NaN)
// console.log(1<2<3)
// console.log(3>2>1)


const hello=document.getElementById('hello')
hello.onclick=()=>{
    hello.innerText='namastee.....'
}


// function* Guru(a,b){
//     yield a+b
//     yield a-b
//     yield a*b
// }
// const res=Guru(4,5)
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())