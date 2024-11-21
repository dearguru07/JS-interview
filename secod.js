// function a(){
//     c()
//     function c(){
//         console.log(x)
//     }
// }
// let x=4
// a()

// let heading=document.createComment

// let a=100
// {
//     let a = 200
//     console.log(a)
//     {
//         let a =300
//         console.log(a)
//     }
// }
// console.log(a)



// function Click() {
//   let count = document.getElementById("count");
//   let name = document.getElementById("name").value;
//   let passWord = document.getElementById("password").value;
//   let alert = document.createElement("p");
//   let para = document.createElement("p");
//   if (name.length || passWord.length == 0) {
//     alert.innerText = "Pls fill the all feilds";
//     count.appendChild(alert);
//   } else {
//     para.innerText = "Applied Successfully";
//     count.appendChild(para);
//   }
  
// }

function Click(){
  let count = document.getElementById("count").value;
  let name = document.getElementById("name").value;
  let alert=document.getElementById('alert')
  alert.classList.remove('d-none')
  alert.classList.add('alert')

  if(count.length==0){
    
  }
  setTimeout(()=>{
    alert.classList.add('d-none')
    alert.classList.remove('alert')
  },3000)
}
