//---Gustavo

let b = 8
let player=0;
let count=5;

//---Caio






//---Jardel




const createMap = () => {
    for(let i = 0; i < 7; i++){
        const createColum = document.createElement("section");
        createColum.id = `coluna${i+1}`;
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
        //Verificando se o n possui estilo
        if(n.style.backgroundColor === ""){
            let color
            if(player === 0 ){
                 color= "red"
                player=1;
            }else{
                color = "black"
                player=0; 
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