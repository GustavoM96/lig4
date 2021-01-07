const createMap = () => {
    for(let i = 0; i < 7; i++){
        const createColum = document.createElement("section");
        createColum.id = `coluna${i}`;
        createColum.classList.add("sectionColuns")
        createColum.addEventListener('click', createDisk);

        for(let j = 0; j < 6; j++){
        
            
            const createCell = document.createElement("div");
            createCell.classList.add(`cel${j}`)
            createColum.appendChild(createCell)
            createColum.addEventListener('click', createDisk);
        }
      
        document.querySelector("main").appendChild(createColum)
    }
}

const pontuar = () => {
    if(conditionWin(board)){
        if(player === 0){
            pontosPreto++
            placarPreto.innerHTML = `${pontosPreto}`
            limparMapa()
        }else{
            pontosVermelho++
            placarVermelho.innerText = `${pontosVermelho}`
            limparMapa()
        }
        showModalResultGame()
        
    }
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
        featuredPlayer()
    }else{
        player = 0;
        featuredPlayer()
    }
}

const selectNamePlayer = () => {
    playerName1 = document.getElementById("user1").value;
    playerName2 = document.getElementById("user2").value;

    locationForName[0].innerHTML = playerName1;
    locationForName[1].innerHTML = playerName2;

    document.getElementById("user1").value = "";
    document.getElementById("user2").value = "";

}

const resetar = () => {
    limparMapa()
    pontosVermelho = 0
    pontosPreto = 0
    
    placarPreto.innerHTML = `${pontosPreto}`
    placarVermelho.innerHTML = `${pontosVermelho}`
}

const showModalNamePlayer = () => modalNames.classList.toggle("hidden");

const showModalResultGame = () => {
    modalResult.classList.toggle("hidden");
    if(empate()){
        winnerName.innerText = "Deu empate, vamos jogar novamente";
    }else{
        if(player === 0){
            winnerName.innerText = "O vencedor é: " + playerName1;
        }else{
            winnerName.innerText = "O vencedor é: " + playerName2;
        }
    }
    
}
