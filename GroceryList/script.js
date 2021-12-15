const groceries = document.getElementsByClassName('groceries')[0];
const pencil = document.getElementById('pencil');
const allitem = document.getElementById('allitem');

const userinput = document.getElementById('userinput');


pencil.addEventListener("click" , function(){
    allitem.innerHTML = "";
})

userinput.addEventListener("keydown" , function(event){
    if(event.key == "Enter")
    additem();
})

function additem(){
    let h2 = document.createElement("h2");
    h2.innerHTML = "- " + userinput.value;

    // h2.addEventListener("click", function(){
    //     h2.style.textDecoration = "line-through";
    // })
    allitem.insertAdjacentElement("beforeend" , h2)
    userinput.value = "";
}



