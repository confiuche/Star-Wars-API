const btnsearch = document.querySelector(".btnSearch");

function fn(){
  //let search = document.getElementById("searchiinpu").value;
// alert(search);

//let newSeach = search.split(" ").join('')
//fetch api

let min = Math.ceil(1);
let max = Math.floor(10)
let sech = Math.floor(Math.random() * (max - min) + min)


fetch("https://swapi.dev/api/people/"+sech)
//fetch("https://randomuser.me/api/"+sech)
.then((result)=>result.json())
.then((data)=>{
    //console.log(data) 
    // document.getElementById("myimage").innerHTML = `<img src="${data.avatar_url}" alt="">`
    document.getElementById("myimage").innerHTML = `<img src="images/Endor7.jpeg" alt="">`;
    document.getElementById("name").innerHTML = `${data.name}`;
    document.getElementById("sex").innerHTML = `${data.gender}`;
    document.getElementById("height").innerHTML = `${data.height}`;
})



// alert(newSeach)
}

btnsearch.addEventListener("click", fn);
