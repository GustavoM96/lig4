//---Gustavo

let b = 8
let player=0;
let count=5;
const obj={};
//---Caio






//---Jardel




const createMap = () => {
    for(let i = 0; i < 7; i++){
        const createColum = document.createElement("section");
        createColum.id = `coluna${i+1}`;
        createColum.classList.add("sectionColuns")
        for(let j = 0; j < 6; j++){
        
            
            const createCell = document.createElement("div");
            createCell.classList.add(`cel${j}`);
            createCell.dataset('row', j)
            createColum.appendChild(createCell);

            createColum.addEventListener('click', mark);
        }
      
        document.querySelector("main").appendChild(createColum)
        
    }
   
 
}

//---Andre

const mark=(e)=>{

const target = e.target;
const change = e.target.children;
for(let i=5; i >= 0; i--){
    let n = change[i];
//Verificando se o n possui estilo
console.log(n.style.backgroundColor);
    if(n.style.backgroundColor === ""){
        if(player === 0 ){
    
            n.style.backgroundColor="red";
            
            player=1;
          
        
            
            }else{
                n.style.backgroundColor="black";
            
                player=0;
                 
            }
        break;
    }else{
        // n.style.backgroundColor="red";
    
        continue;
    }
       
}

}

createMap();

console.log(obj);






