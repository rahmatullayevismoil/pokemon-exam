const arr = pokemons.splice(0,20)
console.log(arr);
var ul = document.querySelector('ul');
ul.setAttribute("class", "d-flex flex-wrap")

for(let i = 0; i < 20; i++){

        var img = document.createElement('img')
        img.src = arr[i].img
        
        var h2 = document.createElement('h2')
        h2.innerHTML += arr[i].name
        h2.setAttribute("class", "text-center")
     
        var vazifasi = document.createElement('p')
        vazifasi.innerHTML = arr[i].type
        vazifasi.setAttribute("class", "text-center")

        var li = document.createElement("li");
        li.setAttribute("class", "p-3 list-unstyled bg-white m-3 ")
        li.style.width = "200px"

        li.appendChild(img)
        li.appendChild(h2)
        li.appendChild(vazifasi)
        ul.appendChild(li)
} 
    
    
    
