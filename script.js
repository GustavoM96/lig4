//---Gustavo

let b = 8
let player=0;
let count=5;

//---Caio






//---Jardel




const createMap = () => {
    for(let i = 0; i < 7; i++){
        const createColum = document.createElement("section");
        createColum.id = `coluna${i}`;
        createColum.classList.add("sectionColuns")
        createColum.addEventListener('click', mark);
        for(let j = 0; j < 6; j++){
            const createCell = document.createElement("div");
            createCell.classList.add(`cel${j}`)
            createColum.appendChild(createCell)
            createCell.addEventListener('click', mark);
        }
        document.querySelector("main").appendChild(createColum)
        
    }
}


const animation = (n, i) => {
    n.animate([
        // keyframes
        { transform: `translateY(-${i*110}px)` },
        { transform: 'translateY(0)' }
      ], {
        // timing options
        duration: 600,
      });
}

//---Andre

const mark = (e) => {
    let change = e.target.parentNode.children;
    if(e.target.classList[0] === "sectionColuns"){
        change = e.target.children;
    }

    for(let i=5; i >= 0; i--){
        let n = change[i];
        //Verificando se o n possui estilo
        if(n.style.backgroundColor === ""){
            if(player === 0 ){
                n.style.backgroundColor = "red";
                player=1;
            }else{
                n.style.backgroundColor = "black";
                player=0; 
            }
            n.classList.add("slide-top")
            animation(n, i)
            break;
        }
        
    }
    e.stopPropagation()
}

createMap();