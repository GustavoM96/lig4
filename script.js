

//---Gustavo





//---Caio







//---Jardel

const createMap = () => {
    for(let i = 0; i < 7; i++){
        let createColum = document.createElement("section");
        for(let j = 0; j < 6; j++){
            let createCell = document.createElement("div");
            createColum.appendChild(createCell)
        }
        document.querySelector("main").appendChild(createColum)
    }
    
}

createMap()


//---Andre
