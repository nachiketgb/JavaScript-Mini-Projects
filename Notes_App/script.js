const notesContainer = document.querySelector(".notes_container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll('.input_box');

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input_box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})


notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
    } 
})