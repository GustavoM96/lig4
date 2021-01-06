let b = 8
let player=1;
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

const boxPlayer = document.querySelectorAll("#players figure")

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

let containerPlayer = [];

const animation = (n, i) => {
    n.animate([
        // keyframes
        { transform: `translateY(-${220*(i + 1)}px)` },
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

const backMove = () => {
    let item = containerPlayer[containerPlayer.length - 1];
    item.style.backgroundColor = "";
    let numCol = item.parentNode.id[item.parentNode.id.length -1] 
    let numLinha = item.className[item.className.length -1]
    containerPlayer.pop()
    board[numLinha][numCol] = 0;
    if(player === 0){
        player = 1;
    }else{
        player = 0;
    }
}

const featuredPlayer = () => {
    console.log(player)
    if(player === 1){
        boxPlayer[0].style.backgroundColor = "#353b48";
        boxPlayer[1].style.backgroundColor = "";
    }else{
        boxPlayer[1].style.backgroundColor = "#353b48";
        boxPlayer[0].style.backgroundColor = "";
    }
}

boxPlayer[0].style.backgroundColor = "#353b48";

document.getElementById("backMove").addEventListener("click", backMove)

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
            containerPlayer.push(n);
            animation(n, i)
            featuredPlayer()
            break;
        }
        
    }
    
    e.stopPropagation();
    conditionWin(board);
    
}

createMap()


const conditionWin=(board)=>{
    let status=false;    
    const edgeY=board.length -3;
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
    
    
    
  
for(let i = 0; i < edgeY; i++){

    
    for(let j = 0; j < board[0].length; j++) {
      cell = board[i][j];
      
     
      if(cell !== 0) {
        
       
        if(cell === board[i+1][j] && cell === board[i+2][j] && 
            cell === board[i+3][j]) {
           status=true;
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
    
    
    
    for(let y = 12; y < board.length; y++){

        // iterate each cell in the row
        for(let x = 0; x < edgeX; x++) {
          cell = board[y][x];
          
          // Only check if cell is filled
          if(cell !== 0) {
            
            // Check the next two cells for the same value
            if(cell === board[y-1][x+1] && cell === board[y-2][x+2]) {
              console.log("3 in a row down-left found at " + (x+1) + ":" + (y+1))
            }
          }
        }
      }
    
    
    }
    