let b = 8
let player=0;
let count=5;
//---Gustavo

let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
];

const markPontos = ()=>{
    
}

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
            createColum.addEventListener('click', mark);
            

        }
        document.querySelector("main").appendChild(createColum)
        
    }
}


const animation = (change, color, k) => {
    for (var i = 0; i <= k; i++) {
      (function loop(i) {
        setTimeout(function() {
            change[i].style.backgroundColor = color;
        }, 150*i)
      })(i);

      (function loop(i) {
        setTimeout(function() {
            change[i].style.backgroundColor="";
        }, 220*i)
      })(i);
    }
  }
  

//---Andre

const mark = (e) => {
    let change = e.target.parentNode.children;
    if(e.target.classList[0] === "sectionColuns"){
        change = e.target.children;
    }
    for(let i=5; i >= 0; i--){
        let n = change[i];
        let numCol = n.parentNode.id[n.parentNode.id.length -1] 
        let numLinha = n.className[n.className.length -1] 

        //Verificando se o n possui estilo
        if(n.style.backgroundColor === ""){
            let color
            if(player === 1 ){
                color= "red"
                player=2;
                board[numLinha][numCol] = 2
                
            
                 
            }else{
                color = "black"
                player=1;
                board[numLinha][numCol] = 1 

            }
            animation(change,color, i);
            setTimeout( timed = () => {
                n.style.backgroundColor = color;
            }, i * 220);
            
            break;
        }
        
    }
    e.stopPropagation()
}

createMap();