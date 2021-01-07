/*Constantes Globais */
const placarPreto = document.getElementById("pontoPreto");
const placarVermelho = document.getElementById("pontoVermelho");
const boxPlayer = document.querySelectorAll("#players figure");
const modalNames = document.getElementById("modal");
const locationForName = document.querySelectorAll("figure figcaption p");

/*Variaveis Globais */
let b = 8
let player=1;
let count=5;
let pontosVermelho = 0;
let pontosPreto = 0;
let contador = 0;
let containerPlayer = [];
let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

const empate = ()=>{

    if(!conditionWin(board)){
        for(let i = 0 ; i < board[0].length;i++){

            if(board[0][i] === 0){
                return false
            }
        }
        return true
    }
    return false
}


boxPlayer[0].style.backgroundColor = "#353b48";

const createDisk = (e) => {
    contador++;

    let change = e.target.parentNode.children;
    if(e.target.classList[0] === "sectionColuns"){
        change = e.target.children;
    }

    for(let i=5; i >= 0; i--){
        let n = change[i];
        let numCol = n.parentNode.id[n.parentNode.id.length -1] 
        let numLinha = n.className[n.className.length -1] 

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

    conditionWin(board);
    pontuar()
    conditionWin(board);
    e.stopPropagation();
}   

const animation = (n, i) => {
    n.animate([
        { transform: `translateY(-${220*(i + 1)}px)` },
        { transform: 'translateY(0)' }
      ], {
        duration: 600,
      });
}

const limparMapa = ()=>{
    let selecionaCelula = document.querySelectorAll('.sectionColuns div')
    player = 0
    for(let i = 0; i < selecionaCelula.length; i++){
        selecionaCelula[i].style.backgroundColor = ''
    }
    board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ]
}

createMap();

document.getElementById("backMove").addEventListener("click", backMove)

document.getElementById("name").addEventListener("click", showModalNamePlayer)

document.getElementById('botao').addEventListener('click', resetar)

document.getElementById("escolhaPlayer").addEventListener("click", selectNamePlayer)

document.getElementById("escolhaPlayer").addEventListener("click", showModalNamePlayer)


