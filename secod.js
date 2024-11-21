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

function Click() {
  let count = document.getElementById("count");
  let name = document.getElementById("name").value;
  let passWord = document.getElementById("password").value;
  let alert = document.createElement("p");
  let para = document.createElement("p");
  if (name || passWord == "") {
    alert.innerText = "Pls fill the all feilds";
    count.appendChild(alert);
  } else {
    para.innerText = "Applied Successfully";
    count.appendChild(para);
  }
}
