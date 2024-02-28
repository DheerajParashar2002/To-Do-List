const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// Function to show the saved notes
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// Function to update the notes
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Function to show the input box
createBtn.addEventListener("click" , ()=>{
    let inputBox = document.createElement("p");
    let image = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable" , "true");
    image.src = "Images/Full Trash.ico";
    notesContainer.appendChild(inputBox).appendChild(image);
})

// Function to save the text
notesContainer.addEventListener("click" , function(a){
    if (a.target.tagName === "IMG") {
        a.target.parentElement.remove();
        updateStorage();
    }

    else if (a.target.tagName === "P"){
    notes = document.querySelectorAll(".input-box")
    notes.forEach(nt => {
        nt.onkeyup = function(){
            updateStorage();
        }
    })
  }
})

// Function to add enter key error
document.addEventListener("keydown" , event=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

