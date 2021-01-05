//---Gustavo





//---Caio







//---Jardel

const createMap = () => {
    for(let i = 0; i < 7; i++){
        const createColum = document.createElement("section");
        createColum.id = `coluna${i+1}`;
        createColum.classList.add("sectionColuns")
        for(let j = 0; j < 6; j++){
            const createCell = document.createElement("div");
            createCell.classList.add(`cel${j}`)
            createColum.appendChild(createCell)
        }
        document.querySelector("main").appendChild(createColum)
    }
    
}

createMap()

//---Andre