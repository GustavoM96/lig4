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

const selectNamePlayer = () => {
    const locationForName = document.querySelectorAll("figure figcaption p");
    let playerName1 = window.prompt("Nome do Jogador Preto:");
    let playerName2 = window.prompt("Nome do Jogador Vermelho:");

    if(playerName1 == ""){
        playerName1 = "Player1";
    }

    if(playerName2 ==  ""){
        playerName2 = "Player2";
    }

    locationForName[0].innerHTML = playerName1;
    locationForName[1].innerHTML = playerName2;

}

document.getElementById("name").addEventListener("click", selectNamePlayer);

//---Andre

const mark = (e) => {
    conditionWin(board);
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

            if(player === 0 ){
                n.style.backgroundColor = "red";
                player=1;
                board[numLinha][numCol] = 2
                
            }else{
                n.style.backgroundColor = "black";
                player=0; 
                board[numLinha][numCol] = 1 

            }
            
            animation(n, i)
            break;
        }
        
    }
    
    e.stopPropagation();
    
}

createMap()


const conditionWin=(board)=>{
    let status=false;    
    const edgeY=board[0].length -3;
    const edgeX=board[0].length -3;
    
    for(let i=0;i < board.length;i++){
        
        for(let j=0;j < edgeX;j++){
                let cell = board[i][j];
                if(cell !== 0){
                    if(cell === board[i][j+1] && cell === board[i][j+2] && cell === board[i][j+3]){
                        status= true;
                        console.log(status);
                    }
                }
            
        }
    }
    
    
    
    for(let i=0;i < edgeY;i++){
        
        for(let j=0;j <board.length;j++){
    
            let cell = board[i][j];
    
                if(cell !== 0){
    
                    if(cell === board[i+1][j] && cell === board[i+2][j] && cell === board[i+3][j]){
                        status= true;
                        console.log(status);
                }
            }
            
        }
    }
    
    
    
    
    for (let i = 0; i < edgeY; i++) {
    
            for(let j = 0; j < edgeX; j++) {
    
                cell = board[i][j];
    
                      if(cell !== 0){
                            if (cell === board[i+1][j+1] && cell === board[i+2][j+2] && cell === board[i+3][j+3]) {
                                status= true;
                                console.log(status);
                            }
                    }
            }
    }
    
    
    
    for (let i = 2; i < board.length; i++) {
    
        for (let j = 0; j < edgeX; j++) {
            cell = board[i][j];
     
            if (cell !== 0) {
     
                
                if(cell === board[i-1][j+1] && cell === board[i-2][j+2] && cell === cell === board[i-2][j+3]){
                    status= true;
                    console.log(status);
                }
            }
        }
     }
    
    return status;

    }
    
    
    